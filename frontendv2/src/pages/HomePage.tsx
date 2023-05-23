import React from "react";
import { Promotion } from "@comp/Promotion";
import { Header } from "@comp/Header";
import { MainFooter } from "@comp/MainFooter";
import * as S from '@style/page/HomePage.styled';
import { HomestayList } from "@comp/List/HomestayList";

export default function HomePage() {

  return (
    <S.StyledContainer>
        <Promotion/>
        <Header/>
        <HomestayList/>
        <MainFooter/>
    </S.StyledContainer>
  )
}