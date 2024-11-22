import { Button } from "@/shared/components/ui/button/button";
import { Flex } from "@/shared/components/ui/layout/flex";
import { Icon } from "@/shared/components/icon";

export default function ButtonIcons() {
  return (
    <Flex direction="col" gap="sm" items="start">
      {[
        { size: "iconSm" as const, iconSize: 16 },
        { size: "icon" as const, iconSize: 20 },
        { size: "iconLg" as const, iconSize: 24 },
      ].map(({ size, iconSize }) => (
        <Button key={size} variant="ghost" size={size}>
          <Icon size={iconSize} name="Cherry" />
        </Button>
      ))}
    </Flex>
  );
}
