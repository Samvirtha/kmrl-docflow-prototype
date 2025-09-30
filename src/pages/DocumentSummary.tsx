import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Building2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const documentSummaries = {
  "DOC-1": {
    id: "DOC-1",
    department: "Operations",
    departmentMalayalam: "പ്രവർത്തനങ്ങൾ",
    english: "The Operations Department issued a circular on metro station maintenance from October 5–10, 2025. Staff must follow revised shift timings and safety protocols, reporting any issues immediately.",
    malayalam: "ഓപ്പറേഷൻസ് ഡിപ്പാർട്ട്മെന്റ് 2025 ഒക്ടോബർ 5–10 മെട്രോ സ്റ്റേഷൻ പരിപാലനത്തിന് സർകുലർ ഇറക്കി. സ്റ്റാഫ് പുതുക്കിയ ഷിഫ്റ്റ് സമയവും സുരക്ഷാ നിർദ്ദേശങ്ങളും പാലിച്ച് പ്രശ്നങ്ങൾ ഉടൻ റിപ്പോർട്ട് ചെയ്യണം.",
    date: "October 5-10, 2025"
  },
  "DOC-2": {
    id: "DOC-2",
    department: "Operations",
    departmentMalayalam: "പ്രവർത്തനങ്ങൾ",
    english: "The Operations Department has issued a circular regarding staff training on emergency response procedures scheduled for October 15, 2025. All personnel must attend and complete the training as per the guidelines.",
    malayalam: "ഓപ്പറേഷൻസ് ഡിപ്പാർട്ട്മെന്റ് 2025 ഒക്ടോബർ 15 ന് ആപത്തുചുമതലകളുടെ പരിശീലനത്തിനുള്ള സർകുലർ ഇറക്കി. എല്ലാ സ്റ്റാഫും നിർദ്ദേശങ്ങൾ അനുസരിച്ച് പരിശീലനം പൂർണ്ണമാക്കണം.",
    date: "October 15, 2025"
  },
  "DOC-3": {
    id: "DOC-3",
    department: "Engineering",
    departmentMalayalam: "എഞ്ചിനീയറിംഗ്",
    english: "The Engineering Department has issued a circular regarding inspection and maintenance of track equipment from October 8–12, 2025. All engineers must ensure compliance with maintenance protocols and report any faults immediately.",
    malayalam: "എഞ്ചിനീയറിംഗ് ഡിപ്പാർട്ട്മെന്റ് 2025 ഒക്ടോബർ 8–12 ട്രാക്ക് ഉപകരണങ്ങളുടെ പരിശോധനയും പരിപാലനവും സംബന്ധിച്ച് സർകുലർ ഇറക്കി. എല്ലാ എഞ്ചിനീയർമാരും പരിപാലന മാർഗ്ഗനിർദ്ദേശങ്ങൾ പാലിച്ച് പ്രശ്നങ്ങൾ ഉടൻ റിപ്പോർട്ട് ചെയ്യണം.",
    date: "October 8-12, 2025"
  }
};

const DocumentSummary = () => {
  const { role } = useAuth();
  const isAdmin = role === 'Admin';
  
  // Determine which documents to show based on role
  const visibleDocs = isAdmin 
    ? ["DOC-1", "DOC-2", "DOC-3"] 
    : ["DOC-1", "DOC-2"];

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
            ? 'Overview of all departments circulars and documents / എല്ലാ വകുപ്പുകളുടെയും സർക്കുലറുകളും രേഖകളും'
            : 'Overview of department circulars and documents / വകുപ്പ് സർക്കുലറുകളും രേഖകളും'}
        </p>
      </div>

      {/* Document Summaries */}
      <div className="space-y-4">
        {visibleDocs.map((docId) => {
          const doc = documentSummaries[docId as keyof typeof documentSummaries];
          return (
            <Card key={doc.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    {doc.id} - {doc.department} / {doc.departmentMalayalam}
                  </CardTitle>
                  <Badge variant="outline">{doc.date}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">English Summary:</h4>
                  <p className="text-sm leading-relaxed">{doc.english}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Malayalam Summary / മലയാളം സംഗ്രഹം:</h4>
                  <p className="text-sm leading-relaxed">{doc.malayalam}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DocumentSummary;
