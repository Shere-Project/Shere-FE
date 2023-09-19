import { Box } from "@mui/material";
import React from "react";
import { MainWidthCenterBox } from "./modules/Box";
import Link from "next/link";
import Image from "next/image";
import { HeaderBox, HeaderInnerBox, HeaderMenuContainer } from "./Header.style";
import { useRouter } from "next/router";

const Header: React.FC = () => {

  const router = useRouter()
  const activeNav = (path: string) => {
    const current = router.pathname
    if (current.includes(path)) return 'active'
  }

  return (
    <HeaderBox>
      <HeaderInnerBox>
        <Link href="/" className={activeNav('/')}>
          <Image
            src="/logo.svg"
            alt="shelter logo"
            width={120}
            height={55}
          />
        </Link>
        <HeaderMenuContainer>
          <Link href='/find_shelter' className={activeNav('/find_shelter')}>
            대피소 확인
          </Link>
          <Link href='/news' className={activeNav('/news')}>
            안전뉴스
          </Link>
          <Link href='/instructions' className={activeNav('/instructions')}>
            행동요령
          </Link>
          <Link href='/statistics' className={activeNav('/statistics')}>
            분석자료
          </Link>
        </HeaderMenuContainer>
      </HeaderInnerBox>
    </HeaderBox>
  )
}

export default Header;