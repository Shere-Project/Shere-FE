import React from "react";
import { FooterBox, FooterInnerBox, FooterTextBox } from "./Footer.style";
import Link from "next/link";
import Image from "next/image";
import { Gray01Typography } from "./modules/Typography";

const Footer: React.FC = () => {
  return (
    <FooterBox>
      <FooterInnerBox>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="shelter logo"
          width={120}
          height={55}
        />
      </Link>
      <FooterTextBox>
        <Gray01Typography>
          행정구역의 변경 등으로 일부 대피소의 주소가 정확하지 않거나 누락되었을 수 있습니다.
        </Gray01Typography>
        <Gray01Typography>
          본 사이트에서 제공하는 정보는 공공데이터포털의 공식 자료를 토대로 만들어졌으며,<br />
          행정구역의 변경 등으로 일부 대피소의 주소 등의 정보가 정확하지 않거나 누락되었을 수 있습니다.
        </Gray01Typography>
        <Gray01Typography>
          자료 출처 : 공공데이터포털(https://www.data.go.kr/)
        </Gray01Typography>
        <Gray01Typography>
          @ 2023 대피소프로젝트 All rights reserved.
        </Gray01Typography>
      </FooterTextBox>
      <Link href="https://github.com/Shere-Project">
        <Image
          src="/icons/github.svg"
          alt="project github link"
          width={120}
          height={55}
        />
      </Link>
      </FooterInnerBox>
    </FooterBox>
  )
}

export default Footer;