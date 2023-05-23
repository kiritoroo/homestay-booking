import React, { useCallback, useRef, useState, ChangeEvent, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isShowLoginModalAtom, isShowRegisterModalAtom } from '@store/app.atoms';
import { MdOutlineClose } from 'react-icons/md';
import { IUserLoginRequestBody } from '@store/user/user.schema';
import { useUserActions } from '@store/user/user.actions';
import { HiExclamationCircle } from 'react-icons/hi';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import * as S from '@style/comp/Modal/LoginModal.styled';
import * as M from '@motion/LoginModal.motion';
import { Loading } from '../Loading';

interface Props {}

export const LoginModal = (props: Props) => {
  const userActions = useUserActions();

  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [isShowLoginModal, setIsShowLoginModal] = useRecoilState(isShowLoginModalAtom);
  const setIsShowRegisterModal = useSetRecoilState(isShowRegisterModalAtom);
  const [loginPending, setLoginPending] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [loginFailedText, setLoginfailedText] = useState("");
  
  const [userLoginRequest, setUserLoginRequest] = useState<IUserLoginRequestBody>({
    username: '',
    password: ''
  });
  const [isInputsError, setIsInputsError] = useState({ 
    username: false, 
    password: false 
  });
  const [inputsErrorHint, setInputsErrorHint] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginFailed(false)
    setUserLoginRequest((prevRequest) => ({
      ...prevRequest,
      [name]: value
    }));

    setIsInputsError((prevErrors) => ({
      ...prevErrors,
      [name]: false
    }));
  }, [])

  const checkInputUsername = useCallback(() => {
    if (usernameInputRef.current) {
      if (!userLoginRequest.username) {
        setIsInputsError((prevErrors) => ({
          ...prevErrors,
          username: true,
        }));
        setInputsErrorHint((prevHint) => ({
          ...prevHint,
          username: "Cần nhập tên người dùng!"
        }))
        usernameInputRef.current.focus();
        return false
      }
    }
    return true
  }, [usernameInputRef.current, userLoginRequest])

  const checkInputPassword = useCallback(() => {
    if (passwordInputRef.current) {
      if (!userLoginRequest.password) {
        setIsInputsError((prevErrors) => ({
          ...prevErrors,
          password: true,
        }));
        setInputsErrorHint((prevHint) => ({
          ...prevHint,
          password: "Cần nhập mật khẩu!"
        }))
        passwordInputRef.current.focus();
        return false
      }
      if (userLoginRequest.password.length < 6) {
        setIsInputsError((prevErrors) => ({
          ...prevErrors,
          password: true,
        }));
        setInputsErrorHint((prevHint) => ({
          ...prevHint,
          password: "Mật khẩu phải có độ dài lớn hơn 6 ký tự!"
        }))
        passwordInputRef.current.focus();
        return false
      }
    }
    return true
  }, [passwordInputRef.current, userLoginRequest])

  const handleLoginSubmit = useCallback(() => {
    setLoginPending(true)
    userActions.login(userLoginRequest)
      .then(() => {
        setTimeout(() => {
          setLoginPending(false)
          setLoginSuccess(true);
          setTimeout(() => {
            setIsShowLoginModal(false);
          }, 300)
          window.location.reload();
        }, 200)
      })
      .catch((error: Error) => {
        const errorStatus = Number(error.message);
        if (errorStatus == 401) {
          setLoginfailedText("Đăng nhập thất bại!")
        } else if (errorStatus == 404) {
          setLoginfailedText("Tài khoản không tồn tại!")
        }
        setTimeout(() => {
          setLoginPending(false)
          setLoginFailed(true);
        }, 200);
      })
  }, [userLoginRequest])

  const handleButtonLoginMouseClick = useCallback(() => {
    checkInputUsername()
      && checkInputPassword()
      && handleLoginSubmit()
  }, [usernameInputRef.current, passwordInputRef.current, userLoginRequest])

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
                      ref={ usernameInputRef }
                      isError={ isInputsError.username }
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
                      ref={ passwordInputRef }
                      isError={ isInputsError.password }
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
                  {(isInputsError.username || isInputsError.password) && <HiExclamationCircle size={"20px"} color={"#C13515"}/> }
                  { isInputsError.username && <S.StyledInputEmptyHintLabel>{ inputsErrorHint.username }</S.StyledInputEmptyHintLabel> }
                  { isInputsError.password && <S.StyledInputEmptyHintLabel>{ inputsErrorHint.password }</S.StyledInputEmptyHintLabel> }
                </S.StyledInputEmptyHintWrapper>

                <S.StyledPolicyHint>Chính sách về quyền riêng tư</S.StyledPolicyHint>

                <S.StyledButtonLoginWrapper>
                  {loginPending
                    ? (
                    <S.StyledLoadingWrapper>
                      <Loading size={10}/>
                    </S.StyledLoadingWrapper>)
                    : (
                    <S.StyledButtonLogin
                      tabIndex={3}
                      onClick={ handleButtonLoginMouseClick }>
                      Đăng nhập
                    </S.StyledButtonLogin>)}
                </S.StyledButtonLoginWrapper>


                <S.StyledRegisterHintWrapper>
                  <S.StyledRegisterHint>Bạn chưa có tài khoản? &nbsp;</S.StyledRegisterHint>
                  <S.StyledRegisterLink 
                    onClick={ handleRegisterLinkMouseClick }>
                    Đăng ký
                  </S.StyledRegisterLink>
                </S.StyledRegisterHintWrapper>

                { loginFailed && <S.StyledLoginFailedAlert> { loginFailedText } </S.StyledLoginFailedAlert> }

              </S.StyledModalContentWrapepr>
            )
          }

        </M.MotionModalWrapper>
    </S.StyledContainer>
  )
}