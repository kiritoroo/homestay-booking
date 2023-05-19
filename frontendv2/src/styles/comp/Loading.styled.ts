import styled from "styled-components";
import { motion } from 'framer-motion';

export const StyledContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  pointer-events: none;
  user-select: none;
  z-index: 99999;
`

export const StyledDotWrapper = styled(motion.div)<{ size: number }>`
  display: flex;
  justify-content: space-around;
  gap: ${({size}) => `${size}px`};
`

export const StyledDot = styled(motion.span)<{ size: number }>`
  display: block;
  width: ${({size}) => `${size}px`};
  height: ${({size}) => `${size}px`};
  background: #7D97B8;
  border-radius: 50%;
`
