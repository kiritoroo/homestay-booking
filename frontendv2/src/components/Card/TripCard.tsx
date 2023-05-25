import React, { useCallback, useLayoutEffect, useMemo, useState, useEffect, ChangeEvent } from "react";
import * as S from "@style/comp/Card/TripCard.styled";
import { IBookingCreateResponse } from "@store/booking/booking.schema";
import * as formatUtils from "@util/FormatUtils";
import { useRecoilState, useRecoilValue } from "recoil";
import { authSelector } from "@store/user/user.selectors";
import { useBookingActions } from "@store/booking/booking.actions";
import { useNavigate } from "react-router-dom";
import { isShowCancelPolicyModalAtom, isShowTripDetailModalAtom, selectedBookingIdAtom } from "@store/app.atoms";
import { CancelPolicyModal } from "@comp/Modal/CancelPolicyModal";
import { TripDetailModal } from "@comp/Modal/TripDetailModal";

interface Props {
  booking: IBookingCreateResponse
}

export const Tripcard = (props: Props) => {
  const { booking } = props;
  const { user } = useRecoilValue(authSelector);
  const [isShowCancelPolicyModal, setIsShowCancelPolicyModal] = useRecoilState(isShowCancelPolicyModalAtom);
  const [isShowTripDetailModal, setIsShowTripDetailModal] = useRecoilState(isShowTripDetailModalAtom);
  const [selectedBookingId, setSelectedBokkingId] = useRecoilState(selectedBookingIdAtom);

  const bookingActions = useBookingActions();
  const navigate = useNavigate();

  const handleCancleBooking = useCallback(() => {
    const username = user?.username!;
    const homestayId = booking.homestay_booking.id.toString();
    const bookingId = booking.booking.booking_id;
    bookingActions.abort(username, homestayId, bookingId)
      .then((res) => {})
  }, [booking])

  const handleViewDetailMouseClick = useCallback(() => {
    setSelectedBokkingId(booking.booking.booking_id);
    setIsShowTripDetailModal(true);
  }, [])

  const handleCancleButtonMouseClick = useCallback(() => {
    setSelectedBokkingId(booking.booking.booking_id);
    setIsShowCancelPolicyModal(true);
  }, [])

  const handleReBooking = useCallback(() => {
    navigate(`/homestay/${booking.homestay_booking.id}`);
  }, [booking])

  useEffect(() => {
    setIsShowCancelPolicyModal(false);
    setSelectedBokkingId(null);
  }, [])

  return (
    <S.StyledContainer>
      <S.StyledImage onClick={ handleViewDetailMouseClick } src={ booking.homestay_booking.main_image }/>
      <S.StyledBooInfoWrapper onClick={ handleViewDetailMouseClick } >
        <S.StyledBookInfoTitle onClick={ handleViewDetailMouseClick }>Mã đặt phòng/đặt chỗ: &nbsp; </S.StyledBookInfoTitle>
        <S.StyledBookInfoValue>{ booking.booking.booking_id }</S.StyledBookInfoValue>
      </S.StyledBooInfoWrapper>
      <S.StyledBooInfoWrapper onClick={ handleViewDetailMouseClick }>
        <S.StyledBookInfoTitle>Trạng thái thanh toán: &nbsp; </S.StyledBookInfoTitle>
        { booking.payment.status == "unpaid"
          ? <S.StyledBookInfoValue style={{ color: "#7D97B8" }}> Chưa thanh toán </S.StyledBookInfoValue>
          : booking.payment.status == "invalidated"
          ? <S.StyledBookInfoValue style={{ color: "#C13515" }}> Hủy thanh toán </S.StyledBookInfoValue>
          : <S.StyledBookInfoValue style={{ color: "#3DC373" }}> Đã thanh toán </S.StyledBookInfoValue>
        }
      </S.StyledBooInfoWrapper>
      <S.StyledBooInfoWrapper onClick={ handleViewDetailMouseClick } >
        <S.StyledBookInfoTitle>Trạng thái chuyến đi: &nbsp; </S.StyledBookInfoTitle>
        { booking.booking.status == "validated"
          ? <S.StyledBookInfoValue style={{ color: "#7D97B8" }}>Chưa nhận phòng </S.StyledBookInfoValue>
          : booking.booking.status == "cancel"
          ? <S.StyledBookInfoValue style={{ color: "#C13515" }}> Đã hủy bỏ </S.StyledBookInfoValue>
          : <S.StyledBookInfoValue style={{ color: "#3DC373" }}> Đã nhận phòng </S.StyledBookInfoValue>
        }
      </S.StyledBooInfoWrapper>
      <S.StyledLineHoz/>

      <S.StyledDateInfoWrapper onClick={ handleViewDetailMouseClick } >
        <S.StyledDateCheckInWrapper>
          <S.StyledDateInfoTitle>Ngày nhận phòng</S.StyledDateInfoTitle>
          <S.StyledDateInfoValue>{booking.booking.status != "cancel" ? formatUtils.formatDateString(new Date(booking.booking.checkin_date)) : "___" }</S.StyledDateInfoValue>
        </S.StyledDateCheckInWrapper>
        <S.StyledDateInfoLineVez/>
        <S.StyledDateCheckOutWrapper>
          <S.StyledDateInfoTitle>Ngày trả phòng</S.StyledDateInfoTitle>
          <S.StyledDateInfoValue>{booking.booking.status != "cancel" ? formatUtils.formatDateString(new Date(booking.booking.checkout_date)) : "___" }</S.StyledDateInfoValue>
        </S.StyledDateCheckOutWrapper>
      </S.StyledDateInfoWrapper>
      { booking.booking.status == "validated"
        ? <S.StyledButtonAbort onClick={ handleCancleButtonMouseClick }>Hủy chuyến đi</S.StyledButtonAbort>
        : <S.StyledButtonReBook onClick={ handleReBooking }>Đặt lại chuyến đi</S.StyledButtonReBook>
      }

      {isShowCancelPolicyModal && selectedBookingId == booking.booking.booking_id && <CancelPolicyModal onCancel={ handleCancleBooking } booking={ booking }/>}
      {isShowTripDetailModal && selectedBookingId == booking.booking.booking_id && <TripDetailModal booking={ booking }/>}
    </S.StyledContainer>
  )
}