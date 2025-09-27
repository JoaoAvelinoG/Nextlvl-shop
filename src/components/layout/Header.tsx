"use client";

import Image from "next/image";
import { Container } from "./Container";
import { FreightBar } from "./FreightBar";
import { Button } from "../base/Button";
import { MenuIcon, ShoppingBagIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { HeaderIcon } from "./HeaderIcon";

type HeaderProps = React.ComponentPropsWithRef<"header">;

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <>
      <FreightBar />
      <header {...props}>
        <Container>
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src="/NXTXLVL-LOGO.png"
                alt="Logo"
                width={180}
                height={40}
              />
            </Link>
            <div className="flex gap-3">
              <HeaderIcon icon={<UserIcon size={19} />} href="/login" />

              <HeaderIcon icon={<ShoppingBagIcon size={19} />} href="/cart" />

              <HeaderIcon icon={<MenuIcon size={19} />} />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
