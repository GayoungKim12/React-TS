import { Flex } from "@/shared/components/ui/layout/flex";
import { SidebarTrigger } from "@/shared/components/ui/layout/sidebar";
import { Typography } from "@/shared/components/ui/typography/typography";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Flex className="h-14 p-6 shadow-sm w-full" justify="start" asChild>
      <header>
        <SidebarTrigger />
        <Typography component="h1" size="xl" weight="bold" font="zcool" asChild>
          <Link to="/">LAMU</Link>
        </Typography>
      </header>
    </Flex>
  );
}
