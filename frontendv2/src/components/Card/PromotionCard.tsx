import React, { useCallback, useEffect, useMemo, useState } from "react";
import * as S from "@style/comp/Card/PromotionCard.styled";
import  { BiGift } from "react-icons/bi";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IPromotionSchema } from "@store/promotion/promotion.schema";
import { MdDiscount } from "react-icons/md";
import { useRecoilState, useSetRecoilState } from "recoil";
import { promotionCopyAtom } from "@store/app.atoms";
import { Loading } from "@comp/Loading";

interface Props {
  promotion: IPromotionSchema;
}

export const PromotionCard = (props: Props) => {
  const { promotion } = props;
  const [promotionPicked, setPromotionPicked] = useRecoilState(promotionCopyAtom);
  const [isCopied, setIsCopied] = useState(false);
  const [isPickLoading, setIsPickLoading] = useState(false);

  const MAX_DESC_LENGTH = 150;
  const startDate = new Date(promotion.start_date);
  const endDate = new Date(promotion.end_date);
  const dayLeft = useMemo<number>(() => {
    return Math.round((endDate.getTime()-startDate.getTime()) / (24 * 60 * 60 * 1000))-1;
  }, [])

  const handleOnCopyClippboard = useCallback((value: string) => {
    setIsPickLoading(true);
    setPromotionPicked(value);
    setTimeout(() => {
      setIsPickLoading(false);
    }, (300));
  }, [])

  useEffect(() => {
    setIsCopied(promotionPicked == promotion.title);
  }, [promotionPicked])

  return (
    <CopyToClipboard text={ promotion.title } onCopy={(v) => handleOnCopyClippboard(v)}>
      <S.StyledContainer>
        <S.StyledFlexHoz>
          <S.StyledFlexLeft>
            <S.StyledProTitle>
              <MdDiscount size="20px" color='#7D97B8' style={{ marginTop: "5px" }}/>
              { promotion.title }
              <S.StyledProExp>(còn { dayLeft } ngày)</S.StyledProExp></S.StyledProTitle>
            <S.StyledProDesc>{ promotion.description.slice(0, promotion.description.lastIndexOf(" ", MAX_DESC_LENGTH))} ...</S.StyledProDesc>
          </S.StyledFlexLeft>
          <S.StyledFlexRight>
            <S.StyledProPercent> <BiGift size={"40px"} color='#7D97B8'/> { promotion.discount_percent }%</S.StyledProPercent>
            <S.StyledCopyHint>
              {isPickLoading && <Loading size={6}/>}
              {isCopied ? "Đã sao chép!" : ""}
            </S.StyledCopyHint>
          </S.StyledFlexRight>
        </S.StyledFlexHoz>
      </S.StyledContainer>
    </CopyToClipboard>
  )
}