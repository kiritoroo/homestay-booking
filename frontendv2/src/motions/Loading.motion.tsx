import React, { useRef } from 'react';
import { 
  AnimatePresence,
  Transition,
  Variants
} from 'framer-motion';
import {
  StyledContainer,
  StyledDotWrapper,
  StyledDot
} from '@style/comp/Loading.styled'

interface IContainerProps {
  children: React.ReactNode
}
export const MotionContainer: React.FC<IContainerProps> = React.memo(( props ) => {
  const { children } = props;

  const transition = useRef<Transition>({
    duration: 0.1, ease: "easeInOut"
  })

  const variants = useRef<Variants>({
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  })

  return (
    <StyledContainer
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={ transition.current }
      variants={ variants.current }
    >
      { children }
    </StyledContainer>
  )
})

interface IDotWrapperProps {
  size: number,
  children: React.ReactNode
}
export const MotionDotWrapper: React.FC<IDotWrapperProps> = ( props ) => {
  const { size, children } = props
  
  const transition = useRef<Transition>({
    staggerChildren: 0.2
  });
  
  const variants = useRef<Variants>({
    start: { transition: transition.current },
    end: { transition: transition.current }
  });

  return (
    <StyledDotWrapper
      size={size }
      variants={ variants.current }
      initial="start"
      animate="end"
    >
      { children }
    </StyledDotWrapper>
  )
}

interface IDotProps {
  size: number
}
export const MotionDot: React.FC<IDotProps> = (props: IDotProps) => {
  const { size } = props;
  
  const transition = useRef<Transition>({
    duration: 0.5, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut"
  });
  
  const variants = useRef<Variants>({
    start: { y: "0%" },
    end: { y: "100%" }
  });

  return (
    <StyledDot
      size={ size }
      variants={ variants.current } 
      transition={ transition.current }
    />
  )
}
