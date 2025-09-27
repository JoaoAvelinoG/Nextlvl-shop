"use client";

import Image from "next/image";
import { Container } from "./Container";
import { FreightBar } from "./FreightBar";

type HeaderProps = React.ComponentPropsWithRef<"header">;

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <>
      <FreightBar />
      <header {...props}>
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <Image
                src="/NXTXLVL-LOGO.png"
                alt="Logo"
                width={180}
                height={40}
              />
            </div>
            <div className="">Botões</div>
          </div>
        </Container>
      </header>
    </>
  );
};
