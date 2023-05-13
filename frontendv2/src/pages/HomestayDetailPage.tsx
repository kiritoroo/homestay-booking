import React, { useLayoutEffect, useMemo, useState } from "react";
import * as S from '@style/page/HomestayDetailPage.styled';
import { Header } from "@comp/Header";
import { useRecoilValue } from "recoil";
import { selectedHomestayAtom, selectedHomestayFeedbackAtom } from "@store/homestay/homestay.atoms";
import { useHomestayActions } from "@store/homestay/homestay.actions";
import { useParams } from "react-router-dom";
import { IHomestayGetFeedbackParams } from "@store/homestay/homestay.schema";
import { FeedbackCard } from "@comp/FeedbackCard";
import { BsStarFill } from "react-icons/bs";

export default function HomestayDetailPage() {
  const { id: homestayId } = useParams();

  const homestayGetFeedbackParams = useMemo<IHomestayGetFeedbackParams> (() => ({
    page_id: 1,
    page_size: 10
  }), [])

  const homestayActions = useHomestayActions();
  const homestay = useRecoilValue(selectedHomestayAtom);
  const feedback = useRecoilValue(selectedHomestayFeedbackAtom);

  const images = useMemo<string[]>(() => homestay ? [
    homestay.main_image,
    homestay.first_image,
    homestay.second_image,
    homestay.third_image
  ]: [], [homestay]);

  const feedbackCriteriaList = useMemo<{title: string, value: string}[]>(() => [
    { title: "Mức độ sạch sẽ", value: "5,0"  },
    { title: "Độ chính xác", value: "5,0"  },
    { title: "Giá trị", value: "5,0"  }
  ], [])

  useLayoutEffect(() => {
    homestayActions.get(homestayId!);
    homestayActions.getFeedback(homestayId!, homestayGetFeedbackParams);
  }, [])

  return (
    <S.StyledContainer>
      <Header/>

      <S.StyledContentWrapper>
        <S.StyledImageListWrapper>
          <S.StyledMainImage src={images[0]}/>
          <S.StyledImageGrid>
            {images.reverse().map((url, index) => (
              <S.StyledImage key={index} src={url}/>
            ))}
          </S.StyledImageGrid>
        </S.StyledImageListWrapper>
          
      <S.StyledFeedbackContentWrapper>
        <S.StyledLine/>
        <S.StyledFeedbackSumaryWrapper>
          <S.StyledFeedbackTitle>
            <BsStarFill color="#7D97B8" style={{ marginRight: 10 }}/> 5,0 · {feedback.length} đánh giá
          </S.StyledFeedbackTitle>

          <S.StyledFeebackListWrapper>
            {feedbackCriteriaList.map((item) => (
              <S.StyledFeedbackCriteriaWrapper>
                <S.StyledFeedbackCriteriaTitle>{ item.title }</S.StyledFeedbackCriteriaTitle>
                <S.StyledFeedbackCriteriaRatingWrapper>
                  <S.StyledFeedbackCriteriaRatingProgress/>
                  <S.StyledFeebackCriteriaRatingValue>{ item.value }</S.StyledFeebackCriteriaRatingValue>
                </S.StyledFeedbackCriteriaRatingWrapper>
              </S.StyledFeedbackCriteriaWrapper> ))}
          </S.StyledFeebackListWrapper>
        </S.StyledFeedbackSumaryWrapper>

        <S.StyledFeedbackListWrapper>
          { feedback.map((item) => (
            <FeedbackCard
              key={ item.id }
              feedback={ item }/> ))}
        </S.StyledFeedbackListWrapper>
      </S.StyledFeedbackContentWrapper>

      </S.StyledContentWrapper>
    </S.StyledContainer>
  )
}