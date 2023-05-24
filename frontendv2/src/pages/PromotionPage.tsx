import React, { useEffect, useState, useLayoutEffect, useMemo } from "react";
import * as S from "@style/page/PromotionPage.styled";
import { Header } from "@comp/Header";
import { PromotionCard } from "@comp/Card/PromotionCard";
import { useRecoilValue } from "recoil";
import { authSelector } from "@store/user/user.selectors";
import { Loading } from "@comp/Loading";
import { usePromotionActions } from "@store/promotion/promotion.actions";
import { IPromotionGetAllRequestParams, IPromotionSchema } from "@store/promotion/promotion.schema";
import { MainFooter } from "@comp/MainFooter";

export default function PromotionPage() {
  const { user } = useRecoilValue(authSelector);
  const promotionActions = usePromotionActions();
  const [isloading, setIsLoading] = useState<boolean>(true);
  const [promotionData, setPromotionData] = useState<IPromotionSchema[]>([]);

  const promotionGetAllRequestParams = useMemo<IPromotionGetAllRequestParams> (() => ({
    page_id: 1,
    page_size: 10
  }), [])

  useLayoutEffect(() => {
    promotionActions.getAll(promotionGetAllRequestParams)
      .then((res: IPromotionSchema[]) => {
        setPromotionData(res.filter((item) => item.title != "None"))
      })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, ((300)));
  }, [])

  const renderedPromotionList = useMemo<JSX.Element[]>(() => (
    promotionData.map((item) => (
      <PromotionCard
        key={ item.id } 
        promotion={ item }/>
    ))
  ), [promotionData])

  return (
    <S.StyledContainer>
      <Header/>

      {isloading
      ? (
      <S.StyledContentWrapper style={{ height: isloading ? "80vh" : "auto" }}>
        <Loading size={12}/>
      </S.StyledContentWrapper>)
      : (
      <S.StyledContentWrapper>
        <S.StyledHeadWrapper>
          <S.StyledTitle>Ưu đãi hấp dẫn</S.StyledTitle>
          <S.StyledUserInfoWrapper>
            <S.StyledNameInfo>{ user?.full_name }, &nbsp;</S.StyledNameInfo>
            <S.StyledUserHint>đây là những ưu đãi của bạn</S.StyledUserHint>
            <S.StyledLinkHint>Chính sách ưu đãi</S.StyledLinkHint>
          </S.StyledUserInfoWrapper>
          <S.StyledProHint>Nhấp vào ưu đãi bất kỳ để sao chép mã</S.StyledProHint>
        </S.StyledHeadWrapper>

        <S.StyledPromotionListWrapper>
          { renderedPromotionList }
        </S.StyledPromotionListWrapper>
      </S.StyledContentWrapper>)}

    </S.StyledContainer>
  )
}