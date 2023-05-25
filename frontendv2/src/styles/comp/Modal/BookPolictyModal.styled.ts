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
  cursor: auto;
`

export const StyledModalWrapper = styled(motion.div)`
  width: 600px;
  background: rgb(255, 255, 255);
  height: auto;
  padding: 10px 32px 16px;
  border-radius: 12px;
  padding: 40px 50px;
`

export const StyledModalTopWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
`

export const StyledIconCloseWrapper = styled.div`
  position: absolute;
  top: -20px;
  left: -24px;
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

export const StyledModalHeader = styled.div`
  font-weight: 600;
  font-size: 22px;
  margin-top: 20px;
`

export const StyledModalhint = styled.div`
  font-weight: 300;
  font-size: 15px;
  color: #555555;
`

export const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 25px;
`

export const StyledDoneButton = styled.div`
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: #7D97B8;
  margin-top: 20px;
  margin-left: 60px;
  margin-right: 60px;
  padding: 16px 20px;
  font-size: 18px;
  color: #FFFFFF;
  border-radius: 8px;
  transition: transform 0.2s ease;
  user-select: none;
  margin-top: 40px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: #A9B9CE;
    transform: scale(0.95);
  }
`