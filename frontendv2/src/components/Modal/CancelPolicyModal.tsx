import React, { useCallback, useRef, useState, ChangeEvent, useEffect, useMemo } from 'react';
import * as S from "@style/comp/Modal/CancelPolicyModal.styled";
import { useRecoilState } from 'recoil';
import { isShowCancelPolicyModalAtom } from '@store/app.atoms';
import { IBookingCreateResponse } from '@store/booking/booking.schema';
import { Loading } from '@comp/Loading';

interface Props {
  booking: IBookingCreateResponse;
  onCancel: () => void
}

export const CancelPolicyModal = (props: Props) => {
  const { booking, onCancel } = props;
  const [isShowCancelPolicyModal, setIsShowCancelPolicyModal] = useRecoilState(isShowCancelPolicyModalAtom);
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const checkInputRef = useRef<HTMLInputElement>(null);
  const [isPolicyChecked, setIsPolicyChecked] = useState(true);
  const [isPending, setIsPending] = useState(false);

  const handleContainerMouseClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (containerRef.current && modalRef.current) {
      if (!modalRef.current.contains(event.target as Node)) {
        setIsShowCancelPolicyModal(false)
      }
    }
  }, [containerRef.current, modalRef.current])

  const handleCheckedChange = useCallback(() => {
    setIsPolicyChecked(true)
  }, [])

  const handleCancelButtonMouseClick = useCallback(() => {
    if (checkInputRef.current) {
      if (!checkInputRef.current.checked) {
        checkInputRef.current.focus();
        setIsPolicyChecked(false);
      } else {
        setIsPending(true);
        onCancel();
        setTimeout(() => {
          window.location.reload();
        }, 300);
      }
    }
  }, [checkInputRef.current])

  const handleCloseButtonMouseClick = useCallback(() => {
    setIsShowCancelPolicyModal(false);
  }, [])

  return (
    <S.StyledContainer
      onClick={ handleContainerMouseClick }
      ref={ containerRef }>
      <S.StyledModalWrapper
        ref={ modalRef }>
        <S.StyledHeaderTitle>Chính sách hủy bỏ</S.StyledHeaderTitle>
        <S.StyledHeaderHint>
          Hủy bỏ chuyến đi sẽ &nbsp;
          <S.StyledBold>không mất phí đền bù trước ngày {new Date(booking.booking.checkin_date).getDate()+2} thg {new Date(booking.booking.checkin_date).getMonth()+1}</S.StyledBold>
          . &nbsp; <S.StyledLink>Tìm hiểu thêm</S.StyledLink>
        </S.StyledHeaderHint>

        <S.StyledLineHoz/>
        <S.StyledCheckHint>{ !isPolicyChecked && "Vui lòng đồng ý với các điều khoản!" }</S.StyledCheckHint>
        <S.StyledPolicyAcceptWrapper>
          <S.StyledCheckMark ref={checkInputRef} type='checkbox' onChange={ handleCheckedChange }/>
          <S.StyledPolicyAcceptDesc>Tôi hiểu rằng bất kỳ vi phạm nào đối với chính sách này đều có thể dẫn đến việc xóa tài khoản của tôi và/hoặc hành động pháp lý.</S.StyledPolicyAcceptDesc>
        </S.StyledPolicyAcceptWrapper>
        <S.StyledLineHoz/>

        <S.StyledBottomHint>Bằng việc chọn nút bên dưới, tôi đồng ý với các Chính sách, Nội quy của Chủ nhà, Quy chuẩn chung đối với khách.</S.StyledBottomHint>
        <S.StyledControlWrapper>
          { isPending 
            ? (
            <S.StyledLoadingWrapper>
              <Loading size={8}/>
            </S.StyledLoadingWrapper>)
            : (
            <S.StyledButtonCancel onClick={ handleCancelButtonMouseClick }>Đồng ý hủy</S.StyledButtonCancel>)
          }
          <S.StyledButtonClose onClick={ handleCloseButtonMouseClick }>Đóng</S.StyledButtonClose>
        </S.StyledControlWrapper>
      </S.StyledModalWrapper>
    </S.StyledContainer>
  )
}