import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, FileText, Calendar, User, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const mockDocuments = [
  {
    id: "DOC-001",
    title: "Contract Agreement - Metro Line Extension",
    type: "Contract",
    department: "Operations",
    uploadDate: "2024-01-15",
    status: "Processed",
    priority: "High"
  },
  {
    id: "DOC-002", 
    title: "Financial Report Q4 2023",
    type: "Report",
    department: "Finance",
    uploadDate: "2024-01-14",
    status: "Under Review",
    priority: "Medium"
  },
  {
    id: "DOC-003",
    title: "Safety Compliance Audit",
    type: "Policy",
    department: "Legal",
    uploadDate: "2024-01-13",
    status: "Approved",
    priority: "High"
  },
  {
    id: "DOC-004",
    title: "Vendor Invoice - Maintenance Equipment",
    type: "Invoice",
    department: "Maintenance",
    uploadDate: "2024-01-12",
    status: "Pending",
    priority: "Low"
  },
  {
    id: "DOC-005",
    title: "Employee Policy Update Email",
    type: "Email",
    department: "HR",
    uploadDate: "2024-01-11",
    status: "Processed",
    priority: "Medium"
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { role } = useAuth();
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved": return "secondary";
      case "Processed": return "secondary";
      case "Under Review": return "secondary";
      case "Pending": return "outline";
      default: return "secondary";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "destructive";
      case "Medium": return "secondary";
      case "Low": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Document Dashboard</h1>
          <Badge variant="outline" className="text-lg px-4 py-2">
            Role: {role}
          </Badge>
        </div>
        <p className="text-muted-foreground">
          {role === 'Admin' && 'Complete overview of all documents across all departments'}
          {role === 'HOD' && 'Department document overview with bilingual support'}
          {role === 'Staff' && 'Your assigned documents and tasks'}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              <div className="text-2xl font-bold">127</div>
            </div>
            <p className="text-sm text-muted-foreground">Total Documents</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-success" />
              <div className="text-2xl font-bold">23</div>
            </div>
            <p className="text-sm text-muted-foreground">Processed Today</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-warning" />
              <div className="text-2xl font-bold">8</div>
            </div>
            <p className="text-sm text-muted-foreground">Awaiting Review</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Badge className="h-4 w-4 text-danger" />
              <div className="text-2xl font-bold">3</div>
            </div>
            <p className="text-sm text-muted-foreground">High Priority</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search & Filter Documents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input placeholder="Search documents by title, ID, or content..." />
            </div>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="operations">Operations</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="hr">HR</SelectItem>
                <SelectItem value="legal">Legal</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="processed">Processed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="review">Under Review</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Documents Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Documents</CardTitle>
          <CardDescription>
            This is a table showing document summaries with key information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Upload Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockDocuments.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-mono text-sm">{doc.id}</TableCell>
                  <TableCell className="font-medium">{doc.title}</TableCell>
                  <TableCell>{doc.type}</TableCell>
                  <TableCell>{doc.department}</TableCell>
                  <TableCell>{doc.uploadDate}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(doc.status) as any}>
                      {doc.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getPriorityColor(doc.priority) as any}>
                      {doc.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => navigate(`/document/${doc.id}`)}
                      className="flex items-center gap-1"
                    >
                      <Eye className="h-3 w-3" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;