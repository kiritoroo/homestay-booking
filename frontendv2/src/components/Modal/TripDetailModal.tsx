import React, { useCallback, useRef, useState, ChangeEvent, useEffect, useMemo } from 'react';
import * as S from "@style/comp/Modal/TripDetailModal.styled";
import * as M from "@motion/TripDetailModal.motion";
import { isShowTripDetailModalAtom } from '@store/app.atoms';
import { useRecoilState } from 'recoil';
import { IBookingCreateResponse } from '@store/booking/booking.schema';
import * as formatUtils from "@util/FormatUtils";
import { MdOutlineClose } from 'react-icons/md';

interface Props {
  booking: IBookingCreateResponse;
}

export const TripDetailModal = (props: Props) => {
  const { booking } = props;
  const [isShowTripDetailModal, setIsShowTripDetailModal] = useRecoilState(isShowTripDetailModalAtom);
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const cityName = useMemo<string>(() => {
    const startIndex = booking.homestay_booking.address.toLocaleLowerCase().indexOf('thành phố') + 'thành phố'.length;
    return 'Thành phố ' + booking.homestay_booking.address.substring(startIndex).trim();
  }, [booking.homestay_booking])
  const bookingDateStr = useMemo<string>(() => {
    return formatUtils.formatDateString(new Date(booking.booking.booking_date)).toString();
  }, [booking.booking])
  const checkInDayOfWeek = useMemo<string>(() => {
    return booking.booking.status != "cancel" ? formatUtils.dayOfWeek(new Date(booking.booking.checkin_date)) : "__";
  }, [booking.booking])
  const checkInDateStr = useMemo<string>(() => {
    return booking.booking.status != "cancel" ? formatUtils.formatDateString(new Date(booking.booking.checkin_date)) : "___ __ ___"
  }, [booking.booking])
  const checkOutDayOfWeek = useMemo<string>(() => {
    return  booking.booking.status != "cancel" ? formatUtils.dayOfWeek(new Date(booking.booking.checkout_date)) : "__";
  }, [booking.booking])
  const checkOutDateStr = useMemo<string>(() => {
    return booking.booking.status != "cancel" ? formatUtils.formatDateString(new Date(booking.booking.checkout_date)) : "___ __ ___"
  }, [booking.booking])
  const dateCount = useMemo<number | string>(() => {
    return booking.booking.status != "cancel" ? Math.round((new Date(booking.booking.checkout_date).getTime()- new Date(booking.booking.checkin_date).getTime()) / (24 * 60 * 60 * 1000))-1 : "_";
  }, [booking.booking])

  const handleContainerMouseClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (containerRef.current && modalRef.current) {
      if (!modalRef.current.contains(event.target as Node)) {
        setIsShowTripDetailModal(false)
      }
    }
  }, [containerRef.current, modalRef.current])

  const handleCloseButtonMouseClick = useCallback(() => {
    setIsShowTripDetailModal(false);
  }, [])

  return (
    <S.StyledContainer
      onClick={ handleContainerMouseClick }
      ref={ containerRef }>
      <M.MotionModalWrapper
        ref={ modalRef }
        isShow={ isShowTripDetailModal }>
        <S.StyledModalTopWrapper>
          <S.StyledIconCloseWrapper
            onClick={ handleCloseButtonMouseClick }>
            <MdOutlineClose size={"25px"}/>
          </S.StyledIconCloseWrapper>
        </S.StyledModalTopWrapper>

        <S.StyledHeader>Chi tiết chuyến đi</S.StyledHeader>
        <S.StyledBookingIdWrapper>
          <S.StyledBookingIdLabel>Mã đặt phòng/đặt chỗ</S.StyledBookingIdLabel>
          <S.StyledBookingIdvalue>{ booking.booking.booking_id }</S.StyledBookingIdvalue>
        </S.StyledBookingIdWrapper>
        <S.StyledBookingCityWrapper>
          <S.StyledBookingCityLabel>Nơi bạn đến là</S.StyledBookingCityLabel>
          <S.StyledBookingCityvalue>{cityName}</S.StyledBookingCityvalue>
        </S.StyledBookingCityWrapper>
        <S.StyledLineHoz/>
        <S.StyledInfoWrapper>
          <S.StyledHomestayInfo>
            <S.StyledImage src={ booking.homestay_booking.main_image } />
            <S.StyledHomestayAddress>{ booking.homestay_booking.address }</S.StyledHomestayAddress>
          </S.StyledHomestayInfo>
          <S.StyledBookingInfo>
            <S.StyledDateBookWrapper>
              <S.StyledDateBookLabel>Ngày đặt phòng/đặt chỗ</S.StyledDateBookLabel>
              <S.StyledDateBookValue>{ bookingDateStr }</S.StyledDateBookValue>
            </S.StyledDateBookWrapper>
            <S.StyledDateInfoWrapper>
              <S.StyledCheckDateWrapper>
                <S.StyledCheckLabel>NHẬN PHÒNG</S.StyledCheckLabel>
                <S.StyledCheckValue>{ checkInDayOfWeek }</S.StyledCheckValue>
                <S.StyledCheckValue>{ checkInDateStr }</S.StyledCheckValue>
              </S.StyledCheckDateWrapper>
              <S.StyledDateLineVez/>
              <S.StyledCheckDateWrapper>
                <S.StyledCheckLabel>TRẢ PHÒNG</S.StyledCheckLabel>
                <S.StyledCheckValue>{ checkOutDayOfWeek }</S.StyledCheckValue>
                <S.StyledCheckValue>{ checkOutDateStr }</S.StyledCheckValue>
              </S.StyledCheckDateWrapper>
            </S.StyledDateInfoWrapper>
            <S.StyledGuestInfoWrapper>
              <S.StyledGuestInfoLabel>Số khách</S.StyledGuestInfoLabel>
              <S.StyledGuestInfoValue>{ booking.booking.number_of_guest }</S.StyledGuestInfoValue>
            </S.StyledGuestInfoWrapper>
            <S.StyledLineHoz/>
            <S.StyledGuestInfoWrapper>
              <S.StyledGuestInfoLabel>Thời lượng chuyến đi</S.StyledGuestInfoLabel>
              <S.StyledGuestInfoValue>{ dateCount }</S.StyledGuestInfoValue>
            </S.StyledGuestInfoWrapper>
            <S.StyledLineHoz/>

            <S.StyledStatusWrapper>
              <S.StyledStatusLabel>Trạng thái chuyến đi: &nbsp;</S.StyledStatusLabel>
              { booking.booking.status == "validated"
                ? <S.StyledStatusValue style={{ color: "#7D97B8" }}> Chưa nhận phòng </S.StyledStatusValue>
                : booking.booking.status == "cancel"
                ? <S.StyledStatusValue style={{ color: "#C13515" }}> Đã hủy bỏ </S.StyledStatusValue>
                : <S.StyledStatusValue style={{ color: "#3DC373" }}> Đã nhận phòng </S.StyledStatusValue>
              } 
            </S.StyledStatusWrapper>

            <S.StyledStatusWrapper>
              <S.StyledStatusLabel>Trạng thái thanh toán: &nbsp;</S.StyledStatusLabel>
              { booking.payment.status == "unpaid"
                ? <S.StyledStatusValue style={{ color: "#7D97B8" }}> Chưa thanh toán </S.StyledStatusValue>
                : booking.payment.status == "invalidated"
                ? <S.StyledStatusValue style={{ color: "#C13515" }}> Hủy thanh toán </S.StyledStatusValue>
                : <S.StyledStatusValue style={{ color: "#3DC373" }}> Đã thanh toán </S.StyledStatusValue>
              } 
            </S.StyledStatusWrapper>
          </S.StyledBookingInfo>
        </S.StyledInfoWrapper>
      </M.MotionModalWrapper>
    </S.StyledContainer>
  )
}