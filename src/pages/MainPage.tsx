import { Icon } from "@/shared/components/icon";
import { Button } from "@/shared/components/ui/button/button";
import { Flex } from "@/shared/components/ui/layout/flex";
import { Typography } from "@/shared/components/ui/typography/typography";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <Flex direction="col">
      <Flex className="mt-52 mb-6" direction="col">
        <Typography component="h1" size="8xl" weight="bold" font="zcool" asChild>
          <h1>Try Anything</h1>
        </Typography>
        <Typography size="2xl" font="zcool">
          I believe in your potential, you can do it!
        </Typography>
      </Flex>
      <Flex>
        <Button>Get Started</Button>
        <Button variant="ghost" size={"icon"} asChild>
          <Link to="https://github.com/GayoungKim12/React-TS">
            <Icon name="GithubIcon" />
          </Link>
        </Button>
      </Flex>
    </Flex>
  );
}
