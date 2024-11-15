import { Flex } from "@/components/ui/flex";
import { Typography } from "@/components/ui/typography";


const MainPage = () => {
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
};

export default MainPage;
