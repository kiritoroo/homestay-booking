import React, { useCallback, useRef, useState, ChangeEvent, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isShowLoginModalAtom, isShowRegisterModalAtom } from '@store/app.atoms';
import { MdOutlineClose } from 'react-icons/md';
import { IUserLoginRequestBody } from '@store/user/user.schema';
import { useUserActions } from '@store/user/user.actions';
import { HiExclamationCircle } from 'react-icons/hi';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import * as S from '@style/comp/LoginModal.styled';
import * as M from '@motion/LoginModal.motion';

interface Props {}

export const LoginModal = (props: Props) => {
  const userActions = useUserActions();

  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [isShowLoginModal, setIsShowLoginModal] = useRecoilState(isShowLoginModalAtom);
  const setIsShowRegisterModal = useSetRecoilState(isShowRegisterModalAtom);
  const [loginFailed, setLoginFailed] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  
  const [userLoginRequest, setUserLoginRequest] = useState<IUserLoginRequestBody>({
    username: '',
    password: ''
  });
  const [isInputsEmpty, setIsInputsEmpty] = useState({ 
    username: false, 
    password: false 
  });
  const inputEmptyHint = useRef({
    username: 'Cần nhập tên người dùng',
    password: 'Cần nhập mật khẩu'
  });

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserLoginRequest((prevRequest) => ({
      ...prevRequest,
      [name]: value
    }));

    setIsInputsEmpty((prevErrors) => ({
      ...prevErrors,
      [name]: false
    }));
  }, [])

  const handleLoginSubmit = useCallback(() => {
    setLoginFailed(false)
    if (usernameRef.current && passwordRef.current) {
      if (!userLoginRequest.username) {
        setIsInputsEmpty((prevErrors) => ({
          ...prevErrors,
          username: true,
        }));
        usernameRef.current.focus();
      } else if (!userLoginRequest.password) {
        setIsInputsEmpty((prevErrors) => ({
          ...prevErrors,
          password: true,
        }));
        passwordRef.current.focus();
      } else {
        userActions.login(userLoginRequest)
          .then(() => {
            setLoginSuccess(true);
            window.location.reload();
          })
          .catch((error) => {
            setLoginFailed(true);
          })
      }
    }
  }, [usernameRef.current, passwordRef.current, userLoginRequest])

  const handleContainerMouseClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (containerRef.current && modalRef.current) {
      if (!modalRef.current.contains(event.target as Node)) {
        setIsShowLoginModal(false)
      }
    }
  }, [containerRef.current, modalRef.current])

  const handleIconCloseMouseClick = useCallback(() => {
    setIsShowLoginModal(false)
  }, [])

  useEffect(() => {
    if (loginSuccess) {
      setTimeout(() => {
        setIsShowLoginModal(false);
      }, 300)
    }
  }, [loginSuccess])

  const handleRegisterLinkMouseClick = useCallback(() => {
    setIsShowLoginModal(false);
    setIsShowRegisterModal(true);
  }, [])

  return (
    <S.StyledContainer
      ref={ containerRef }
      onClick={(e) => handleContainerMouseClick(e) }>
        <M.MotionModalWrapper 
          ref={ modalRef }
          isShow={ isShowLoginModal }>
          <S.StyledModalTopWrapper>
            <S.StyledIconCloseWrapper
              onClick={ handleIconCloseMouseClick }>
              <MdOutlineClose size={"20px"}/>
            </S.StyledIconCloseWrapper>
            <S.StyledModalTitle>Đăng nhập</S.StyledModalTitle>
          </S.StyledModalTopWrapper>

          {loginSuccess 
            ? (
              <S.StyledLoginSuccessWrapper>
                <BsFillCheckCircleFill color={"#7D97B8"} size={"25px"}/>
                <S.StyledLoginSuccessLabel>Đăng nhập thành công!</S.StyledLoginSuccessLabel>
              </S.StyledLoginSuccessWrapper>
            )
            : (
              <S.StyledModalContentWrapepr>
                <S.StyledWelcome>Chào mừng bạn đến với airute</S.StyledWelcome>

                <S.StyledForm>
                  <S.StyledInputWrapper>
                    <S.StyledInput
                      ref={ usernameRef }
                      isEmpty={ isInputsEmpty.username }
                      required={true}
                      type='text'
                      name='username'
                      value={ userLoginRequest.username }
                      tabIndex={1}
                      onChange={ handleInputChange }/>
                    <S.StyledFormLabel>Tên người dùng</S.StyledFormLabel>
                  </S.StyledInputWrapper>
                  <S.StyledLine/>
                  <S.StyledInputWrapper>
                    <S.StyledInput
                      ref={ passwordRef }
                      isEmpty={ isInputsEmpty.password }
                      required={true}
                      type='password'
                      name='password'
                      value={ userLoginRequest.password }
                      tabIndex={2}
                      onChange={ handleInputChange }/>
                    <S.StyledFormLabel>Mật khẩu</S.StyledFormLabel>
                  </S.StyledInputWrapper>
                </S.StyledForm>

                <S.StyledInputEmptyHintWrapper>
                  {(isInputsEmpty.username || isInputsEmpty.password) && <HiExclamationCircle size={"20px"} color={"#C13515"}/> }
                  { isInputsEmpty.username && <S.StyledInputEmptyHintLabel>{ inputEmptyHint.current.username }</S.StyledInputEmptyHintLabel> }
                  { isInputsEmpty.password && <S.StyledInputEmptyHintLabel>{ inputEmptyHint.current.password }</S.StyledInputEmptyHintLabel> }
                </S.StyledInputEmptyHintWrapper>

                <S.StyledPolicyHint>Chính sách về quyền riêng tư</S.StyledPolicyHint>

                <S.StyledButtonLogin
                  tabIndex={3}
                  onClick={handleLoginSubmit }>
                  Đăng nhập
                </S.StyledButtonLogin>

                <S.StyledRegisterHintWrapper>
                  <S.StyledRegisterHint>Bạn chưa có tài khoản? &nbsp;</S.StyledRegisterHint>
                  <S.StyledRegisterLink 
                    onClick={ handleRegisterLinkMouseClick }>
                    Đăng ký
                  </S.StyledRegisterLink>
                </S.StyledRegisterHintWrapper>

                { loginFailed && <S.StyledLoginFailedAlert>Đăng nhập thất bại!</S.StyledLoginFailedAlert> }

              </S.StyledModalContentWrapepr>
            )
          }

        </M.MotionModalWrapper>
    </S.StyledContainer>
  )
}