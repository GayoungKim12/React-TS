import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

type IconName = keyof typeof Icons;

interface IconProps extends React.ComponentPropsWithoutRef<LucideIcon> {
  name: IconName;
}

export default function Icon({ name, ...props }: IconProps) {
  const IconComponent = Icons[name] as LucideIcon;

  return <IconComponent {...props} />;
}
