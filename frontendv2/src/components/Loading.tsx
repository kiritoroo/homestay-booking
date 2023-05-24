import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil'
import * as S from '@style/comp/Loading.styled';
import * as M from '@motion/Loading.motion';

interface IProps {
  size: number
}

export const Loading = React.memo((props: IProps) => {
  const { size } = props;

  return (
    <M.MotionContainer>
      <M.MotionDotWrapper size={size}>
        <M.MotionDot size={size}/>
        <M.MotionDot size={size}/>
        <M.MotionDot size={size}/>
      </M.MotionDotWrapper>
    </M.MotionContainer>
  )
})
