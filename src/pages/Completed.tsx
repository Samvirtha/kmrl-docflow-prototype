import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const mockCompletedDocs = [
  {
    id: "DOC-001",
    title: "Contract Agreement - Metro Line Extension",
    department: "Operations",
    completedDate: "2024-01-15",
    completedBy: "John Doe"
  },
  {
    id: "DOC-003",
    title: "Safety Compliance Audit",
    department: "Legal",
    completedDate: "2024-01-13",
    completedBy: "Jane Smith"
  },
  {
    id: "DOC-005",
    title: "Employee Policy Update Email",
    department: "HR",
    completedDate: "2024-01-11",
    completedBy: "Mike Johnson"
  }
];

const Completed = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <CheckCircle className="h-8 w-8 text-green-600" />
          Completed Documents
        </h1>
        <p className="text-muted-foreground">
          Documents that have been successfully processed and completed
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Completed Documents List</CardTitle>
          <CardDescription>Total: {mockCompletedDocs.length} documents</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Completed Date</TableHead>
                <TableHead>Completed By</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCompletedDocs.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-mono text-sm">{doc.id}</TableCell>
                  <TableCell className="font-medium">{doc.title}</TableCell>
                  <TableCell>{doc.department}</TableCell>
                  <TableCell>{doc.completedDate}</TableCell>
                  <TableCell>{doc.completedBy}</TableCell>
                  <TableCell>
                    <Badge className="bg-green-500">Completed</Badge>
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

export default Completed;
