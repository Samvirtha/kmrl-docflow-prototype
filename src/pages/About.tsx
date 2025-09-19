import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  Target, 
  Lightbulb, 
  Code, 
  Github, 
  Mail,
  Award,
  Calendar,
  FileText
} from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Project Lead & Full-Stack Developer",
    email: "sarah.johnson@example.com",
    expertise: ["React", "Node.js", "System Architecture"]
  },
  {
    name: "Michael Chen",
    role: "Backend Developer & Data Analyst",
    email: "michael.chen@example.com", 
    expertise: ["Python", "Machine Learning", "Database Design"]
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer & Frontend Developer",
    email: "priya.sharma@example.com",
    expertise: ["UI Design", "React", "User Experience"]
  },
  {
    name: "David Kumar",
    role: "DevOps & Security Specialist",
    email: "david.kumar@example.com",
    expertise: ["AWS", "Security", "CI/CD Pipelines"]
  }
];

const techStack = [
  { name: "React", category: "Frontend", description: "Modern UI framework" },
  { name: "TypeScript", category: "Language", description: "Type-safe JavaScript" },
  { name: "Tailwind CSS", category: "Styling", description: "Utility-first CSS framework" },
  { name: "Shadcn/ui", category: "Components", description: "Reusable component library" },
  { name: "Vite", category: "Build Tool", description: "Fast development and build tool" },
  { name: "React Router", category: "Routing", description: "Client-side routing solution" }
];

const About = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">About KMRL Document System</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Information about the prototype, team members, and project purpose.
        </p>
        <Badge variant="secondary" className="text-sm">
          Hackathon Prototype 2024
        </Badge>
      </div>

      {/* Project Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Project Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The KMRL Document Handling System is a comprehensive prototype designed to streamline 
            document management processes for Kerala Metro Rail Limited. This system addresses 
            the challenge of handling large volumes of documents while maintaining compliance 
            and audit trails.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 border rounded-lg">
              <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold">Document Processing</h3>
              <p className="text-sm text-muted-foreground">
                Automated processing and categorization of uploaded documents
              </p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Award className="h-8 w-8 text-accent mx-auto mb-2" />
              <h3 className="font-semibold">Compliance Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Real-time monitoring of compliance requirements and deadlines
              </p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <Users className="h-8 w-8 text-warning mx-auto mb-2" />
              <h3 className="font-semibold">Collaborative Workflow</h3>
              <p className="text-sm text-muted-foreground">
                Multi-department collaboration with clear audit trails
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Key Features
          </CardTitle>
          <CardDescription>
            Core functionality demonstrated in this prototype
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Document Management</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Multi-format file upload (PDF, Images, Emails)</li>
                <li>• Automatic document categorization</li>
                <li>• Advanced search and filtering</li>
                <li>• Document version control</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Compliance & Workflow</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Compliance deadline tracking</li>
                <li>• Automated audit trail generation</li>
                <li>• Department-wise task assignment</li>
                <li>• Real-time notification system</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Development Team
          </CardTitle>
          <CardDescription>
            Meet the team behind this innovative solution
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-3">
                <div>
                  <h4 className="font-semibold">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-3 w-3" />
                  <span>{member.email}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technology Stack */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Technology Stack
          </CardTitle>
          <CardDescription>
            Modern technologies powering this prototype
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{tech.name}</h4>
                  <Badge variant="outline" className="text-xs">
                    {tech.category}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Project Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Project Timeline
          </CardTitle>
          <CardDescription>
            Development milestones and achievements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-success rounded-full" />
                <div className="w-px h-12 bg-border" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Project Conception</h4>
                <p className="text-xs text-muted-foreground">January 2024</p>
                <p className="text-sm text-muted-foreground">Initial research and requirement analysis</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-success rounded-full" />
                <div className="w-px h-12 bg-border" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Design & Architecture</h4>
                <p className="text-xs text-muted-foreground">January 2024</p>
                <p className="text-sm text-muted-foreground">UI/UX design and system architecture planning</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-warning rounded-full" />
                <div className="w-px h-12 bg-border" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Prototype Development</h4>
                <p className="text-xs text-muted-foreground">January 2024</p>
                <p className="text-sm text-muted-foreground">Core functionality implementation and testing</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-primary rounded-full" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium">Hackathon Presentation</h4>
                <p className="text-xs text-muted-foreground">January 2024</p>
                <p className="text-sm text-muted-foreground">Final prototype demo and presentation</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact & Links */}
      <Card>
        <CardHeader>
          <CardTitle>Project Links & Contact</CardTitle>
          <CardDescription>
            Get in touch or view the project repository
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              View on GitHub
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact Team
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Documentation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;