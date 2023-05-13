import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledContainer = styled.div`
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`

export const StyledImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  margin-bottom: 10px;
`

export const StyledImageList = styled.div<{imageIndex: number}>`
  width: 28vw;
  height: 25vw;
  display: flex;
  transition: transform 0.5s ease;
  transform: ${({ imageIndex }) => `translateX(${imageIndex * -100}%)`};
`

export const StyledImage = styled.img`
  width: 28vw;
  height: 25vw;
  object-fit: cover;
`

export const StyledHeartWrapper = styled.div`
  position: absolute; 
  top: 5%;
  right: 5%;
  transition: all 0.2s ease;
  background: #FFFFFFAA;
  border-radius: 50%;
  display: flex;
  align-items: center;
  padding: 8px;
  
  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }
`

export const StyledControlButton = styled(motion.div)`
  position: absolute;
  top: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transform: translateY(-50%);
  transform-origin: 50% 50%;
  background-color: #FFFFFFDD;
  transition: all 0.2s ease;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  
  &:hover {
    background-color: #FFFFFF;
    transform: translate(0, -50%) scale(1.1);
  }

  &:active {
    transform: translate(0, -50%) scale(0.95);
  }
`

export const StyledBeforeButton = styled(StyledControlButton)`
  left: 20px;
`

export const StyledNextButton = styled(StyledControlButton)`
  right: 20px;
`

export const StyledDotIndexWrapper = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(-20px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

export const StyledDotIndex = styled.div<{isCurrIndex: boolean}>`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: ${({ isCurrIndex }) => isCurrIndex ? "#FFFFFFFF" : "#FFFFFF99"};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const StyledFirstInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledCity = styled.div`
  font-weight: 600;
  font-size: 15px;
`

export const StyledRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`

export const StyledRating = styled.div`
  font-size: 15px;
`

export const StyledPriceWrapper = styled.div`
  font-size: 15px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-top: 5px;
  padding-bottom: 5px;
`

export const StyledPrice = styled.span`
  font-size: 16px;
  font-weight: 600;
`

export const StyledGradientBottom = styled.div`
  width: 100%;
  background: #00ff00;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 120%);
    user-select: none;
    pointer-events: none;
  }
`