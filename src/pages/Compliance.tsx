import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Clock, CheckCircle, AlertTriangle, Eye, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const mockComplianceItems = {
  pending: [
    {
      id: "COMP-001",
      title: "Safety Audit Compliance Review",
      dueDate: "2024-01-25",
      priority: "High",
      department: "Operations",
      progress: 45
    },
    {
      id: "COMP-002", 
      title: "Financial Disclosure Filing",
      dueDate: "2024-01-30",
      priority: "Medium",
      department: "Finance",
      progress: 20
    }
  ],
  upcoming: [
    {
      id: "COMP-003",
      title: "Environmental Impact Assessment",
      dueDate: "2024-02-15",
      priority: "High",
      department: "Legal",
      progress: 0
    },
    {
      id: "COMP-004",
      title: "Employee Training Certification",
      dueDate: "2024-02-20",
      priority: "Medium", 
      department: "HR",
      progress: 10
    }
  ],
  completed: [
    {
      id: "COMP-005",
      title: "Q4 Regulatory Reporting",
      completedDate: "2024-01-10",
      priority: "High",
      department: "Finance",
      progress: 100
    },
    {
      id: "COMP-006",
      title: "Security Compliance Audit",
      completedDate: "2024-01-08",
      priority: "Medium",
      department: "Operations", 
      progress: 100
    }
  ],
  overdue: [
    {
      id: "COMP-007",
      title: "Maintenance Documentation Update",
      dueDate: "2024-01-05",
      priority: "High",
      department: "Maintenance",
      progress: 75
    }
  ]
};

const Compliance = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "destructive";
      case "Medium": return "secondary";
      case "Low": return "outline";
      default: return "secondary";
    }
  };

  const ComplianceCard = ({ item, type }: { item: any, type: string }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-base">{item.title}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-mono">{item.id}</span>
              <span>•</span>
              <span>{item.department}</span>
            </div>
          </div>
          <Badge variant={getPriorityColor(item.priority) as any} className="text-xs">
            {item.priority}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {type !== 'completed' && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{item.progress}%</span>
            </div>
            <Progress value={item.progress} className="h-2" />
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {type === 'completed' ? (
              <>Completed: {item.completedDate}</>
            ) : type === 'overdue' ? (
              <span className="text-danger font-medium">Overdue: {item.dueDate}</span>
            ) : (
              <>Due: {item.dueDate}</>
            )}
          </div>
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate(`/document/${item.id}`)}
              className="text-xs"
            >
              <Eye className="h-3 w-3 mr-1" />
              View
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-xs"
            >
              <FileText className="h-3 w-3 mr-1" />
              Audit Trail
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const getFilteredItems = (items: any[]) => {
    if (user?.role === 'admin') return items;
    return items.filter(item => item.department === user?.department);
  };

  const filteredPending = getFilteredItems(mockComplianceItems.pending);
  const filteredUpcoming = getFilteredItems(mockComplianceItems.upcoming);
  const filteredCompleted = getFilteredItems(mockComplianceItems.completed);
  const filteredOverdue = getFilteredItems(mockComplianceItems.overdue);

  const getRoleTitle = () => {
    switch (user?.role) {
      case 'admin': return 'Admin Compliance Dashboard';
      case 'hod': return `HOD Compliance - ${user.department}`;
      case 'staff': return `Staff Compliance - ${user.department}`;
      default: return 'Compliance Dashboard';
    }
  };

  const getRoleDescription = () => {
    switch (user?.role) {
      case 'admin':
        return 'Complete compliance overview across all departments with pending, upcoming, completed & overdue items.';
      case 'hod':
        return `Department compliance summary for ${user.department}. Monitor team progress and deadlines.`;
      case 'staff':
        return `Your compliance tasks for ${user.department}. Focus on overdue and completed items assigned to you.`;
      default:
        return 'Compliance dashboard showing pending, upcoming, completed & overdue items.';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          {getRoleTitle()}
        </h1>
        <p className="text-muted-foreground">
          {getRoleDescription()}
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-warning" />
              <div className="text-2xl font-bold">{filteredPending.length}</div>
            </div>
            <p className="text-sm text-muted-foreground">Pending Items</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <div className="text-2xl font-bold">{filteredCompleted.length}</div>
            </div>
            <p className="text-sm text-muted-foreground">Completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-danger" />
              <div className="text-2xl font-bold">{filteredOverdue.length}</div>
            </div>
            <p className="text-sm text-muted-foreground">Overdue</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <div className="text-2xl font-bold">92%</div>
            </div>
            <p className="text-sm text-muted-foreground">Compliance Rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Compliance Items Tabs */}
      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="pending" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Pending ({filteredPending.length})
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Upcoming ({filteredUpcoming.length})
          </TabsTrigger>
          <TabsTrigger value="completed" className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            Completed ({filteredCompleted.length})
          </TabsTrigger>
          <TabsTrigger value="overdue" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Overdue ({filteredOverdue.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPending.map((item) => (
              <ComplianceCard key={item.id} item={item} type="pending" />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredUpcoming.map((item) => (
              <ComplianceCard key={item.id} item={item} type="upcoming" />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCompleted.map((item) => (
              <ComplianceCard key={item.id} item={item} type="completed" />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="overdue" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredOverdue.map((item) => (
              <ComplianceCard key={item.id} item={item} type="overdue" />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Compliance;