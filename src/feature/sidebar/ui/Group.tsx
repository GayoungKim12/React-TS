import Icon from "@/shared/components/icon";
import { Flex } from "@/shared/components/ui/layout/flex";
import { Typography } from "@/shared/components/ui/typography/typography";

interface GroupProps {
  subheading: string;
}

export default function Group({ subheading }: GroupProps) {
  return (
    <Flex>
      <Typography>{subheading}</Typography>
      <Icon name="AlarmClockIcon" size={16} strokeWidth={1.5} color="gray" />
    </Flex>
  );
}
