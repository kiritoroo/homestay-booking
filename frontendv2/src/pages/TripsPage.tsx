import React, { useEffect, useState, useLayoutEffect, useMemo, useCallback } from "react";
import * as S from "@style/page/TripsPage.styled";
import { Header } from "@comp/Header";
import { Loading } from "@comp/Loading";
import { useRecoilValue } from "recoil";
import { authSelector } from "@store/user/user.selectors";
import { IBookingGetAllRequestParam, IBookingGetAllResponse } from "@store/booking/booking.schema";
import { StyledLineHoz } from "@style/page/BookingPage.styled";
import { useNavigate } from "react-router-dom";
import { useBookingActions } from "@store/booking/booking.actions";
import { Tripcard } from "@comp/Card/TripCard";

export default function TripsPage() {
  const { user } = useRecoilValue(authSelector);
  const [isloading, setIsLoading] = useState<boolean>(true);
  const [tripsData, setTripsData] = useState<IBookingGetAllResponse>({list_booking: []});

  const bookingActions = useBookingActions();
  const navigate = useNavigate();

  const bookingGetAllRequestParams = useMemo<IBookingGetAllRequestParam> (() => ({
    page_id: 1,
    page_size: 5
  }), [])

  const handleNothingButtonClick = useCallback(() => {
    navigate('/')
  }, [])

  const renderedTripsList = useMemo<JSX.Element[]>(() => (
    tripsData.list_booking.map((item) => (
      <Tripcard 
        key={ item.booking.booking_id }
        booking={ item }/>
    ))
  ), [tripsData])

  useEffect(() => {
    const username = user?.username!;
    bookingActions.getAll(username, bookingGetAllRequestParams)
      .then((res: IBookingGetAllResponse) => {
        if (res.list_booking != null) {
          res.list_booking.sort((a, b) => new Date(b.booking.checkin_date).getTime() - new Date(a.booking.checkin_date).getTime())
          setTripsData(res);
        }
      })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, ((300)));
  }, [])

  return (
    <S.StyledContainer>
      <Header/>

      {isloading
      ? (
      <S.StyledContentWrapper style={{ height: isloading ? "80vh" : "auto" }}>
        <Loading size={12}/>
      </S.StyledContentWrapper>)
      : (
      <S.StyledContentWrapper>
        <S.StyledHeader>Chuyến đi</S.StyledHeader>
        <S.StyledHeaderHint>Xem và quản lý các chuyến đi của bạn.</S.StyledHeaderHint>

        {tripsData.list_booking.length < 1 &&
        <S.StyledNothingWrapper>
          <StyledLineHoz/>
          <S.StyledNothingHintTitle>Chưa có chuyến đi nào được đặt... vẫn chưa!</S.StyledNothingHintTitle>
          <S.StyledNothingDesc>Đã đến lúc phủi bụi hành lý và bắt đầu chuẩn bị cho chuyến phiêu lưu tiếp theo của bạn rồi</S.StyledNothingDesc>
          <S.StyledNothingButton onClick={handleNothingButtonClick }>Bắt đầu tìm kiếm</S.StyledNothingButton>
          <StyledLineHoz/>
        </S.StyledNothingWrapper>}
{/* 
        {tripsData.list_booking.length > 0 &&
          <StyledLineHoz/>
        } */}

        <S.StyledTripsListWrapper>
          { renderedTripsList }
        </S.StyledTripsListWrapper>
      </S.StyledContentWrapper>)}

    </S.StyledContainer>
  )
}