import { useState } from "react";
import { Flex } from "@/shared/ui/flex";
import { Button } from "@/shared/ui/button";

/* const styles = ; */

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
