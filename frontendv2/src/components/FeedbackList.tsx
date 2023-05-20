import React, { useLayoutEffect, useMemo, useState } from "react";
import * as S from '@style/comp/FeedbackList.styled';
import { IUserSchema } from "@store/user/user.schema";
import { IFeedBackSchema } from "@store/feedback/feedback.schema";
import { BsStarFill } from "react-icons/bs";
import { FeedbackCard } from "./FeedbackCard";

interface Props {
  feedbacksData: [{
    commentor: IUserSchema,
    feedback: IFeedBackSchema
  }] | []
}

export const FeedbackList = (props: Props) => {
  const { feedbacksData } = props;

  const feedbackCriteriaList = useMemo<{title: string, value: string}[]>(() => [
    { title: "Mức độ sạch sẽ", value: "5,0"  },
    { title: "Độ chính xác", value: "5,0"  },
    { title: "Giá trị", value: "5,0"  }
  ], [])

  return (
    <S.StyledContainer>
      <S.StyledLine/>
      <S.StyledFeedbackSumaryWrapper>
        <S.StyledFeedbackTitle>
          <BsStarFill color="#7D97B8" style={{ marginRight: 10 }}/> 5,0 · {feedbacksData.length} đánh giá
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
        { feedbacksData.map((item) => (
          <FeedbackCard
            key={item.feedback.id}
            feedback={item.feedback}
            commentor={item.commentor}/>
        )) }
      </S.StyledFeedbackListWrapper>
    </S.StyledContainer>
  )
}