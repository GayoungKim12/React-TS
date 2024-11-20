import { SidebarProvider, SidebarTrigger } from "@/shared/components/ui/layout/sidebar";
import AppSidebar from "@/widgets/sidebar/ui/AppSidebar";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
