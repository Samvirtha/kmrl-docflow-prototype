import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Upload as UploadIcon, FileText, Image, Mail } from "lucide-react";

const Upload = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Upload Documents</h1>
        <p className="text-muted-foreground">
          This is the Upload Page. Users can upload PDFs, images, or emails here.
        </p>
      </div>

      {/* Upload Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UploadIcon className="h-5 w-5" />
              File Upload
            </CardTitle>
            <CardDescription>
              Select files to upload to the document system
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
              <UploadIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag and drop files here, or click to browse
              </p>
              <Button variant="outline">Browse Files</Button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="file-input">Or select file manually</Label>
              <Input id="file-input" type="file" multiple />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Document Details</CardTitle>
            <CardDescription>
              Provide additional information about the document
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="document-type">Document Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select document type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="invoice">Invoice</SelectItem>
                  <SelectItem value="report">Report</SelectItem>
                  <SelectItem value="policy">Policy Document</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="operations">Operations</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="hr">Human Resources</SelectItem>
                  <SelectItem value="legal">Legal</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                placeholder="Enter document description or notes..."
                rows={3}
              />
            </div>

            <Button className="w-full">
              Upload Document
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Supported File Types */}
      <Card>
        <CardHeader>
          <CardTitle>Supported File Types</CardTitle>
          <CardDescription>
            The following file types are supported for upload
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <div className="font-medium">PDF Documents</div>
                <div className="text-sm text-muted-foreground">.pdf files</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <Image className="h-8 w-8 text-accent" />
              <div>
                <div className="font-medium">Images</div>
                <div className="text-sm text-muted-foreground">.jpg, .png, .gif</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <Mail className="h-8 w-8 text-warning" />
              <div>
                <div className="font-medium">Email Files</div>
                <div className="text-sm text-muted-foreground">.eml, .msg</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Upload;