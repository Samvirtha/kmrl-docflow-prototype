import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";

const mockOverdueDocs = [
  {
    id: "DOC-002",
    title: "Financial Report Q4 2023",
    department: "Finance",
    dueDate: "2024-01-10",
    daysOverdue: 5,
    assignedTo: "Sarah Wilson"
  },
  {
    id: "DOC-004",
    title: "Vendor Invoice - Maintenance Equipment",
    department: "Maintenance",
    dueDate: "2024-01-08",
    daysOverdue: 7,
    assignedTo: "Tom Brown"
  }
];

const Overdue = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <AlertCircle className="h-8 w-8 text-red-600" />
          Overdue Documents
        </h1>
        <p className="text-muted-foreground">
          Documents that have passed their deadline and require immediate attention
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overdue Documents List</CardTitle>
          <CardDescription>Total: {mockOverdueDocs.length} overdue documents</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Days Overdue</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockOverdueDocs.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-mono text-sm">{doc.id}</TableCell>
                  <TableCell className="font-medium">{doc.title}</TableCell>
                  <TableCell>{doc.department}</TableCell>
                  <TableCell>{doc.dueDate}</TableCell>
                  <TableCell className="text-red-600 font-semibold">{doc.daysOverdue} days</TableCell>
                  <TableCell>{doc.assignedTo}</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Overdue</Badge>
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

export default Overdue;
