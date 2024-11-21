import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/shared/components/ui/layout/sidebar";
import Group from "@/feature/sidebar/ui/Group";
import { SidebarMenuItem } from "@/feature/sidebar/ui/Group";

export default function AppSidebar() {
  const menuItems: Record<string, SidebarMenuItem[]> = {
    ui: [
      {
        to: "/button",
        label: "Button",
        icon: "SquareMousePointer",
        subItems: [
          { to: "/button/variant", label: "Variant" },
          { to: "/button/size", label: "Size" },
        ],
      },
      { to: "/input", label: "Input", icon: "TextCursorInput" },
    ],
    nextjs: [{ to: "/nextjs", label: "Next.js", icon: "SquareArrowUpRight" }],
    game: [{ to: "/game", label: "Game", icon: "Gamepad2" }],
  };

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <Group subheading="UI" items={menuItems["ui"]} />
        <Group subheading="NEXTJS" items={menuItems["nextjs"]} />
        <Group subheading="GAME" items={menuItems["game"]} />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
