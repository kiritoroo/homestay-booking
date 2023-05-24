import React, { useState, useCallback } from "react";
import * as S from '@style/comp/Header.styled';
import { SiAirbnb } from 'react-icons/si'
import { FaUserCircle, FaRegUserCircle, FaBars } from 'react-icons/fa';
import { UserNavigatePopup } from "./Popup/UserNavigatePopup";
import { useRecoilState, useRecoilValue } from "recoil";
import { authSelector } from "@store/user/user.selectors";
import { useNavigate } from 'react-router-dom';
import { isShowUserPopupAtom } from "@store/app.atoms";

interface Props {}

export const Header = (props: Props) => {
  const [isShowUserPopup, setIsShowUserPopup] = useRecoilState(isShowUserPopupAtom);

  const auth = useRecoilValue(authSelector);
  const navigate = useNavigate();
  
  const handleUserWrapperMouseClick = useCallback(() => {
    setIsShowUserPopup((prev) => !prev)
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
          id="user-popup" 
          onClick={ handleUserWrapperMouseClick }>
          <FaBars style={{ pointerEvents: "none" }}/>

          { auth.isAuth 
            ? (<FaUserCircle 
              size={"35px"} 
              color={"#7D97B8"} 
              style={{ marginLeft: "12px", pointerEvents: "none" }}/>)
            : (<FaUserCircle 
              size={"35px"} 
              color={"#bbbbbb"} 
              style={{ marginLeft: "12px", pointerEvents: "none" }}/>)
          }

          { isShowUserPopup && <UserNavigatePopup/> }
        </S.StyledUserWrapper>
      </S.StyledContainer>
    </React.Fragment>
  )
}
