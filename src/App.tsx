import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import Compliance from "./pages/Compliance";
import DocumentDetail from "./pages/DocumentDetail";
import Notifications from "./pages/Notifications";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Completed from "./pages/Completed";
import Overdue from "./pages/Overdue";
import DocumentSummary from "./pages/DocumentSummary";
import "./styles/custom.css";

const queryClient = new QueryClient();

const ProtectedLayout = () => {
  const { role, logout } = useAuth();
  const navigate = useNavigate();

  if (!role) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <SidebarProvider>
      <div className="app-container">
        <AppSidebar />
        <div className="main-content">
          <header className="header">
            <div className="header-left">
              <SidebarTrigger className="mr-4" />
              <h2 className="header-title">KMRL Document Management System</h2>
            </div>
            <div className="header-right">
              <span className="text-sm font-medium mr-4">Logged in as: {role}</span>
              <button className="btn login-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </header>
          <main className="main-area">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/document-summary" element={<DocumentSummary />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/document/:id" element={<DocumentDetail />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/completed" element={<Completed />} />
              <Route path="/overdue" element={<Overdue />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<ProtectedLayout />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
