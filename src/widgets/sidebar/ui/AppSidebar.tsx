import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/shared/components/ui/layout/sidebar";
import Group from "@/feature/sidebar/ui/Group";
import { menuItems, menus } from "@/feature/sidebar/model/sidebarMenu";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        {menus.map((menu) => (
          <Group key={menu} subheading={menu.toUpperCase()} items={menuItems[menu]} />
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
