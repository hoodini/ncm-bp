import { auth, currentUser } from "@clerk/nextjs/server";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Save, User, Bell, Lock, Shield, Globe, MonitorSmartphone, Mail } from "lucide-react";

export default async function SettingsPage() {
  const session = await auth();
  const user = await currentUser();
  const userName = user?.firstName || user?.username || "User";

  return (
    <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <TabsList className="flex flex-col h-auto bg-white/5 dark:bg-black/5 backdrop-blur-sm p-1 rounded-lg">
              <TabsTrigger value="profile" className="w-full justify-start text-left py-3 px-4">
                <User className="h-4 w-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="account" className="w-full justify-start text-left py-3 px-4">
                <Lock className="h-4 w-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger value="notifications" className="w-full justify-start text-left py-3 px-4">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger value="security" className="w-full justify-start text-left py-3 px-4">
                <Shield className="h-4 w-4 mr-2" />
                Security
              </TabsTrigger>
              <TabsTrigger value="appearance" className="w-full justify-start text-left py-3 px-4">
                <MonitorSmartphone className="h-4 w-4 mr-2" />
                Appearance
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="flex-1">
            <TabsContent value="profile" className="mt-0">
              <Card className="backdrop-blur-sm bg-white/5 dark:bg-black/5 border-white/10">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your profile information and how it appears to others
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Yuval Avidani" />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" placeholder="yuvalav" />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="yuval@yuv.ai" type="email" />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="bio">Bio</Label>
                      <textarea 
                        id="bio" 
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="AI Builder & Speaker | Making technical content accessible in non-technical ways"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border/40 pt-6 flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="account" className="mt-0">
              <Card className="backdrop-blur-sm bg-white/5 dark:bg-black/5 border-white/10">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Update your account settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    
                    <div className="grid gap-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border/40 pt-6 flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Update Password
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications" className="mt-0">
              <Card className="backdrop-blur-sm bg-white/5 dark:bg-black/5 border-white/10">
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>
                    Configure how and when you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="email-notifications">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications via email
                        </p>
                      </div>
                      <Switch id="email-notifications" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="marketing-emails">Marketing Emails</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive emails about new features and offers
                        </p>
                      </div>
                      <Switch id="marketing-emails" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="activity-updates">Activity Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications about activity on your projects
                        </p>
                      </div>
                      <Switch id="activity-updates" defaultChecked />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border/40 pt-6 flex justify-between">
                  <Button variant="outline">Reset to Default</Button>
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Preferences
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="security" className="mt-0">
              <Card className="backdrop-blur-sm bg-white/5 dark:bg-black/5 border-white/10">
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>
                    Manage your security preferences and two-factor authentication
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Switch id="two-factor" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="session-timeout">Session Timeout</Label>
                        <p className="text-sm text-muted-foreground">
                          Automatically log out after period of inactivity
                        </p>
                      </div>
                      <Switch id="session-timeout" defaultChecked />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border/40 pt-6 flex justify-between">
                  <Button variant="outline">Reset to Default</Button>
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="appearance" className="mt-0">
              <Card className="backdrop-blur-sm bg-white/5 dark:bg-black/5 border-white/10">
                <CardHeader>
                  <CardTitle>Appearance Settings</CardTitle>
                  <CardDescription>
                    Customize how the dashboard looks and feels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="dark-mode">Color Theme</Label>
                        <p className="text-sm text-muted-foreground">
                          Choose between light, dark, or system theme
                        </p>
                      </div>
                      <select 
                        id="dark-mode" 
                        className="flex h-9 w-40 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="system" selected>System</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="reduced-motion">Reduced Motion</Label>
                        <p className="text-sm text-muted-foreground">
                          Reduce animation and motion effects
                        </p>
                      </div>
                      <Switch id="reduced-motion" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="compact-view">Compact View</Label>
                        <p className="text-sm text-muted-foreground">
                          Display more content with less spacing
                        </p>
                      </div>
                      <Switch id="compact-view" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-border/40 pt-6 flex justify-between">
                  <Button variant="outline">Reset to Default</Button>
                  <Button>
                    <Save className="h-4 w-4 mr-2" />
                    Save Preferences
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
} 