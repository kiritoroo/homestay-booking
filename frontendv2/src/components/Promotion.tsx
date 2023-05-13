import React from "react";
import * as S from '@style/comp/Promotion.styled';
import * as M from '@motion/Promotion.motion';

interface Props {}

export const Promotion = (props: Props) => {

  return (
    <M.MotionContainer>
      <S.StyledFlexWrapper>
        <S.StyledTitle>
          Đặt phòng ngay với ưu đãi 50%
        </S.StyledTitle>
        <S.StyledMoreLink>
          Tìm hiểu thêm
        </S.StyledMoreLink>
      </S.StyledFlexWrapper>
    </M.MotionContainer>
  )
}
