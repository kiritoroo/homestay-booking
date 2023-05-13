import React, { useState, useCallback } from "react";
import * as S from '@style/comp/Header.styled';
import { SiAirbnb } from 'react-icons/si'
import { FaUserCircle, FaRegUserCircle, FaBars } from 'react-icons/fa';
import { UserDropdown } from "./UserDropdown";
import { useRecoilState, useRecoilValue } from "recoil";
import { authSelector } from "@store/user/user.selectors";
import { useNavigate } from 'react-router-dom';

interface Props {}

export const Header = (props: Props) => {
  const [isShowUserDropdown, setIsShowUserDopdown] = useState(false);

  const auth = useRecoilValue(authSelector);
  const navigate = useNavigate();
  
  const handleUserWrapperMouseClick = useCallback(() => {
    setIsShowUserDopdown((prev) => !prev)
  }, [])

  const handleLogoMouseClick = useCallback(() => {
    navigate('/')
  }, [])

  return (
    <React.Fragment>
      <S.StyledContainer>
        <S.StyledLogoWrapper
          onClick={ handleLogoMouseClick }>
          <SiAirbnb 
            size={"40px"} 
            color={"#7D97B8"}/>
          <S.StyledLogoTitle>airute</S.StyledLogoTitle>
        </S.StyledLogoWrapper>
        <S.StyledUserWrapper 
          onClick={ handleUserWrapperMouseClick }>
          <FaBars/>

          { auth.isAuth 
            ? (<FaUserCircle 
              size={"35px"} 
              color={"#7D97B8"} 
              style={{ marginLeft: "12px" }}/>)
            : (<FaUserCircle 
              size={"35px"} 
              color={"#bbbbbb"} 
              style={{ marginLeft: "12px" }}/>)
          }

          { isShowUserDropdown && <UserDropdown/> }
        </S.StyledUserWrapper>
      </S.StyledContainer>
    </React.Fragment>
  )
}
