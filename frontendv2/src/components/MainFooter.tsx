import React from "react";
import * as S from "@style/comp/MainFooter.styled";
import { RiGlobalLine, RiArrowUpSLine } from "react-icons/ri";
import { BiDollar } from "react-icons/bi";

interface Props {}

export const MainFooter = (props: Props) => {

  return (
    <S.StyledContainer>
      <S.StyledLinkWrapper>
        <S.StyledLink>© 2023 Airute, Inc.</S.StyledLink>
        <S.StyledLinkSpace> · </S.StyledLinkSpace>
        <S.StyledLink>Quyền riêng tư</S.StyledLink>
        <S.StyledLinkSpace> · </S.StyledLinkSpace>
        <S.StyledLink>Điều khoản</S.StyledLink>
        <S.StyledLinkSpace> · </S.StyledLinkSpace>
        <S.StyledLink>Sơ đồ trang web</S.StyledLink>
      </S.StyledLinkWrapper>

      <S.StyledSettingListWrapper>
        <S.StyledSettingWrapper>
          <RiGlobalLine size={"22px"} color="#525252"/>
          <S.StyledSetting>Tiếng Việt (VN)</S.StyledSetting>
        </S.StyledSettingWrapper>
        <S.StyledSettingWrapper>
          <BiDollar size={"22px"} color="#525252"/>
          <S.StyledSetting>USD</S.StyledSetting>
        </S.StyledSettingWrapper>
        <S.StyledSettingWrapper>
          <S.StyledSetting>Hỗ trợ tài nguyên</S.StyledSetting>
          <RiArrowUpSLine size={"22px"} color="#525252"/>
        </S.StyledSettingWrapper>
      </S.StyledSettingListWrapper>
    </S.StyledContainer>
  )
}