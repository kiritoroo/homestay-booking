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

interface Props {}

export const RegisterModal = (props: Props) => {
  const userActions = useUserActions();

  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const fullnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const repasswordRef = useRef<HTMLInputElement>(null);
  const [registerFailed, setRegisterFailed] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const [isNextStep, setIsNextStep] = useState(false);
  const [isShowRegisterModal, setIsShowRegisterModal] = useRecoilState(isShowRegisterModalAtom);
  const setIsShowLoginModal = useSetRecoilState(isShowLoginModalAtom);
  const [isRepasswordInccorect, setRepasswordInccorect] = useState(false);

  const [userRegisterRequest, setUserRegisterRequest] = useState<IUserRegisterRequestBody>({
    username: '',
    full_name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [repasswordValue, setRepasswordValue] = useState('');
  const [isInputsEmpty, setIsInputsEmpty] = useState({ 
    username: false, 
    full_name: false,
    email: false,
    phone: false,
    password: false,
    repassword: false
  });
  const inputEmptyHint = useRef({
    username: 'Cần nhập tên người dùng',
    full_name: 'Cần nhập tên pháp lý',
    email: 'Cần nhập địa chỉ email',
    phone: 'Cần nhập số điện thoại',
    password: 'Cần nhập mật khẩu',
    repassword: 'Cần nhập lại mật khẩu',
  });

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserRegisterRequest((prevRequest) => ({
      ...prevRequest,
      [name]: value
    }));

    setIsInputsEmpty((prevErrors) => ({
      ...prevErrors,
      [name]: false
    }));
  }, [])

  const handleRepasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRepasswordValue(value)

    setIsInputsEmpty((prevErrors) => ({
      ...prevErrors,
      [name]: false
    }));

    setRepasswordInccorect(false);
  }, [])

  const handleInfoSubmit = useCallback(() => {
    if (usernameRef.current && fullnameRef.current && emailRef.current && phoneRef.current) {
      if (!userRegisterRequest.username) {
        setIsInputsEmpty((prevErrors) => ({
          ...prevErrors,
          username: true,
        }));
        usernameRef.current.focus();
      } else if (!userRegisterRequest.full_name) {
        setIsInputsEmpty((prevErrors) => ({
          ...prevErrors,
          full_name: true,
        }));
        fullnameRef.current.focus();
      } else if (!userRegisterRequest.email) {
        setIsInputsEmpty((prevErrors) => ({
          ...prevErrors,
          email: true,
        }));
        emailRef.current.focus();
      } else if (!userRegisterRequest.phone) {
        setIsInputsEmpty((prevErrors) => ({
          ...prevErrors,
          phone: true,
        }));
        phoneRef.current.focus();
      } else {
        setIsNextStep(true);
      }
    }
  }, [userRegisterRequest, usernameRef.current, fullnameRef.current, emailRef.current, phoneRef.current])

  const handleRegisterSubmit = useCallback(() => {
    setRegisterFailed(false);
    if (passwordRef.current && repasswordRef.current) {
      if (!userRegisterRequest.password) {
        setIsInputsEmpty((prevErrors) => ({
          ...prevErrors,
          password: true,
        }));
        passwordRef.current.focus();
      } else if (!repasswordValue) {
        setIsInputsEmpty((prevErrors) => ({
          ...prevErrors,
          repassword: true,
        }));
        repasswordRef.current.focus();
      } else {
        if (repasswordValue !== userRegisterRequest.password) {
          setRepasswordInccorect(true);
        } else {
          userActions.register(userRegisterRequest)
          .then(() => {
            setRegisterSuccess(true);
          })
          .catch((error) => {
            setRegisterFailed(true);
          })
        }
      }
    }
  }, [userRegisterRequest, repasswordValue, passwordRef.current, repasswordRef.current])

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

  useEffect(() => {
    if (registerSuccess) {
      setTimeout(() => {
        setIsShowRegisterModal(false);
        setIsShowLoginModal(true);
      }, 500)
    }
  }, [registerSuccess])

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
                          ref={ usernameRef }
                          name='username'
                          value={ userRegisterRequest.username }
                          isEmpty={ isInputsEmpty.username }
                          type='text'
                          required
                          tabIndex={1}
                          onChange={ handleInputChange }/>
                        <S.StyledFormLabel>Tên người dùng</S.StyledFormLabel>
                      </S.StyledInputWrapper>
                      <S.StyledLine/>
                      <S.StyledInputWrapper>
                        <S.StyledInput
                          ref={ fullnameRef }
                          name='full_name'
                          value={ userRegisterRequest.full_name }
                          isEmpty={ isInputsEmpty.full_name }
                          type='text'
                          required
                          tabIndex={2}
                          onChange={ handleInputChange }/>
                        <S.StyledFormLabel>Tên pháp lý</S.StyledFormLabel>
                      </S.StyledInputWrapper>
                      <S.StyledLine/>
                      <S.StyledInputWrapper>
                        <S.StyledInput
                          ref={ emailRef }
                          name='email'
                          value={ userRegisterRequest.email }
                          isEmpty={ isInputsEmpty.email }
                          type='text'
                          required
                          tabIndex={3}
                          onChange={ handleInputChange }/>
                        <S.StyledFormLabel>Địa chỉ email</S.StyledFormLabel>
                      </S.StyledInputWrapper>
                      <S.StyledLine/>
                      <S.StyledInputWrapper>
                        <S.StyledInput
                          ref={ phoneRef }
                          name='phone'
                          value={ userRegisterRequest.phone }
                          isEmpty={ isInputsEmpty.phone }
                          type='text'
                          required
                          tabIndex={3}
                          onChange={ handleInputChange }/>
                        <S.StyledFormLabel>Số điện thoại</S.StyledFormLabel>
                      </S.StyledInputWrapper>
                      <S.StyledLine/>
                    </S.StyledForm>
                  ) : (
                    <S.StyledForm>
                      <S.StyledInputWrapper>
                        <S.StyledInput
                          ref={ passwordRef }
                          name='password'
                          value={ userRegisterRequest.password }
                          isEmpty={ isInputsEmpty.password }
                          type='password'
                          required
                          tabIndex={1}
                          onChange={ handleInputChange }/>
                        <S.StyledFormLabel>Mật khẩu</S.StyledFormLabel>
                      </S.StyledInputWrapper>
                      <S.StyledLine/>
                      <S.StyledInputWrapper>
                        <S.StyledInput
                          ref={ repasswordRef }
                          name='repassword'
                          value={ repasswordValue }
                          isEmpty={ isInputsEmpty.repassword }
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
                  {(isInputsEmpty.username 
                    || isInputsEmpty.full_name 
                    || isInputsEmpty.email 
                    || isInputsEmpty.phone 
                    || isInputsEmpty.password
                    || isInputsEmpty.repassword
                    || isRepasswordInccorect
                  ) && <HiExclamationCircle size={"20px"} color={"#C13515"}/> }
                  { isInputsEmpty.username && <S.StyledInputEmptyHintLabel>{ inputEmptyHint.current.username }</S.StyledInputEmptyHintLabel> }
                  { isInputsEmpty.full_name && <S.StyledInputEmptyHintLabel>{ inputEmptyHint.current.full_name }</S.StyledInputEmptyHintLabel> }
                  { isInputsEmpty.email && <S.StyledInputEmptyHintLabel>{ inputEmptyHint.current.email }</S.StyledInputEmptyHintLabel> }
                  { isInputsEmpty.phone && <S.StyledInputEmptyHintLabel>{ inputEmptyHint.current.phone }</S.StyledInputEmptyHintLabel> }
                  { isInputsEmpty.password && <S.StyledInputEmptyHintLabel>{ inputEmptyHint.current.password }</S.StyledInputEmptyHintLabel> }
                  { isInputsEmpty.repassword && <S.StyledInputEmptyHintLabel>{ inputEmptyHint.current.repassword }</S.StyledInputEmptyHintLabel> }
                  { isRepasswordInccorect && <S.StyledInputEmptyHintLabel>Nhập lại mật khẩu không chính xác!</S.StyledInputEmptyHintLabel> }
                </S.StyledInputEmptyHintWrapper>
      
                <S.StyledPolicyHint>Chính sách về quyền riêng tư</S.StyledPolicyHint>
                  
                <S.StyledButtonRegister
                  tabIndex={5}
                  onClick={ !isNextStep ? handleInfoSubmit : handleRegisterSubmit }>
                  { !isNextStep ? "Tiếp tục" : "Đăng ký"}
                </S.StyledButtonRegister>
      
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