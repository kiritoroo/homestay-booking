import React, {useRef } from 'react';
import { Transition, Variants } from 'framer-motion';
import {
  StyledContainer
} from '@style/comp/Promotion.styled'

interface IContainerProps {
  children: React.ReactNode;
}
export const MotionContainer = (props: IContainerProps) => {
  const { children } = props

    const transition = useRef<Transition>({
    duration: 0.5, type: 'keyframes'
  })

  const variants = useRef<Variants>({
    hide: { opacity: 0 },
    enter: { opacity: 1 }
  })

  return (
    <StyledContainer
      variants={ variants.current }
      transition={ transition.current }
      initial="hide"
      animate="enter"
      exit="hide"
    >
      { children }
    </StyledContainer>
  )
}
