import React, { useCallback } from 'react';
import * as S from '@style/comp/Card/AccountOptionCard.styled';
import { useNavigate } from 'react-router-dom';

interface Props {
  icon: React.ReactNode;
  title: string;
  desc: string;
  navigatePath: string;
}

export const AccountOptionCard = (props: Props) => {
  const { icon, title, desc, navigatePath } = props;
  const navigate = useNavigate();

  const handleItemMouseClick = useCallback(() => {
    navigate(navigatePath);
  }, [])

  return (
    <S.StyledContainer onClick={handleItemMouseClick }>
      <S.StyledIcon>{ icon }</S.StyledIcon>
      <S.StyledTitle>{ title }</S.StyledTitle>
      <S.StyledDesciption>{ desc }</S.StyledDesciption>
    </S.StyledContainer>
  )
}