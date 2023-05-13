import { IHomestayFeedbackSchema } from '@store/homestay/homestay.schema';
import React, { useCallback, useState } from 'react';
import * as S from '@style/comp/FeedbackCard.styled';
import { MdOutlineNavigateNext } from 'react-icons/md';

interface Props {
  feedback: IHomestayFeedbackSchema;
}

export const FeedbackCard = (props: Props) => {
  const { feedback} = props;

  const MAX_COMMENT_LENGTH = 300;
  const comment = feedback.commention;
  const truncatedComment = comment.length > MAX_COMMENT_LENGTH ? `${comment.slice(0, comment.lastIndexOf(" ", MAX_COMMENT_LENGTH))} ...` : comment;
  const [showFullComment, setShowFullComment] = useState(false);

  const dateParts = feedback.created_at.split('T')[0].split('-');
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];
  const formattedDate = `ngày ${day} tháng ${month} năm ${year}`;

  const handleShowmoreClick = useCallback(() => {
    setShowFullComment(true)
  }, [])

  const handleHideClick = useCallback(() => {
    setShowFullComment(false)
  }, [])

  return (
    <S.StyledContainer>
      <S.StyledUserWrapper>
        <S.StyledAvatar>
          { feedback.user_comment.charAt(0).toLocaleUpperCase() }
        </S.StyledAvatar> 
        <S.StyledUserInfoWrapper>
          <S.StyledUserName>{ feedback.user_comment }</S.StyledUserName>
          <S.StyledTime>{ formattedDate }</S.StyledTime>
        </S.StyledUserInfoWrapper>
      </S.StyledUserWrapper>

      { showFullComment ? (
        <S.StyledCommentWrapper>
          <S.StyledComment> { feedback.commention } </S.StyledComment>
          <S.StyledHideWrapper
            onClick={ handleHideClick }>
              <S.StyledHide> Ẩn bớt</S.StyledHide>
              <MdOutlineNavigateNext size={"20px"}/>
          </S.StyledHideWrapper>
        </S.StyledCommentWrapper>
      ) : (
        <S.StyledCommentWrapper>
          <S.StyledComment> { truncatedComment } </S.StyledComment>
          { truncatedComment.length > MAX_COMMENT_LENGTH && (
            <S.StyledShowmoreWrapper
              onClick={ handleShowmoreClick }>
                <S.StyledShowmore> Hiển thị thêm</S.StyledShowmore>
                <MdOutlineNavigateNext size={"20px"}/>
            </S.StyledShowmoreWrapper>) }
        </S.StyledCommentWrapper> ) }
    </S.StyledContainer>
  )
}