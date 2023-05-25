import React, { useCallback, useRef, useState, ChangeEvent, useEffect, useMemo } from 'react';
import * as S from "@style/comp/Modal/BookPolictyModal.styled";
import { useRecoilState } from 'recoil';
import { isShowBookPolictyModalAtom } from '@store/app.atoms';
import { useNavigate } from 'react-router-dom';
import { IBookingCreateResponse } from '@store/booking/booking.schema';
import { FaInfoCircle } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import { RiCloseCircleFill } from 'react-icons/ri';
import { MdOutlineClose } from 'react-icons/md';

interface Props {
  booking: IBookingCreateResponse | null;
  message: string;
}

export const BookPolicyModal = (props: Props) => {
  const { booking, message } = props;
  const [isShowBookPolicyModal, setIsShowBookPolicyModal] = useRecoilState(isShowBookPolictyModalAtom);
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleContainerMouseClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (containerRef.current && modalRef.current) {
      if (!modalRef.current.contains(event.target as Node)) {
        setIsShowBookPolicyModal(false);
        // navigate("/trips");
      }
    }
  }, [containerRef.current, modalRef.current])

  const handleCloseButtonMouseClick = useCallback(() => {
    setIsShowBookPolicyModal(false);
  }, [])

  const handleDoneButtonMouseClick = useCallback(() => {
    message == "bookingSuccess"
    ? navigate("/trips")
    :  message == "userBooked"
    ? navigate("/trips")
    : navigate("/")

    setIsShowBookPolicyModal(false);
  }, [message])

  return (
    <S.StyledContainer
      onClick={ handleContainerMouseClick }
      ref={ containerRef }>
      <S.StyledModalWrapper
        ref={ modalRef }>
        <S.StyledModalTopWrapper>
          <S.StyledIconCloseWrapper
            onClick={ handleCloseButtonMouseClick }>
            <MdOutlineClose size={"25px"}/>
          </S.StyledIconCloseWrapper>
        </S.StyledModalTopWrapper>
          {message == "bookingSuccess"
            ? <React.Fragment>
                <S.StyledModalHeader>Đặt phòng/đặt chỗ thành công!</S.StyledModalHeader>
                <S.StyledModalhint>Đi tới trang chuyến đi để xem lại yêu cầu đặt chỗ của bạn.</S.StyledModalhint>
                <S.StyledIconWrapper><BsCheckCircleFill size={80} color='#3DC373'/></S.StyledIconWrapper>
                <S.StyledDoneButton onClick={ handleDoneButtonMouseClick }>Hoàn thành</S.StyledDoneButton>
              </React.Fragment>
            : message == "userBooked"
            ? <React.Fragment>
                <S.StyledModalHeader>Bạn đã có chuyến đi rồi!</S.StyledModalHeader>
                <S.StyledModalhint>Bạn đã đặt chỗ rồi, bạn có thể hủy yêu cầu cũ để đặt nơi này.</S.StyledModalhint>
                <S.StyledIconWrapper><RiCloseCircleFill size={80} color='#F87876'/></S.StyledIconWrapper>
                <S.StyledDoneButton onClick={ handleDoneButtonMouseClick }>Xem chuyến đi của bạn</S.StyledDoneButton>
              </React.Fragment>
            : <React.Fragment>
                <S.StyledModalHeader>Nơi này đã được đặt chỗ!</S.StyledModalHeader>
                <S.StyledModalhint>Chúng tôi xin lỗi vì sự bất tiện này, bạn có thể xem phòng/địa điểm khác.</S.StyledModalhint>
                <S.StyledIconWrapper><FaInfoCircle size={80} color='#A8B9CF'/></S.StyledIconWrapper>
                <S.StyledDoneButton onClick={ handleDoneButtonMouseClick }>Xem phòng/địa điểm khác</S.StyledDoneButton>
              </React.Fragment>}
      </S.StyledModalWrapper>
    </S.StyledContainer>
  )
}