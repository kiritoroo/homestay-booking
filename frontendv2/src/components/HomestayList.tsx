import React, { useCallback, useLayoutEffect, useMemo } from 'react';
import * as S from '@style/comp/HomestayList.styled';
import { HomestayCard } from './HomestayCard';
import { useHomestayActions } from '@store/homestay/homestay.actions';
import { IHomestayGetAllRequestParams, IHomestaySchema } from '@store/homestay/homestay.schema';
import { useRecoilValue } from 'recoil';
import { homestaysSelector } from '@store/homestay/homestay.selectors';

interface Props {}

export const HomestayList = (props: Props) => {
  const homestayActions = useHomestayActions();
  const homestays = useRecoilValue(homestaysSelector);

  const homestayGetAllRequestParams = useMemo<IHomestayGetAllRequestParams> (() => ({
    page_id: 1,
    page_size: 5
  }), [])

  useLayoutEffect(() => {
    homestayActions.getAll(homestayGetAllRequestParams)
  }, [])

  const createHomestayList = useCallback((data: IHomestaySchema[]) => {
    return data.map((homestay) => (
      <HomestayCard
        key={ homestay.id }
        homestay={ homestay }/>
    ))
  }, [])

  const renderedHomestayList = useMemo<JSX.Element[]>(() => {
    return createHomestayList(homestays.data);
  }, [homestays])

  return (
    <S.StyledContainer>
      <S.StyledHomestayListWrapper>
        { renderedHomestayList }
      </S.StyledHomestayListWrapper>
    </S.StyledContainer>
  )
}