import { SidebarProvider, SidebarTrigger } from "@/shared/components/ui/layout/sidebar";
import AppSidebar from "@/widgets/sidebar/ui/AppSidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
