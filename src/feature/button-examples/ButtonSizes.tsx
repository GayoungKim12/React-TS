import { Button } from "@/shared/components/ui/button/button";
import { Flex } from "@/shared/components/ui/layout/flex";

export default function ButtonSizes() {
  return (
    <Flex direction="col" gap="sm" items="start">
      {[
        { size: "sm" as const, label: "Small" },
        { size: "md" as const, label: "Medium" },
        { size: "lg" as const, label: "Large" },
      ].map(({ size, label }) => (
        <Button key={size} size={size}>
          {label}
        </Button>
      ))}
    </Flex>
  );
}
