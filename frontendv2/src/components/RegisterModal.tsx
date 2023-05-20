import React, { useCallback, useRef, useState, ChangeEvent, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isShowLoginModalAtom, isShowRegisterModalAtom } from '@store/app.atoms';
import * as S from '@style/comp/RegisterModal.styled';
import * as M from '@motion/RegisterModal.motion';
import { MdOutlineClose } from 'react-icons/md';
import { IUserRegisterRequestBody } from '@store/user/user.schema';
import { HiExclamationCircle } from 'react-icons/hi';
import { useUserActions } from '@store/user/user.actions';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Loading } from './Loading';

interface Props {}

export const RegisterModal = (props: Props) => {
  const userActions = useUserActions();

  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const fullnameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const repasswordInputRef = useRef<HTMLInputElement>(null);
  const [registerPending, setRegisterPending] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerFailed, setRegisterFailed] = useState(false);

  const [isNextStep, setIsNextStep] = useState(false);
  const [isShowRegisterModal, setIsShowRegisterModal] = useRecoilState(isShowRegisterModalAtom);
  const setIsShowLoginModal = useSetRecoilState(isShowLoginModalAtom);

  const [userRegisterRequest, setUserRegisterRequest] = useState<IUserRegisterRequestBody>({
    username: '',
    full_name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [repasswordValue, setRepasswordValue] = useState('');
  const [isInputsError, setIsInputsError] = useState({ 
    username: false, 
    full_name: false,
    email: false,
    phone: false,
    password: false,
    repassword: false
  });
  const [inputsErrorHint, setInputsErrorHint] = useState({
    username: '',
    full_name: '',
    email: '',
    phone: '',
    password: 'Cần nhập mật khẩu',
    repassword: 'Cần nhập lại mật khẩu',
  });

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserRegisterRequest((prevRequest) => ({
      ...prevRequest,
      [name]: value
    }));

    setIsInputsError((prevErrors) => ({
      ...prevErrors,
      [name]: false
    }));
  }, [])

  const handleRepasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRepasswordValue(value)

    setIsInputsError((prevErrors) => ({
      ...prevErrors,
      [name]: false
    }));
  }, [])

  const checkInputUsername = useCallback(() => {
    if (usernameInputRef.current) {
      if (!userRegisterRequest.username) {
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
  }, [usernameInputRef.current, userRegisterRequest])

  const checkInputFullname = useCallback(() => {
    if (fullnameInputRef.current) {
      if (!userRegisterRequest.full_name) {
        setIsInputsError((prevErrors) => ({
          ...prevErrors,
          full_name: true,
        }));
        setInputsErrorHint((prevHint) => ({
          ...prevHint,
          full_name: "Cần nhập tên pháp lý!"
        }))
        fullnameInputRef.current.focus();
        return false
      }
    }
    return true
  }, [fullnameInputRef.current, userRegisterRequest])

  const checkInputEmail = useCallback(() => {
    if (emailInputRef.current) {
      if (!userRegisterRequest.email) {
        setIsInputsError((prevErrors) => ({
          ...prevErrors,
          email: true,
        }));
        setInputsErrorHint((prevHint) => ({
          ...prevHint,
          email: "Cần nhập địa chỉ email!"
        }))
        emailInputRef.current.focus();
        return false
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(userRegisterRequest.email)) {
        setIsInputsError((prevErrors) => ({
          ...prevErrors,
          email: true,
        }));
        setInputsErrorHint((prevHint) => ({
          ...prevHint,
          email: "Địa chỉ email không phù hợp!"
        }))
        emailInputRef.current.focus();
        return false
      }
    }
    return true
  }, [emailInputRef.current, userRegisterRequest])

  const checkInputPhone = useCallback(() => {
    if (phoneInputRef.current) {
      if (!userRegisterRequest.phone) {
        setIsInputsError((prevErrors) => ({
          ...prevErrors,
          phone: true,
        }));
        setInputsErrorHint((prevHint) => ({
          ...prevHint,
          phone: "Cần nhập số điện thoại!"
        }))
        phoneInputRef.current.focus();
        return false
      }
      if (userRegisterRequest.phone.length < 8 || userRegisterRequest.phone.length > 12) {
        setIsInputsError((prevErrors) => ({
          ...prevErrors,
          phone: true,
        }));
        setInputsErrorHint((prevHint) => ({
          ...prevHint,
          phone: "Độ dài số điện thoại không hợp lệ!"
        }))
        phoneInputRef.current.focus();
        return false
      }
      const regex = /^[0-9+]+$/;
      if (!regex.test(userRegisterRequest.phone)) {
        setIsInputsError((prevErrors) => ({
          ...prevErrors,
          phone: true,
        }));
        setInputsErrorHint((prevHint) => ({
          ...prevHint,
          phone: "Số điện thoại không hợp lệ!"
        }));
        phoneInputRef.current.focus();
        return false;
      }
    }

    const phoneInputValue = userRegisterRequest.phone;
    if (phoneInputValue.startsWith('+84')) {
      setUserRegisterRequest((prevRequest) => ({
        ...prevRequest,
        phone: phoneInputValue
      }));
    } else if (phoneInputValue.startsWith('84')) {
      setUserRegisterRequest((prevRequest) => ({
        ...prevRequest,
        phone: `+${phoneInputValue}`
      }));
    } else if (phoneInputValue.startsWith('0')){
      setUserRegisterRequest((prevRequest) => ({
        ...prevRequest,
        phone: phoneInputValue.replace(/^0/, '+84')
      }));
    } else {
      setUserRegisterRequest((prevRequest) => ({
        ...prevRequest,
        phone: `+84${phoneInputValue}`
      }));
    }
    return true
  }, [phoneInputRef.current, userRegisterRequest])

  const handleInfoSubmit = useCallback(() => {
    setRegisterPending(true)
    setTimeout(() => {
      setRegisterPending(false)
    }, 100)
    setIsNextStep(true);
  }, [])

  const handleButtonNextMouseClick = useCallback(() => {
    checkInputUsername()
      && checkInputFullname()
      && checkInputEmail()
      && checkInputPhone()
      && handleInfoSubmit()
  }, [
    usernameInputRef.current,
    fullnameInputRef.current,
    emailInputRef.current,
    phoneInputRef.current,
    userRegisterRequest
  ])

  const checkInputPassword = useCallback(() => {
    if (passwordInputRef.current) {
      if (!userRegisterRequest.password) {
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
      if (userRegisterRequest.password.length < 6) {
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
  }, [passwordInputRef.current, userRegisterRequest])

  const checkInputRepassword = useCallback(() => {
    if (repasswordInputRef.current) {
      if (!repasswordValue) {
        setIsInputsError((prevErrors) => ({
          ...prevErrors,
          password: true,
        }));
        setInputsErrorHint((prevHint) => ({
          ...prevHint,
          password: "Cần nhập lại mật khẩu!"
        }))
        repasswordInputRef.current.focus();
        return false
      }
      if (repasswordValue.length < 6) {
        setIsInputsError((prevErrors) => ({
          ...prevErrors,
          password: true,
        }));
        setInputsErrorHint((prevHint) => ({
          ...prevHint,
          password: "Mật khẩu phải có độ dài lớn hơn 6 ký tự!"
        }))
        repasswordInputRef.current.focus();
        return false
      }
      if (repasswordValue !== userRegisterRequest.password) {
        setIsInputsError((prevErrors) => ({
          ...prevErrors,
          password: true,
        }));
        setInputsErrorHint((prevHint) => ({
          ...prevHint,
          password: "Nhập lại mật khẩu không chính xác!"
        }))
        repasswordInputRef.current.focus();
        return false
      }
    }
    return true
  }, [repasswordInputRef.current, repasswordValue, userRegisterRequest.password])

  const handleRegisterSubmit = useCallback(() => {
    setRegisterPending(true)
    userActions.register(userRegisterRequest)
    .then(() => {
      setTimeout(() => {
        setRegisterPending(false)
        setRegisterSuccess(true);
        setTimeout(() => {
          setIsShowRegisterModal(false);
          setIsShowLoginModal(true);
        }, 500)
      }, 200)
    })
    .catch(() => {
      setTimeout(() => {
        setRegisterPending(false)
        setRegisterFailed(true);
      }, 200);
    })
  }, [userRegisterRequest, repasswordValue, passwordInputRef.current, repasswordInputRef.current])

  const handleButtonRegisterMouseClick = useCallback(() => {
    checkInputPassword()
      && checkInputRepassword()
      && handleRegisterSubmit()
  }, [
    passwordInputRef.current,
    repasswordInputRef.current,
    userRegisterRequest,
    repasswordValue
  ])

  const handleContainerMouseClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (containerRef.current && modalRef.current) {
      if (!modalRef.current.contains(event.target as Node)) {
        setIsShowRegisterModal(false)
      }
    }
  }, [containerRef.current, modalRef.current])

  const handleIconCloseMouseClick = useCallback(() => {
    setIsShowRegisterModal(false)
  }, [])

  const handleLoginLinkMouseClick = useCallback(() => {
    setIsShowRegisterModal(false)
    setIsShowLoginModal(true)
  }, []) 

  const handleNavigateInfoStep = useCallback(() => {
    setRegisterFailed(false);
    setIsNextStep(false);
  }, [])

  return (
    <S.StyledContainer
      ref={ containerRef }
      onClick={(e) => handleContainerMouseClick(e) }>
      <M.MotionModalWrapper
      ref={ modalRef }
      isShow={ isShowRegisterModal }>
        <S.StyledModalTopWrapper>
          <S.StyledIconCloseWrapper
          onClick={ handleIconCloseMouseClick }>
            <MdOutlineClose size={"20px"}/>
          </S.StyledIconCloseWrapper>
          <S.StyledModalTitle>Đăng ký</S.StyledModalTitle>
        </S.StyledModalTopWrapper>

        { registerSuccess 
            ? (
              <S.StyledRegisterSuccessWrapper>
                <BsFillCheckCircleFill color={"#7D97B8"} size={"25px"}/>
                <S.StyledRegisterSuccessLabel>Đăng ký thành công!</S.StyledRegisterSuccessLabel>
              </S.StyledRegisterSuccessWrapper>
            ) : (
              <S.StyledModalContentWrapepr>
                <S.StyledWelcome>Chào mừng bạn đến với airute</S.StyledWelcome>
      
                <S.StyledNavigateWrapper>
                  { !isNextStep ?
                    (
                      <S.StyledLinkCurrent>Thông tin chung</S.StyledLinkCurrent>
                    )
                    : (
                      <React.Fragment>
                      <S.StyledLinkBefore onClick={ handleNavigateInfoStep }>Thông tin chung</S.StyledLinkBefore>
                      <MdOutlineNavigateNext size={"20px"}/>
                      <S.StyledLinkCurrent>Đặt mật khẩu</S.StyledLinkCurrent>
                      </React.Fragment>
                    )
                  }
                </S.StyledNavigateWrapper>
      
                {!isNextStep
                  ? (
                    <S.StyledForm>
                      <S.StyledInputWrapper>
                        <S.StyledInput
                          ref={ usernameInputRef }
                          name='username'
                          value={ userRegisterRequest.username }
                          isError={ isInputsError.username }
                          type='text'
                          required
                          tabIndex={1}
                          onChange={ handleInputChange }/>
                        <S.StyledFormLabel>Tên người dùng</S.StyledFormLabel>
                      </S.StyledInputWrapper>
                      <S.StyledLine/>
                      <S.StyledInputWrapper>
                        <S.StyledInput
                          ref={ fullnameInputRef }
                          name='full_name'
                          value={ userRegisterRequest.full_name }
                          isError={ isInputsError.full_name }
                          type='text'
                          required
                          tabIndex={2}
                          onChange={ handleInputChange }/>
                        <S.StyledFormLabel>Tên pháp lý</S.StyledFormLabel>
                      </S.StyledInputWrapper>
                      <S.StyledLine/>
                      <S.StyledInputWrapper>
                        <S.StyledInput
                          ref={ emailInputRef }
                          name='email'
                          value={ userRegisterRequest.email }
                          isError={ isInputsError.email }
                          type='text'
                          required
                          tabIndex={3}
                          onChange={ handleInputChange }/>
                        <S.StyledFormLabel>Địa chỉ email</S.StyledFormLabel>
                      </S.StyledInputWrapper>
                      <S.StyledLine/>
                      <S.StyledInputPhoneWrapper>
                        <S.StyledPhoneLocaleWrapper>
                          <S.StyledPhoneLocaleIcon src="/images/flag_vn.png"/>
                          <S.StyledPhoneLocaleValue>+84</S.StyledPhoneLocaleValue>
                        </S.StyledPhoneLocaleWrapper>
                        <S.StyledInputWrapper>
                          <S.StyledInput
                            ref={ phoneInputRef }
                            name='phone'
                            value={ userRegisterRequest.phone }
                            isError={ isInputsError.phone }
                            type='text'
                            required
                            tabIndex={3}
                            onChange={ handleInputChange }/>
                          <S.StyledFormLabel>Số điện thoại</S.StyledFormLabel>
                        </S.StyledInputWrapper>
                      </S.StyledInputPhoneWrapper>
                    </S.StyledForm>
                  ) : (
                    <S.StyledForm>
                      <S.StyledInputWrapper>
                        <S.StyledInput
                          ref={ passwordInputRef }
                          name='password'
                          value={ userRegisterRequest.password }
                          isError={ isInputsError.password }
                          type='password'
                          required
                          tabIndex={1}
                          onChange={ handleInputChange }/>
                        <S.StyledFormLabel>Mật khẩu</S.StyledFormLabel>
                      </S.StyledInputWrapper>
                      <S.StyledLine/>
                      <S.StyledInputWrapper>
                        <S.StyledInput
                          ref={ repasswordInputRef }
                          name='repassword'
                          value={ repasswordValue }
                          isError={ isInputsError.repassword }
                          type='password'
                          required
                          tabIndex={2}
                          onChange={ handleRepasswordChange }/>
                        <S.StyledFormLabel>Nhập lại mật khẩu</S.StyledFormLabel>
                      </S.StyledInputWrapper>
                      <S.StyledLine/>
                    </S.StyledForm>
                  )
                }
      
                <S.StyledInputEmptyHintWrapper>
                  {(isInputsError.username 
                    || isInputsError.full_name 
                    || isInputsError.email 
                    || isInputsError.phone 
                    || isInputsError.password
                    || isInputsError.repassword
                  ) && <HiExclamationCircle size={"20px"} color={"#C13515"}/> }
                  { isInputsError.username && <S.StyledInputEmptyHintLabel>{ inputsErrorHint.username }</S.StyledInputEmptyHintLabel> }
                  { isInputsError.full_name && <S.StyledInputEmptyHintLabel>{ inputsErrorHint.full_name }</S.StyledInputEmptyHintLabel> }
                  { isInputsError.email && <S.StyledInputEmptyHintLabel>{ inputsErrorHint.email }</S.StyledInputEmptyHintLabel> }
                  { isInputsError.phone && <S.StyledInputEmptyHintLabel>{ inputsErrorHint.phone }</S.StyledInputEmptyHintLabel> }
                  { isInputsError.password && <S.StyledInputEmptyHintLabel>{ inputsErrorHint.password }</S.StyledInputEmptyHintLabel> }
                  { isInputsError.repassword && <S.StyledInputEmptyHintLabel>{ inputsErrorHint.repassword }</S.StyledInputEmptyHintLabel> }
                </S.StyledInputEmptyHintWrapper>
      
                <S.StyledPolicyHint>Chính sách về quyền riêng tư</S.StyledPolicyHint>
                
                <S.StyledButtonRegisterWrapper>
                  {registerPending
                    ? (
                    <S.StyledLoadingWrapper>
                      <Loading size={10}/>
                    </S.StyledLoadingWrapper>)
                    : (
                    <S.StyledButtonRegister
                      tabIndex={5}
                      onClick={ !isNextStep ? handleButtonNextMouseClick : handleButtonRegisterMouseClick }>
                      { !isNextStep ? "Tiếp tục" : "Đăng ký"}
                    </S.StyledButtonRegister>)}
                </S.StyledButtonRegisterWrapper>
      
                <S.StyledLoginHintWrapper>
                  <S.StyledLoginHint>Bạn đã có tài khoản? &nbsp;</S.StyledLoginHint>
                  <S.StyledLoginLink 
                    onClick={ handleLoginLinkMouseClick }>
                    Đăng nhập
                  </S.StyledLoginLink>
                </S.StyledLoginHintWrapper>
      
                { registerFailed && <S.StyledRegisterFailedAlert>Đăng ký thất bại!</S.StyledRegisterFailedAlert> }
      
              </S.StyledModalContentWrapepr>
            )
        }

      </M.MotionModalWrapper>
    </S.StyledContainer>
  )
}