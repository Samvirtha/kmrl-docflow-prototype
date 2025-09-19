import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import Welcome from "./pages/Welcome";
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import Compliance from "./pages/Compliance";
import DocumentDetail from "./pages/DocumentDetail";
import Notifications from "./pages/Notifications";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <header className="h-14 flex items-center border-b bg-background px-4">
                <SidebarTrigger className="mr-4" />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-primary">KMRL Document Management System</h2>
                </div>
              </header>
              <main className="flex-1 p-6 bg-muted/30">
                <Routes>
                  <Route path="/" element={<Welcome />} />
                  <Route path="/upload" element={<Upload />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/compliance" element={<Compliance />} />
                  <Route path="/document/:id" element={<DocumentDetail />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/about" element={<About />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
