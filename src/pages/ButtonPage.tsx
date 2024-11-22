import { Flex } from "@/shared/components/ui/layout/flex";
import { Typography } from "@/shared/components/ui/typography/typography";
import { CodeBlock } from "@/shared/components/ui/typography/codeblock";
import Section from "@/widgets/section";
import ButtonVariants from "@/feature/button-examples/ButtonVariants";
import ButtonSizes from "@/feature/button-examples/ButtonSizes";
import ButtonIcons from "@/feature/button-examples/ButtonIcons";

const ButtonPage = () => {
  return (
    <Flex id="button" direction="col" gap="xl" items="start">
      <Typography component="h2" size="2xl" weight="bold" asChild>
        <h2>Buttons</h2>
      </Typography>

      <Section id="button-variant" title="Variants">
        <CodeBlock codeBlock={buttonVariantsCode} fileName="/src/pages/ButtonPage.tsx" />
        <ButtonVariants />
      </Section>

      <Section id="button-size" title="Size">
        <ButtonSizes />
      </Section>

      <Section id="button-icon" title="Icon">
        <ButtonIcons />
      </Section>
    </Flex>
  );
};

// 코드 예제 문자열을 상수로 분리
const buttonVariantsCode = `/* 버튼 종류 */
<div>
  <Button variant={"default"}>Default</Button>
  <Button variant={"secondary"}>Secondary</Button>
  <Button variant={"destructive"}>Destructive</Button>
  <Button variant={"outline"}>Outline</Button>
  <Button variant={"ghost"}>Ghost</Button>
  <Button variant={"link"}>Link</Button>
</div>`;

export default ButtonPage;
