import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isShowLoginModalAtom, isShowRegisterModalAtom, isShowUserPopupAtom } from '@store/app.atoms';
import { authSelector } from '@store/user/user.selectors';
import { useUserActions } from '@store/user/user.actions';
import * as S from '@style/comp/Popup/UserNavigatePopup';

interface Props {}

export const UserNavigatePopup = (props: Props) => {
  const setIsShowLoginModal = useSetRecoilState(isShowLoginModalAtom);
  const setIsShowRegisterModal = useSetRecoilState(isShowRegisterModalAtom);
  const auth = useRecoilValue(authSelector);
  const setIsShowPopup = useSetRecoilState(isShowUserPopupAtom);
  const containerRef = useRef<HTMLDivElement>(null);

  const userActions = useUserActions();
  const navigate = useNavigate();

  const handleLoginMouseClick = useCallback(() => {
    setIsShowLoginModal(true);
  }, [])

  const handleRegisterMouseClick = useCallback(() => {
    setIsShowRegisterModal(true);
  }, [])

  const handleLogoutMouseClick = useCallback(() => {
    userActions.logout();
    window.location.reload();
  }, [])

  const handleAccountMouseClick = useCallback(() => {
    navigate('/account')
  }, [])

  const handleTripsMouseClick = useCallback(() => {
    navigate('/trips')
  }, [])

  const handlePromotionMouseClick = useCallback(() => {
    navigate('/promotion')
  }, [])

  const handlePopupClose = useCallback((event: MouseEvent) => {
    if (containerRef.current) {      
      if (!containerRef.current.contains(event.target as Node) && (event.target as HTMLElement).id != "user-popup") {
        setIsShowPopup(false);
      }
    }
  }, [containerRef.current])

  useEffect(() => {
    document.addEventListener("click", (e) => handlePopupClose(e))

    return () => {
      document.removeEventListener("click", (e) => handlePopupClose(e))
    }
  }, [])

  const renderedUnAuthDropdown = useMemo<JSX.Element>(() => (
    <React.Fragment>
      <S.StyledGroupButton>
        <S.StyledButton
          onClick={ handleLoginMouseClick }
          style={{ fontWeight: "400" }}>
          Đăng nhập
        </S.StyledButton>
        <S.StyledButton 
          onClick={ handleRegisterMouseClick }>
          Đăng ký
        </S.StyledButton>
      </S.StyledGroupButton>

      <S.StyledLine/>

      <S.StyledGroupButton>
        <S.StyledButton>Trợ giúp</S.StyledButton>
      </S.StyledGroupButton>
    </React.Fragment>
  ), [])

  const renderedAuthDropdown = useMemo<JSX.Element>(() => (
    <React.Fragment>
      <S.StyledGroupButton>
        <S.StyledButton 
          style={{ fontWeight: "400" }}>
          Tin nhắn
        </S.StyledButton>
        <S.StyledButton 
          style={{ fontWeight: "400" }}>
          Thông báo
        </S.StyledButton>
        <S.StyledButton
          onClick={ handlePromotionMouseClick }
          style={{ fontWeight: "400" }}>
          Ưu đãi
        </S.StyledButton>
        <S.StyledButton 
          style={{ fontWeight: "400" }}>
          Danh sách yêu thích
        </S.StyledButton>
      </S.StyledGroupButton>

      <S.StyledLine/>

      <S.StyledGroupButton>
        <S.StyledButton
          onClick={ handleAccountMouseClick }>
          Tài khoản
        </S.StyledButton>
        <S.StyledButton
          onClick={ handleTripsMouseClick }>
          Chuyến đi
        </S.StyledButton>
      </S.StyledGroupButton>

      <S.StyledLine/>

      <S.StyledGroupButton>
        <S.StyledButton>Trợ giúp</S.StyledButton>
        <S.StyledButton 
          onClick={ handleLogoutMouseClick }>
          Đăng xuất
        </S.StyledButton>
      </S.StyledGroupButton>
    </React.Fragment>
  ), [])

  return (
    <S.StyledContainer ref={ containerRef }>
      {auth.isAuth 
        ? ( renderedAuthDropdown )
        : ( renderedUnAuthDropdown )
      }
    </S.StyledContainer>
  )
}