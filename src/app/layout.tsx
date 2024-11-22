import { Flex } from "@/shared/components/ui/layout/flex";
import { SidebarProvider } from "@/shared/components/ui/layout/sidebar";
import Header from "@/widgets/header/ui/Header";
import AppSidebar from "@/widgets/sidebar/ui/AppSidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Flex direction="col" gap="xs" className="w-full" items="start" justify="start">
        <Header />
        <main className="w-full p-8">
          <Outlet />
        </main>
      </Flex>
    </SidebarProvider>
  );
}
