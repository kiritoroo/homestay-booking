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
  background-color: rgba(80, 80, 80, 0.5);
  z-index: 99999;
`

export const StyledModalWrapper = styled(motion.div)`
  background: rgb(255, 255, 255);
  height: auto;
  padding: 10px 32px 16px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
  width: 400px;
`

export const StyledModalTopWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const StyledModalHeader = styled.div`
  font-weight: 600;
  font-size: 22px;
  margin-top: 40px;
  margin-bottom: 20px;
`

export const StyledModalHint = styled.div`
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 40px;
  color: #555555;
`

export const StyledIconCloseWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: -15px;
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

export const StyledOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  user-select: none;
`

export const StyledOptionFlexLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
`

export const StyledOptionFlexRight = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 15px;
`

export const StyledOptionTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
`

export const StyledOptionHint = styled.div`
  font-weight: 300;
  font-size: 15px;
  max-width: 150px;
  color: #222222;
`

export const StyledButtonControl = styled.div<{ isDissable: boolean }>`
  width: 40px;
  height: 40px;
  border: 1px solid #b0b0b0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  opacity: ${({ isDissable }) => isDissable ? "25%" : "100%"};

  &:hover {
    cursor: ${({ isDissable }) => isDissable ? "not-allowed" : "pointer"};
    border: 2px solid #7D97B8;
  }
`

export const StyledValue = styled.div`
  font-size: 18px;
  font-weight: 300;
`

export const StyledHint = styled.div`
  font-weight: 300;
  font-size: 12px;
`

export const StyledButtonClose = styled.div`
  font-weight: 400;
  font-size: 16px;
  text-decoration: underline;
  float: right;
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: #7D97B8;
  }
`

export const StyledLineHoz = styled.div`
  position: relative;
  border-bottom: 1px solid #DDDDDD;
  width: 400px;
  left: -32px;
`

export const StyledModalBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`

export const StyledButtonAbort = styled.div`
  font-size: 16px;
  text-decoration: underline;
  
  &:hover {
    cursor: pointer;
  }

  &:active {
    color: #7D97B8;
  }
`

export const StyledButtonSave = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 12px 24px;
  transition: transform 0.2s ease;
  user-select: none;
  color: #FFFFFF;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 300;
  background-color: #7D97B8;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: #A8B9CF;
    transform: scale(0.95);
  }
`