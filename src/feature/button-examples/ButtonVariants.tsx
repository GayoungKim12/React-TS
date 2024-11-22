import { Button } from "@/shared/components/ui/button/button";
import { Flex } from "@/shared/components/ui/layout/flex";

export default function ButtonVariants() {
  return (
    <Flex direction="col" gap="sm" items="start">
      {[
        { variant: "default" as const, label: "Default" },
        { variant: "secondary" as const, label: "Secondary" },
        { variant: "destructive" as const, label: "Destructive" },
        { variant: "outline" as const, label: "Outline" },
        { variant: "ghost" as const, label: "Ghost" },
        { variant: "link" as const, label: "Link" },
      ].map(({ variant, label }) => (
        <Button key={variant} variant={variant}>
          {label}
        </Button>
      ))}
    </Flex>
  );
}
