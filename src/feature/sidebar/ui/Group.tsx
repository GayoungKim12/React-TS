import { Icon, IconName } from "@/shared/components/icon";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/shared/components/ui/common/collapsible";
import { SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem } from "@/shared/components/ui/layout/sidebar";
import { Link } from "react-router-dom";

export type SidebarSubMenuItem = {
  to: string;
  label: string;
};

export type SidebarMenuItem = {
  to: string;
  label: string;
  icon: IconName;
  subItems?: SidebarSubMenuItem[];
};

interface GroupProps {
  subheading: string;
  items: SidebarMenuItem[];
}

export default function Group({ subheading, items }: GroupProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{subheading}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item: SidebarMenuItem) => (
            <Collapsible key={item.to} defaultOpen className="group/collapsible">
              <SidebarMenuItem key={item.to}>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    <Icon name={item.icon} strokeWidth={2} />
                    {item.label}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
              </SidebarMenuItem>
              {item.subItems && (
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.subItems.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.to}>
                        <Link to={`${item.to}/${subItem.to}`}>{subItem.label}</Link>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              )}
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
