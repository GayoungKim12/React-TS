import { useState } from "react";
import { Flex } from "@/shared/components/ui/layout/flex";

/* const styles = ; */
import { Button } from "@/shared/components/ui/button/button";

const ButtonPage = () => {
  const [clickedBtn, setClickedBtn] = useState("???");

  return (
    <Flex gap="xl" direction="col">
      <h1>클릭한 버튼</h1>
      <p>{clickedBtn}</p>
      <Flex>
        <Button variant={"default"} onClick={() => setClickedBtn("Default")}>
          Default
        </Button>
        <Button variant={"secondary"} onClick={() => setClickedBtn("Secondary")}>
          Secondary
        </Button>
        <Button variant={"destructive"} onClick={() => setClickedBtn("Destructive")}>
          Destructive
        </Button>
        <Button variant={"outline"} onClick={() => setClickedBtn("Outline")}>
          Outline
        </Button>
        <Button variant={"ghost"} onClick={() => setClickedBtn("Ghost")}>
          Ghost
        </Button>
      </Flex>
    </Flex>
  );
};

export default ButtonPage;
