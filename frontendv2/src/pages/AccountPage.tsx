import React, { useRef, useMemo } from 'react';
import { Header } from "@comp/Header";
import * as S from '@style/page/AccountPage.styled';
import { useRecoilValue } from 'recoil';
import { authSelector } from '@store/user/user.selectors';
import { AccountOptionCard } from '@comp/AccountOptionCard';
import { RiAccountPinBoxLine, RiShieldUserLine} from 'react-icons/ri';
import { MdOutlinePayments } from 'react-icons/md';
import { HiOutlineAnnotation } from 'react-icons/hi';

export default function AccountPage() {
  const { user } = useRecoilValue(authSelector);

  const optionData = useRef([
    {
      icon: <RiAccountPinBoxLine size={"40px"} color='#7D97B8'/>,
      title: "Thông tin cá nhân",
      desc: "Cung cấp thông tin cá nhân và cách chúng tôi có thể liên hệ với bạn",
      navigatePath: "/account/personal-info"
    },
    {
      icon: <RiShieldUserLine size={"40px"} color='#7D97B8'/>,
      title: "Đăng nhập và bảo mật",
      desc: "Cập nhật mật khẩu và bảo mật tài khoản của bạn",
      navigatePath: "/"
    },
    {
      icon: <MdOutlinePayments size={"40px"} color='#7D97B8'/>,
      title: "Thanh toán và chi trả",
      desc: "Xem lại các khoản thanh toán, chi trả, phiếu giảm giá và thẻ quà tặng",
      navigatePath: "/"
    },
    {
      icon: <HiOutlineAnnotation size={"40px"} color='#7D97B8'/>,
      title: "Thông báo",
      desc: "Chọn tùy chọn thông báo và cách bạn muốn được liên hệ",
      navigatePath: "/"
    }
  ])

  const renderedOptionList = useMemo<JSX.Element[]>(() => (
    optionData.current.map((item) => (
      <AccountOptionCard
        key={ item.title }
        icon={ item.icon }
        title={ item.title }
        desc={ item.desc }
        navigatePath={ item.navigatePath }/>
    ))
  ), [optionData.current])

  return (
    <S.StyledContainer>
      <Header/>

      <S.StyledContentWrapper>
        <S.StyledHeadWrapper>
          <S.StyledTitle>Tài khoản</S.StyledTitle>
          <S.StyledUserInfoWrapper>
          <S.StyledNameInfo>{ user?.full_name }, &nbsp;</S.StyledNameInfo>
          <S.StyledEmailInfo>{ user?.email } · </S.StyledEmailInfo>
          <S.StyledLinkInfo>Truy cập hồ sơ</S.StyledLinkInfo>
          </S.StyledUserInfoWrapper>
        </S.StyledHeadWrapper>

        <S.StyledOptionListWrapper>
          { renderedOptionList }
        </S.StyledOptionListWrapper>
      </S.StyledContentWrapper>
    </S.StyledContainer>
  )
}