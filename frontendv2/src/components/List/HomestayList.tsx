import React, { useCallback, useLayoutEffect, useMemo, useState } from "react";
import * as S from "@style/comp/List/HomestayList.styled";
import { HomestayCard } from "../Card/HomestayCard";
import { useHomestayActions } from "@store/homestay/homestay.actions";
import {
  IHomestayGetAllRequestParams,
  IHomestayGetAllResponse,
  IHomestaySchema,
} from "@store/homestay/homestay.schema";
import { useRecoilValue } from "recoil";

interface Props {}

export const HomestayList = (props: Props) => {
  const homestayActions = useHomestayActions();
  const [homestaysData, setHomestaysData] =
    useState<IHomestayGetAllResponse | null>(null);

  const homestayGetAllRequestParams = useMemo<IHomestayGetAllRequestParams>(
    () => ({
      page_id: 1,
      page_size: 10,
    }),
    []
  );

  useLayoutEffect(() => {
    homestayActions
      .getAll(homestayGetAllRequestParams)
      .then((response: IHomestayGetAllResponse) => {
        setHomestaysData(response);
      });
  }, []);

  const createHomestayList = useCallback((data: IHomestaySchema[]) => {
    return data.map((homestay) => (
      <HomestayCard key={homestay.id} homestay={homestay} />
    ));
  }, []);

  const renderedHomestayList = useMemo<JSX.Element[] | null>(() => {
    if (homestaysData) {
      return createHomestayList(
        homestaysData.homestays.map((item) => item.homestay)
      );
    }
    return null;
  }, [homestaysData]);

  return (
    <S.StyledContainer>
      <S.StyledHomestayListWrapper>
        {renderedHomestayList}
      </S.StyledHomestayListWrapper>
    </S.StyledContainer>
  );
};
