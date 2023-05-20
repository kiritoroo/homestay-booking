import { IFeedBackSchema } from '@store/feedback/feedback.schema';
import React, { useCallback, useState } from 'react';
import * as S from '@style/comp/FeedbackCard.styled';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { IUserSchema } from '@store/user/user.schema';

interface Props {
  feedback: IFeedBackSchema;
  commentor: IUserSchema;
}

export const FeedbackCard = (props: Props) => {
  const { feedback, commentor} = props;

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
          { commentor.full_name.charAt(0).toLocaleUpperCase() }
        </S.StyledAvatar> 
        <S.StyledUserInfoWrapper>
          <S.StyledUserName>{ commentor.full_name }</S.StyledUserName>
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