"use client";

import Image from "next/image";
import { Container } from "./Container";
import { FreightBar } from "./FreightBar";
import {
  ArrowUpRightIcon,
  MenuIcon,
  ShoppingBagIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { HeaderIcon } from "./HeaderIcon";

type HeaderProps = React.ComponentPropsWithRef<"header">;

type menuItemsListType = {
  label: string;
  href: string;
};

export const Header = ({ ...props }: HeaderProps) => {
  const menuItemsList: menuItemsListType[] = [
    { label: "Camisa", href: "/categories/camisa" },
    { label: "Kit", href: "/categories/kits" },
  ];

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

              <HeaderIcon className="md:hidden" icon={<MenuIcon size={19} />} />
            </div>
          </div>
        </Container>
        <div className="flex flex-col md:hidden">
          {menuItemsList.map((item) => (
            <Link key={item.label} href={item.href}>
              <div className="flex justify-between items-center p-6 text-sm font-medium border-b border-gray-200">
                {item.label}
                <div>
                  <ArrowUpRightIcon className="text-blue-700" size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Container>
          <div className="p-6 bg-red-300 md:hidden">Busca Mobilne</div>
        </Container>
      </header>
    </>
  );
};
