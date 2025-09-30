import { 
  Home, 
  Upload, 
  LayoutDashboard, 
  Shield, 
  FileText, 
  Bell, 
  Info,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const getNavigationForRole = (role: string | null) => {
  const commonItems = [
    { title: "Notifications", url: "/notifications", icon: Bell },
    { title: "Completed", url: "/completed", icon: CheckCircle },
    { title: "Overdue", url: "/overdue", icon: AlertCircle },
  ];

  if (role === 'Admin') {
    return [
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
      { title: "Document Summary", url: "/document-summary", icon: FileText },
      ...commonItems,
      { title: "Compliance", url: "/compliance", icon: Shield },
      { title: "Upload", url: "/upload", icon: Upload },
      { title: "About", url: "/about", icon: Info },
    ];
  }

  if (role === 'HOD') {
    return [
      { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
      { title: "Document Summary", url: "/document-summary", icon: FileText },
      ...commonItems,
      { title: "About", url: "/about", icon: Info },
    ];
  }

  // Staff
  return [
    ...commonItems,
    { title: "About", url: "/about", icon: Info },
  ];
};

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;
  const { role } = useAuth();
  
  const navigation = getNavigationForRole(role);

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <Sidebar className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div style={{ padding: '16px', borderBottom: '1px solid #e2e8f0', textAlign: 'center' }}>
        {!isCollapsed && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#2563eb' }}>KMRL</h2>
            <p style={{ fontSize: '12px', color: '#64748b' }}>Document System</p>
          </div>
        )}
        {isCollapsed && (
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#2563eb' }}>K</h2>
          </div>
        )}
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel style={{ padding: '12px 16px', fontSize: '14px', fontWeight: '600', borderBottom: '1px solid #f1f5f9' }}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <ul className="nav-list">
                {navigation.map((item) => (
                  <li key={item.title} className="nav-item">
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={({ isActive: navIsActive }) =>
                          `nav-link ${navIsActive || isActive(item.url) ? 'active' : ''}`
                        }
                      >
                        <item.icon className="nav-icon" />
                        {!isCollapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </li>
                ))}
              </ul>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}