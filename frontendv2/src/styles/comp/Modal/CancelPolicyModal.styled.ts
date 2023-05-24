import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(80, 80, 80, 0.2);
  z-index: 99999;
  cursor: auto;
`

export const StyledModalWrapper = styled(motion.div)`
  width: 620px;
  background: rgb(255, 255, 255);
  height: auto;
  padding: 10px 32px 16px;
  border-radius: 12px;
  padding: 10px 50px;
`

export const StyledHeaderTitle = styled.div`
  font-weight: 600;
  font-size: 22px;
  margin-top: 30px;
  margin-bottom: 20px;
`

export const StyledHeaderHint = styled.div`
  font-size: 18px;
  font-weight: 300;
`

export const StyledBold = styled.span`
  font-weight: 600;
`

export const StyledLink = styled.span`
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: #7D97B8;
  }
`

export const StyledLineHoz = styled.div`
  width: 100%;
  border-bottom: 1px solid #DDDDDD;
  margin-bottom: 30px;
  margin-top: 30px;
`

export const StyledPolicyAcceptWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`

export const StyledCheckHint = styled.div`
  font-weight: 400;
  color: #C13515;
  font-size: 14px;
  margin-bottom: 10px;
`

export const StyledCheckMark = styled.input`
  width: 50px;
  height: 50px;

  &:checked {
    accent-color: #7D97B8;
  }

  &:hover {
    cursor: pointer;
  }
`

export const StyledPolicyAcceptDesc = styled.div`
  font-weight: 300;
  font-size: 16px;
  color: #222222;
`

export const StyledBottomHint = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #222222;
`

export const StyledControlWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const StyledButtonCancel = styled.button`
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: #F87876;
  margin-top: 20px;
  padding: 14px 20px;
  font-size: 16px;
  color: #FFFFFF;
  border-radius: 8px;
  transition: transform 0.2s ease;
  user-select: none;

  &:hover {
    cursor: pointer;
    background-color: #FAA5A3;
  }

  &:active {
    background-color: #FAA5A3;
    transform: scale(0.95);
  }
`

export const StyledButtonClose = styled.div`
  font-size: 16px;
  text-decoration: underline;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }

  &:active {
    color: #7D97B8;
  }
`

export const StyledLoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 20px;
  padding: 14px 75px;
`