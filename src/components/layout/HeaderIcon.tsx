import Link from "next/link";
import { Button } from "../base/Button";

type HeaderIconProps = {
  icon: React.ReactNode;
  href?: string;
};

export const HeaderIcon = ({ icon, href = "/" }: HeaderIconProps) => {
  return (
    <>
      <Button variant="outline" size="icon">
        <Link href={href}>{icon}</Link>
      </Button>
    </>
  );
};
