import styled from "styled-components";
import { motion } from 'framer-motion';

export const StyledContainer = styled(motion.div)`
  padding-right: 40px;
  padding-left: 40px;
  background: #F7F7F7;
`

export const StyledFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  padding-top: 23px;
  padding-bottom: 23px;
  color: #222222;
`

export const StyledMoreLink = styled.a`
  font-size: 16px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:active {
    color: #7D97B8;
  }
`