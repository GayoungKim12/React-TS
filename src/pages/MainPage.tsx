import { Flex } from "@/shared/components/ui/layout/flex";
import { Typography } from "@/shared/components/ui/typography/typography";

export default function MainPage() {
  return (
    <Flex>
      <Flex className="mt-12" asChild>
        <header>
          <Typography component="h1" size="7xl" weight="bold" asChild>
            <h1>Practicing Shadcn/ui</h1>
          </Typography>
        </header>
      </Flex>
    </Flex>
  );
}
