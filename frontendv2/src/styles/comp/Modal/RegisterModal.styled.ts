import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(80, 80, 80, 0.5);
  z-index: 99999;
`

export const StyledModalWrapper = styled(motion.div)`
  background-color: #FFFFFF;
  width: 500px;
  height: auto;
  padding: 0 20px;
  border-radius: 15px;
`

export const StyledModalTopWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #DDDDDD;
`

export const StyledIconCloseWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-40%);
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: #F7F7F7;
    border-radius: 50%;
  }
`

export const StyledModalTitle = styled.div`
  padding: 20px;
  font-weight: 600;
  font-size: 16px;
  color: #222222;
`

export const StyledModalContentWrapepr = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 25px;
  margin-bottom: 25px;
`

export const StyledWelcome = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #222222;
  margin-bottom: 30px;
`

export const StyledForm = styled.form`
  border-radius: 10px;
  border: solid 1px #DDDDDD;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const StyledInputWrapper = styled.div`
  width: 100%;
  position: relative;
  height: auto;
`

export const StyledFormLabel = styled.label`
  position: absolute;
  top: 30%;
  left: 15px;
  color: #7C7C7C;
  font-size: 16px;
  font-weight: 300;
  user-select: none;
  pointer-events: none;
  transition: all 0.2s ease;
`

export const StyledInput = styled.input<{ isError: boolean }>`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 10px;
  padding-left: 20px;
  border: solid 1px #FFFFFF;
  outline: none;
  border-radius: 10px;
  transition: border 0.5s ease;
  font-size: 16px;
  background-color: ${({ isError }) => (isError ? '#FFF8F6' : '#FFFFFF')};
  z-index: 0;

  &:focus {
    outline: none;
    border: solid 1px #7D97B8;
    border-color: ${({ isError }) => (isError ? '#C13515' : '#7D97B8')};
    z-index: 2;
  }

  &:focus + ${StyledFormLabel} {
    top: 15%;
    font-size: 12px;
    color: ${({ isError }) => (isError ? '#C13515' : '#7D97B8')};
  }

  &:valid + ${StyledFormLabel} {
    top: 15%;
    font-size: 12px;
    color:  #7D97B8;
  }
`

export const StyledLine = styled.div`
  position: relative;
  border-bottom: 1px solid #DDDDDD;
  z-index: 1;
`

export const StyledInputPhoneWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: start;
`

export const StyledPhoneLocaleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 10px;
  border-right: 1px solid #DDDDDD;
  user-select: none;
`

export const StyledPhoneLocaleIcon = styled.img`
  width: 40px;
  height: 30px;
  object-fit: contain;
`

export const StyledPhoneLocaleValue = styled.div`
  font-weight: 600;
`

export const StyledButtonRegisterWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const StyledLoadingWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`

export const StyledButtonRegister = styled.button`
  display: flex;
  width: 100%;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: #7D97B8;
  margin-top: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 16px;
  color: #FFFFFF;
  border-radius: 8px;
  transition: transform 0.2s ease;
  user-select: none;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }
`

export const StyledPolicyHint = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: 600;
  text-decoration: underline;
  text-align: center;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:active {
    color: #7D97B8;
  }
`

export const StyledLoginHintWrapper = styled.div`
  padding-top: 5px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledLoginHint = styled.span`
  font-weight: 300;
  font-size: 12px;
`

export const StyledLoginLink = styled.span`
  font-weight: 500;
  font-size: 12px;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:active {
    color: #7D97B8;
  }
`

export const StyledInputEmptyHintWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`

export const StyledInputEmptyHintLabel = styled.div`
  width: 100%;
  color: #C13515;
  font-size: 12px;
  font-weight: 500;
  padding-left: 5px;
`

export const StyledNavigateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
`

export const StyledLinkBefore = styled.div`
  font-weight: 500;
  font-size: 12px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:active {
    color: #7D97B8;
  }
`

export const StyledLinkCurrent = styled.div`
  font-weight: 500;
  font-size: 12px;

  &:hover {
    cursor: text;
  }
`

export const StyledRegisterFailedAlert = styled.div`
  width: 100%;
  color: #C13515;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
`

export const StyledRegisterSuccessWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
`

export const StyledRegisterSuccessLabel = styled.div`
  margin-left: 15px;
  font-weight: 300;
`