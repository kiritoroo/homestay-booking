import React, { useRef, forwardRef } from 'react';
import { Transition, Variants } from 'framer-motion';
import {
  StyledBeforeButton,
  StyledNextButton
} from '@style/comp/HomestayCard.styled';

interface IBeforeButtonProps {
  children: React.ReactNode
  onClick: () => void
}
export const MotionBeforeButton = (props: IBeforeButtonProps) => {
  const { children, onClick } = props;

  const transition = useRef<Transition>({
    duration: 0.2
  })

  const variants = useRef<Variants>({
    show: { opacity: 1 },
    hide: { opacity: 0 }
  })

  return (
    <StyledBeforeButton 
      variants={ variants.current }
      transition={ transition.current }
      initial="hide"
      animate="show"
      exit="hide"
      onClick={ onClick }
    >
      { children }
    </StyledBeforeButton>
  )
}

interface INextButtonProps {
  children: React.ReactNode
  onClick: () => void
}
export const MotionNextButton = (props: INextButtonProps) => {
  const { children, onClick } = props;

  const transition = useRef<Transition>({
    duration: 0.15
  })

  const variants = useRef<Variants>({
    show: { opacity: 1 },
    hide: { opacity: 0 }
  })

  return (
    <StyledNextButton 
      variants={ variants.current }
      transition={ transition.current }
      initial="hide"
      animate="show"
      exit="hide"
      onClick={ onClick }
    >
      { children }
    </StyledNextButton>
  )
}