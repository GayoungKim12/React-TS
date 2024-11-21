import { SidebarMenuItem } from "../ui/Group";

export const menus = ["ui", "nextjs", "game"] as const;
export const menuItems: Record<(typeof menus)[number], SidebarMenuItem[]> = {
  ui: [
    {
      to: "/button",
      label: "Button",
      icon: "SquareMousePointer",
      subItems: [
        { to: "/variant", label: "Variant" },
        { to: "/size", label: "Size" },
      ],
    },
    { to: "/input", label: "Input", icon: "TextCursorInput" },
  ],
  nextjs: [{ to: "/nextjs", label: "Next.js", icon: "SquareArrowUpRight" }],
  game: [{ to: "/game", label: "Game", icon: "Gamepad2" }],
};
