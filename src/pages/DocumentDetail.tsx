import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Download, 
  Eye, 
  Clock, 
  User, 
  Building, 
  Calendar,
  CheckCircle,
  AlertCircle,
  Edit
} from "lucide-react";
import { useParams } from "react-router-dom";

const mockDocument = {
  id: "DOC-001",
  title: "Contract Agreement - Metro Line Extension",
  type: "Contract",
  department: "Operations",
  uploadDate: "2024-01-15",
  status: "Under Review",
  priority: "High",
  assignedTo: "John Smith",
  description: "Contract agreement for the extension of Metro Line 2 including construction, safety protocols, and compliance requirements.",
  fileSize: "2.4 MB",
  fileType: "PDF"
};

const mockAuditTrail = [
  {
    id: 1,
    action: "Document Uploaded",
    user: "Sarah Johnson",
    department: "Operations",
    timestamp: "2024-01-15 09:30:00",
    status: "completed",
    notes: "Initial document upload from email attachment"
  },
  {
    id: 2,
    action: "Automatic Processing",
    user: "System",
    department: "System",
    timestamp: "2024-01-15 09:31:00", 
    status: "completed",
    notes: "Document processed and categorized automatically"
  },
  {
    id: 3,
    action: "Assigned for Review",
    user: "Sarah Johnson",
    department: "Operations",
    timestamp: "2024-01-15 10:15:00",
    status: "completed",
    notes: "Assigned to John Smith for legal review"
  },
  {
    id: 4,
    action: "Review in Progress",
    user: "John Smith",
    department: "Legal",
    timestamp: "2024-01-16 14:20:00",
    status: "in-progress",
    notes: "Currently reviewing contract terms and compliance requirements"
  },
  {
    id: 5,
    action: "Compliance Check Required",
    user: "System",
    department: "System",
    timestamp: "2024-01-17 08:00:00",
    status: "pending",
    notes: "Automated compliance check scheduled"
  }
];

const DocumentDetail = () => {
  const { id } = useParams();
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4 text-success" />;
      case "in-progress": return <Clock className="h-4 w-4 text-warning" />;
      case "pending": return <AlertCircle className="h-4 w-4 text-muted-foreground" />;
      default: return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Under Review": return "secondary";
      case "Approved": return "secondary";
      case "Processed": return "secondary";
      case "Pending": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">Document Details</h1>
        </div>
        <p className="text-muted-foreground">
          This page shows audit trail, assigned department, status updates, and links to original document.
        </p>
      </div>

      {/* Document Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl">{mockDocument.title}</CardTitle>
                  <CardDescription className="font-mono text-sm">
                    Document ID: {mockDocument.id}
                  </CardDescription>
                </div>
                <Badge variant={getStatusColor(mockDocument.status) as any}>
                  {mockDocument.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {mockDocument.description}
              </p>
              
              <Separator />
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">{mockDocument.department}</div>
                    <div className="text-xs text-muted-foreground">Department</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">{mockDocument.assignedTo}</div>
                    <div className="text-xs text-muted-foreground">Assigned To</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">{mockDocument.uploadDate}</div>
                    <div className="text-xs text-muted-foreground">Upload Date</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium">{mockDocument.fileType}</div>
                    <div className="text-xs text-muted-foreground">{mockDocument.fileSize}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                View Original PDF
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Document
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Edit Details
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Priority & Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Priority Level:</span>
                <Badge variant="destructive" className="text-xs">
                  {mockDocument.priority}
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Document Type:</span>
                <span className="text-sm font-medium">{mockDocument.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Current Status:</span>
                <Badge variant={getStatusColor(mockDocument.status) as any} className="text-xs">
                  {mockDocument.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Audit Trail and Additional Info */}
      <Tabs defaultValue="audit" className="space-y-4">
        <TabsList>
          <TabsTrigger value="audit">Audit Trail</TabsTrigger>
          <TabsTrigger value="compliance">Compliance Info</TabsTrigger>
          <TabsTrigger value="related">Related Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="audit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Document Audit Trail</CardTitle>
              <CardDescription>
                Complete history of actions performed on this document
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockAuditTrail.map((entry, index) => (
                  <div key={entry.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      {getStatusIcon(entry.status)}
                      {index < mockAuditTrail.length - 1 && (
                        <div className="w-px h-12 bg-border mt-2" />
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium">{entry.action}</h4>
                        <time className="text-xs text-muted-foreground">
                          {entry.timestamp}
                        </time>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        <span>{entry.user}</span>
                        <span>•</span>
                        <span>{entry.department}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{entry.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Information</CardTitle>
              <CardDescription>
                Compliance status and requirements for this document
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Compliance Requirements</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Safety protocol compliance</li>
                      <li>• Legal review required</li>
                      <li>• Environmental impact assessment</li>
                      <li>• Financial audit trail</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Completion Status</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Safety Review</span>
                        <Badge variant="secondary" className="text-xs bg-success text-success-foreground">Complete</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Legal Review</span>
                        <Badge variant="secondary" className="text-xs bg-warning text-warning-foreground">In Progress</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Environmental Check</span>
                        <Badge variant="secondary" className="text-xs">Pending</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="related" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Related Documents</CardTitle>
              <CardDescription>
                Documents related to this contract or project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-primary" />
                    <div>
                      <div className="text-sm font-medium">Environmental Impact Report</div>
                      <div className="text-xs text-muted-foreground">DOC-102 • Uploaded 2024-01-10</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-3 w-3" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-primary" />
                    <div>
                      <div className="text-sm font-medium">Safety Protocol Guidelines</div>
                      <div className="text-xs text-muted-foreground">DOC-089 • Uploaded 2024-01-08</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-3 w-3" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-primary" />
                    <div>
                      <div className="text-sm font-medium">Budget Allocation Document</div>
                      <div className="text-xs text-muted-foreground">DOC-076 • Uploaded 2024-01-05</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DocumentDetail;