import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Shield, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-primary">
          Welcome to the KMRL Document System Prototype
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive document handling system for Kerala Metro Rail Limited
        </p>
        <Badge variant="secondary" className="text-sm">
          Hackathon Prototype
        </Badge>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/upload')}>
          <CardHeader className="text-center">
            <Upload className="h-12 w-12 text-primary mx-auto mb-2" />
            <CardTitle>Upload Documents</CardTitle>
            <CardDescription>
              Upload PDFs, images, or emails for processing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">
              Go to Upload
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/dashboard')}>
          <CardHeader className="text-center">
            <FileText className="h-12 w-12 text-primary mx-auto mb-2" />
            <CardTitle>Document Dashboard</CardTitle>
            <CardDescription>
              View and manage all documents with search and filters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">
              View Dashboard
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/compliance')}>
          <CardHeader className="text-center">
            <Shield className="h-12 w-12 text-accent mx-auto mb-2" />
            <CardTitle>Compliance</CardTitle>
            <CardDescription>
              Track compliance status and audit trails
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">
              Check Compliance
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/notifications')}>
          <CardHeader className="text-center">
            <Bell className="h-12 w-12 text-warning mx-auto mb-2" />
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              View alerts and deadline notifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">
              View Alerts
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* System Overview */}
      <Card>
        <CardHeader>
          <CardTitle>System Overview</CardTitle>
          <CardDescription>
            This prototype demonstrates a comprehensive document handling system for KMRL
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Documents Processed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">12</div>
              <div className="text-sm text-muted-foreground">Compliance Items</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">3</div>
              <div className="text-sm text-muted-foreground">Pending Alerts</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Welcome;