import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, 
  AlertTriangle, 
  Clock, 
  CheckCircle, 
  FileText,
  Settings,
  Eye,
  X
} from "lucide-react";

const mockNotifications = {
  urgent: [
    {
      id: "NOTIF-001",
      title: "Contract Review Overdue",
      message: "Contract Agreement - Metro Line Extension (DOC-001) review is 2 days overdue.",
      timestamp: "2024-01-18 14:30:00",
      type: "overdue",
      documentId: "DOC-001",
      priority: "high"
    },
    {
      id: "NOTIF-002",
      title: "Compliance Deadline Approaching",
      message: "Safety Audit Compliance Review (COMP-001) is due in 24 hours.",
      timestamp: "2024-01-18 09:15:00",
      type: "deadline",
      documentId: "COMP-001",
      priority: "high"
    }
  ],
  recent: [
    {
      id: "NOTIF-003",
      title: "Document Successfully Processed",
      message: "Financial Report Q4 2023 (DOC-002) has been processed and assigned for review.",
      timestamp: "2024-01-17 16:45:00",
      type: "success",
      documentId: "DOC-002",
      priority: "medium"
    },
    {
      id: "NOTIF-004",
      title: "New Document Uploaded",
      message: "Employee Policy Update Email has been uploaded by Sarah Johnson.",
      timestamp: "2024-01-17 11:20:00",
      type: "info",
      documentId: "DOC-005",
      priority: "low"
    },
    {
      id: "NOTIF-005",
      title: "Review Completed",
      message: "Security Compliance Audit has been approved by Legal department.",
      timestamp: "2024-01-16 13:30:00",
      type: "success",
      documentId: "COMP-006",
      priority: "medium"
    }
  ],
  system: [
    {
      id: "NOTIF-006",
      title: "System Maintenance Scheduled",
      message: "Scheduled maintenance window on 2024-01-20 from 02:00 to 04:00 AM.",
      timestamp: "2024-01-15 10:00:00",
      type: "info",
      priority: "low"
    },
    {
      id: "NOTIF-007",
      title: "Backup Completed Successfully",
      message: "Daily system backup completed successfully. All data secure.",
      timestamp: "2024-01-18 03:00:00",
      type: "success",
      priority: "low"
    }
  ]
};

const Notifications = () => {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "overdue": return <AlertTriangle className="h-4 w-4 text-danger" />;
      case "deadline": return <Clock className="h-4 w-4 text-warning" />;
      case "success": return <CheckCircle className="h-4 w-4 text-success" />;
      case "info": return <Bell className="h-4 w-4 text-primary" />;
      default: return <Bell className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "outline";
      default: return "secondary";
    }
  };

  const NotificationCard = ({ notification }: { notification: any }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="mt-1">
            {getNotificationIcon(notification.type)}
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between">
              <h4 className="text-sm font-medium leading-tight">
                {notification.title}
              </h4>
              <div className="flex items-center gap-2">
                <Badge variant={getPriorityColor(notification.priority) as any} className="text-xs">
                  {notification.priority}
                </Badge>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {notification.message}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {notification.timestamp}
              </span>
              <div className="flex gap-2">
                {notification.documentId && (
                  <Button variant="ghost" size="sm" className="text-xs h-7">
                    <FileText className="h-3 w-3 mr-1" />
                    View Doc
                  </Button>
                )}
                <Button variant="ghost" size="sm" className="text-xs h-7">
                  <Eye className="h-3 w-3 mr-1" />
                  Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">Notifications & Alerts</h1>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </div>
        <p className="text-muted-foreground">
          This is a mock notifications page. Alerts for urgent deadlines will appear here.
        </p>
      </div>

      {/* Notification Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-danger" />
              <div className="text-2xl font-bold">{mockNotifications.urgent.length}</div>
            </div>
            <p className="text-sm text-muted-foreground">Urgent Alerts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-primary" />
              <div className="text-2xl font-bold">{mockNotifications.recent.length}</div>
            </div>
            <p className="text-sm text-muted-foreground">Recent Notifications</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4 text-muted-foreground" />
              <div className="text-2xl font-bold">{mockNotifications.system.length}</div>
            </div>
            <p className="text-sm text-muted-foreground">System Alerts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <div className="text-2xl font-bold">18</div>
            </div>
            <p className="text-sm text-muted-foreground">Resolved Today</p>
          </CardContent>
        </Card>
      </div>

      {/* Notifications Tabs */}
      <Tabs defaultValue="urgent" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="urgent" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Urgent ({mockNotifications.urgent.length})
          </TabsTrigger>
          <TabsTrigger value="recent" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Recent ({mockNotifications.recent.length})
          </TabsTrigger>
          <TabsTrigger value="system" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            System ({mockNotifications.system.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="urgent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <AlertTriangle className="h-5 w-5" />
                Urgent Alerts - Immediate Action Required
              </CardTitle>
              <CardDescription>
                These notifications require immediate attention to prevent compliance issues
              </CardDescription>
            </CardHeader>
          </Card>
          <div className="space-y-3">
            {mockNotifications.urgent.map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
              <CardDescription>
                Latest updates and status changes for your documents
              </CardDescription>
            </CardHeader>
          </Card>
          <div className="space-y-3">
            {mockNotifications.recent.map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Notifications</CardTitle>
              <CardDescription>
                System maintenance, updates, and administrative notifications
              </CardDescription>
            </CardHeader>
          </Card>
          <div className="space-y-3">
            {mockNotifications.system.map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Manage your notification preferences and settings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline">Mark All as Read</Button>
            <Button variant="outline">Clear Resolved</Button>
            <Button variant="outline">Export Notifications</Button>
            <Button variant="outline">Notification Preferences</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Notifications;