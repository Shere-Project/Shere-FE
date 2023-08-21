import { Box } from "@mui/material";
import React from "react";
import { MainWidthCenterBox } from "./modules/Box";
import Link from "next/link";
import Image from "next/image";
import { HeaderBox, HeaderInnerBox, HeaderMenuContainer } from "./Header.style";

const Header: React.FC = () => {
  return (
    <HeaderBox>
      <HeaderInnerBox>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="shelter logo"
            width={120}
            height={55}
          />
        </Link>
        <HeaderMenuContainer>
          <Link href='/find_shelter'>
            대피소 확인
          </Link>
          <Link href='/news'>
            안전뉴스
          </Link>
          <Link href='/instructions'>
            행동요령
          </Link>
          <Link href='/statistics'>
            분석자료
          </Link>
        </HeaderMenuContainer>
      </HeaderInnerBox>
    </HeaderBox>
  )
}

export default Header;