import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Minus, Plus } from "lucide-react";
import Flex from "./components/ui/flex";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Flex className="flex-col gap-8">
      <h1>COUNT: {count}</h1>
      <Flex>
        <Button className="hover:border-0" size={"icon"} onClick={() => setCount((prev) => prev + 1)}>
          <Plus size={32} />
        </Button>
        <Button className="hover:border-0" size={"icon"} onClick={() => setCount((prev) => prev - 1)}>
          <Minus size={32} />
        </Button>
      </Flex>
    </Flex>
  );
}

export default App;
