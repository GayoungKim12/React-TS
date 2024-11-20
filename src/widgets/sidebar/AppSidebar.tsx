import { Sidebar, SidebarContent, SidebarGroup } from "@/shared/components/ui/layout/sidebar";
import { Typography } from "@/shared/components/ui/typography/typography";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup
          children={
            <Typography asChild>
              <h6>COMPONENT</h6>
            </Typography>
          }
        />
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  );
}
