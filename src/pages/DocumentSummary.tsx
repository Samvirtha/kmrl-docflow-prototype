import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Building2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const mockSummary = [
  {
    department: "Operations",
    departmentMalayalam: "പ്രവർത്തനങ്ങൾ",
    total: 45,
    pending: 12,
    completed: 28,
    overdue: 5
  },
  {
    department: "Finance",
    departmentMalayalam: "ധനകാര്യം",
    total: 32,
    pending: 8,
    completed: 22,
    overdue: 2
  },
  {
    department: "Legal",
    departmentMalayalam: "നിയമപരം",
    total: 28,
    pending: 10,
    completed: 16,
    overdue: 2
  },
  {
    department: "HR",
    departmentMalayalam: "മനുഷ്യവിഭവശേഷി",
    total: 19,
    pending: 5,
    completed: 13,
    overdue: 1
  },
  {
    department: "Maintenance",
    departmentMalayalam: "പരിപാലനം",
    total: 23,
    pending: 7,
    completed: 14,
    overdue: 2
  }
];

const DocumentSummary = () => {
  const { role } = useAuth();
  const isAdmin = role === 'Admin';

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <FileText className="h-8 w-8 text-blue-600" />
          {isAdmin ? 'All Departments Summary' : 'Document Summary'}
          <span className="text-xl text-muted-foreground">/ {isAdmin ? 'എല്ലാ വകുപ്പുകളും' : 'രേഖകളുടെ സംഗ്രഹം'}</span>
        </h1>
        <p className="text-muted-foreground">
          {isAdmin 
            ? 'Overview of all departments document status / എല്ലാ വകുപ്പുകളുടെയും രേഖകളുടെ അവസ്ഥ'
            : 'Overview of document processing status / രേഖകളുടെ പ്രോസസ്സിംഗ് അവസ്ഥ'}
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-blue-600">
              {mockSummary.reduce((acc, dept) => acc + dept.total, 0)}
            </div>
            <p className="text-sm text-muted-foreground">Total Documents</p>
            <p className="text-xs text-muted-foreground">മൊത്തം രേഖകൾ</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-yellow-600">
              {mockSummary.reduce((acc, dept) => acc + dept.pending, 0)}
            </div>
            <p className="text-sm text-muted-foreground">Pending</p>
            <p className="text-xs text-muted-foreground">തീർപ്പാക്കാത്തവ</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-600">
              {mockSummary.reduce((acc, dept) => acc + dept.completed, 0)}
            </div>
            <p className="text-sm text-muted-foreground">Completed</p>
            <p className="text-xs text-muted-foreground">പൂർത്തിയായവ</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-red-600">
              {mockSummary.reduce((acc, dept) => acc + dept.overdue, 0)}
            </div>
            <p className="text-sm text-muted-foreground">Overdue</p>
            <p className="text-xs text-muted-foreground">കാലഹരണപ്പെട്ടവ</p>
          </CardContent>
        </Card>
      </div>

      {/* Department-wise Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Department-wise Status / വകുപ്പ് അനുസരിച്ചുള്ള സ്ഥിതി
          </CardTitle>
          <CardDescription>
            Detailed breakdown by department / വകുപ്പ് അനുസരിച്ചുള്ള വിശദാംശങ്ങൾ
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Department / വകുപ്പ്</TableHead>
                <TableHead>Total / മൊത്തം</TableHead>
                <TableHead>Pending / തീർപ്പാക്കാത്തവ</TableHead>
                <TableHead>Completed / പൂർത്തിയായവ</TableHead>
                <TableHead>Overdue / കാലഹരണപ്പെട്ടവ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSummary.map((dept) => (
                <TableRow key={dept.department}>
                  <TableCell className="font-medium">
                    <div>{dept.department}</div>
                    <div className="text-xs text-muted-foreground">{dept.departmentMalayalam}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{dept.total}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-500">{dept.pending}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green-500">{dept.completed}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="destructive">{dept.overdue}</Badge>
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

export default DocumentSummary;
