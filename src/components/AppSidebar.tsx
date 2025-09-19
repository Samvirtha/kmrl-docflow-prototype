import { 
  Home, 
  Upload, 
  LayoutDashboard, 
  Shield, 
  FileText, 
  Bell, 
  Info 
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

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

const navigation = [
  { title: "Welcome", url: "/", icon: Home },
  { title: "Upload Documents", url: "/upload", icon: Upload },
  { title: "Document Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Compliance Dashboard", url: "/compliance", icon: Shield },
  { title: "Document Details", url: "/document/sample", icon: FileText },
  { title: "Notifications", url: "/notifications", icon: Bell },
  { title: "About", url: "/about", icon: Info },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const getNavClass = (path: string) => {
    const active = isActive(path);
    return active 
      ? "bg-primary text-primary-foreground font-medium" 
      : "hover:bg-muted text-muted-foreground hover:text-foreground";
  };

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarHeader className="border-b p-4">
        {!isCollapsed && (
          <div className="text-center">
            <h2 className="text-lg font-bold text-primary">KMRL</h2>
            <p className="text-sm text-muted-foreground">Document System</p>
          </div>
        )}
        {isCollapsed && (
          <div className="text-center">
            <h2 className="text-lg font-bold text-primary">K</h2>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={getNavClass(item.url)}
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}