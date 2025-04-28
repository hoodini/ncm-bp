import mongoose from 'mongoose';

// Define the interface for the global mongoose cache
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Declare mongoose property on global object
declare global {
  var mongoose: MongooseCache | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose || { conn: null, promise: null };

// Set the mongoose cache on the global object
global.mongoose = cached;

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('Connected to MongoDB Atlas!');
      // Log information about the database
      const connectionState = mongoose.connection.readyState;
      const stateMap = {
        0: 'disconnected',
        1: 'connected',
        2: 'connecting',
        3: 'disconnecting',
      };
      console.log(`MongoDB connection state: ${stateMap[connectionState as 0 | 1 | 2 | 3]}`);
      console.log(`MongoDB host: ${mongoose.connection.host}`);
      console.log(`MongoDB database name: ${mongoose.connection.name}`);

      return mongoose;
    }).catch(err => {
      console.error('MongoDB connection error:', err);
      throw err;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
