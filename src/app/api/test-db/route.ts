import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';

export async function GET() {
  try {
    // Connect to the database
    const mongoose = await dbConnect();
    
    // Get database stats
    const dbStats = {
      isConnected: mongoose.connection.readyState === 1,
      host: mongoose.connection.host,
      name: mongoose.connection.name,
      collections: mongoose.connection.readyState === 1 && mongoose.connection.db 
        ? await mongoose.connection.db.listCollections().toArray()
        : []
    };
    
    // Return database information
    return NextResponse.json({ 
      success: true, 
      message: 'Connected to MongoDB Atlas successfully!',
      dbStats
    });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to connect to MongoDB', error: String(error) },
      { status: 500 }
    );
  }
} 