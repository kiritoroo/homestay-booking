import React, { useLayoutEffect, useMemo, useState } from "react";
import * as S from '@style/page/HomestayDetailPage.styled';
import { Header } from "@comp/Header";
import { useRecoilValue } from "recoil";
import { useHomestayActions } from "@store/homestay/homestay.actions";
import { useParams } from "react-router-dom";
import { FeedbackCard } from "@comp/FeedbackCard";
import { BsStarFill } from "react-icons/bs";

export default function HomestayDetailPage() {
  const { id: homestayId } = useParams();

  const homestayActions = useHomestayActions();

  const feedbackCriteriaList = useMemo<{title: string, value: string}[]>(() => [
    { title: "Mức độ sạch sẽ", value: "5,0"  },
    { title: "Độ chính xác", value: "5,0"  },
    { title: "Giá trị", value: "5,0"  }
  ], [])

  useLayoutEffect(() => {

  }, [])

  return (
    <S.StyledContainer>
      <Header/>

      <S.StyledContentWrapper>
        <S.StyledImageListWrapper>
          <S.StyledMainImage src={""}/>
          <S.StyledImageGrid>
       
          </S.StyledImageGrid>
        </S.StyledImageListWrapper>
          
      <S.StyledFeedbackContentWrapper>
        <S.StyledLine/>
        <S.StyledFeedbackSumaryWrapper>
          <S.StyledFeedbackTitle>
            <BsStarFill color="#7D97B8" style={{ marginRight: 10 }}/> 5,0 · {1} đánh giá
          </S.StyledFeedbackTitle>

          <S.StyledFeebackListWrapper>
            {feedbackCriteriaList.map((item) => (
              <S.StyledFeedbackCriteriaWrapper key={item.title}>
                <S.StyledFeedbackCriteriaTitle>{ item.title }</S.StyledFeedbackCriteriaTitle>
                <S.StyledFeedbackCriteriaRatingWrapper>
                  <S.StyledFeedbackCriteriaRatingProgress/>
                  <S.StyledFeebackCriteriaRatingValue>{ item.value }</S.StyledFeebackCriteriaRatingValue>
                </S.StyledFeedbackCriteriaRatingWrapper>
              </S.StyledFeedbackCriteriaWrapper> ))}
          </S.StyledFeebackListWrapper>
        </S.StyledFeedbackSumaryWrapper>

        <S.StyledFeedbackListWrapper>
    
        </S.StyledFeedbackListWrapper>
      </S.StyledFeedbackContentWrapper>

      </S.StyledContentWrapper>
    </S.StyledContainer>
  )
}