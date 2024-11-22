import { Flex } from "@/shared/components/ui/layout/flex";
import { Typography } from "@/shared/components/ui/typography/typography";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <Flex id={id} direction="col" gap="md" items="start">
      <Typography component="h3" size="xl" weight="bold" asChild>
        <h3>{title}</h3>
      </Typography>
      {children}
    </Flex>
  );
}
