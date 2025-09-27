import Link from "next/link";
import { Button } from "../base/Button";

type HeaderIconProps = {
  icon: React.ReactNode;
  href?: string;
  className?: string;
};

export const HeaderIcon = ({
  icon,
  href = "/",
  className,
}: HeaderIconProps) => {
  return (
    <div className={className}>
      <Button variant="outline" size="icon">
        <Link href={href}>{icon}</Link>
      </Button>
    </div>
  );
};
