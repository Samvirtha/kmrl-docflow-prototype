import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import Welcome from "./pages/Welcome";
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import Compliance from "./pages/Compliance";
import DocumentDetail from "./pages/DocumentDetail";
import Notifications from "./pages/Notifications";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import "./styles/custom.css";

const queryClient = new QueryClient();

const AppContent = () => {
  const { user, logout, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <SidebarProvider>
        <div className="app-container">
          <AppSidebar />
          <div className="main-content">
            <header className="header">
              <div className="header-left">
                <SidebarTrigger className="mr-4" />
                <h2 className="header-title">KMRL Document Management System</h2>
              </div>
              <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '14px', color: '#64748b' }}>
                  {user?.role?.toUpperCase()} {user?.department && `- ${user.department}`}
                </span>
                <button className="btn login-btn" onClick={logout}>
                  Logout
                </button>
              </div>
            </header>
            <main className="main-area">
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
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppContent />
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
