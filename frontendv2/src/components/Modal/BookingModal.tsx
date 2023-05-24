import React, { useCallback, useEffect } from "react";
import * as S from "@style/comp/Modal/BookingModal.styled";
import { BiDollar } from "react-icons/bi";
import { IHomestaySchema } from "@store/homestay/homestay.schema";
import { BsStarFill } from "react-icons/bs";
import { MdExpandLess, MdExpandMore, MdFlag } from "react-icons/md";
import { SlDiamond } from "react-icons/sl";
import { CalendarPopup } from "../Popup/CalendarPopup";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { endDatePickedAtom, guestPickedAtom, homestayPickedAtom, isShowCalendarPopupAtom, isShowGuestPickPopupAtom, isShowLoginModalAtom, startDatePickedAtom } from "@store/app.atoms";
import * as formatUtils from "@util/FormatUtils";
import { dateRangePickedSelector } from "@store/app.selectors";
import { GuestPickPopup } from "@comp/Popup/GuestPickPopup";
import { authSelector } from "@store/user/user.selectors";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

interface Props {
  price: number;
  rating: number;
  feedbackCount: number;
  maxGuest: number;
  homestay: IHomestaySchema | null;
}

export const BookingModal = (props: Props) => {
  const { price, rating, feedbackCount, maxGuest, homestay } = props;
  const [isShowCalendarPopup, setIsShowCalendarPopup] = useRecoilState(isShowCalendarPopupAtom);
  const [isShowGuestpickPopup, setIsShowGuestpickPopup] = useRecoilState(isShowGuestPickPopupAtom);
  const setIsShowLoginModal = useSetRecoilState(isShowLoginModalAtom);

  const { user } = useRecoilValue(authSelector);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const startDatePicked = useRecoilValue(startDatePickedAtom);
  const endDatePicked = useRecoilValue(endDatePickedAtom);
  const dateRangePicked = useRecoilValue(dateRangePickedSelector);
  const [guestPicked, setGuestPicked] = useRecoilState(guestPickedAtom);
  const setHomestayPicked = useSetRecoilState(homestayPickedAtom);

  const handleDateInfoMouseClick = useCallback(() => {
    setIsShowCalendarPopup(true);
  }, [])

  const handleGuestInfoMouseClick = useCallback(() => {
    setIsShowGuestpickPopup((prev) => !prev);
  }, [])

  const handleBookingButtonMouseClick = useCallback(() => {
    if (!endDatePicked || !startDatePicked) {
      setIsShowCalendarPopup(true);
      return
    }
    if (!user) {
      setIsShowLoginModal(true);
      return
    }

    setHomestayPicked(homestay);
    navigate({
      pathname: "/booking",
      search: createSearchParams({
        homestayId: homestay?.id.toString() ?? "",
        checkIn: dateRangePicked.formatStrikeStartDate?.toString() ?? "",
        checkOut: dateRangePicked.formatStrikeEndDate?.toString() ?? "",
        numberOfGuests: guestPicked.toString(),
        feedbackCount: feedbackCount.toString(),
      }).toString()
    });
  }, [endDatePicked, startDatePicked])

  useEffect(() => {
    if ([...searchParams].length != 0) {
      const paramNumberOfGuest = searchParams.get("numberOfGuests");

      if (paramNumberOfGuest != null) {
        setGuestPicked(Number(paramNumberOfGuest));
        setSearchParams((prev) => 
          Object.fromEntries([...searchParams, ["numberOfGuests", paramNumberOfGuest]])
        )
      } else {
        setSearchParams((prev) => 
          Object.fromEntries([...searchParams, ["numberOfGuests", guestPicked]])
        )
      }
    }
  }, [searchParams])

  return (
    <S.StyledContainer>
      <S.StyledBookingContainer>
        <S.StyledHomestayInfoWrapper>
          <S.StyledPriceWrapper>
            <BiDollar size={"18px"} color="#252525"/>
            <S.StyledPrice>{ price}</S.StyledPrice> &nbsp;/ đêm
          </S.StyledPriceWrapper>

          <S.StyledHomestayInfoFlexHoz>
            <S.StyledRatingWrapper>
              <BsStarFill size="12px" color="#7D97B8"/> 
              <S.StyledRating>{ rating }</S.StyledRating>
            </S.StyledRatingWrapper>
            <S.StyledFeedBackCountWrapper>
              ·
              <S.StyledFeedbackCount>{feedbackCount} đánh giá</S.StyledFeedbackCount>
            </S.StyledFeedBackCountWrapper>
          </S.StyledHomestayInfoFlexHoz>
        </S.StyledHomestayInfoWrapper>

        <S.StyledDateInfoWrapper id="calendar-popup1" onClick={ handleDateInfoMouseClick }>
          <S.StyledDateCheckInWrapper>
            <S.StyledDateLabel>NHẬN PHÒNG</S.StyledDateLabel>
            <S.StyledDateValue>{ startDatePicked ? dateRangePicked.formatSliceStartDate : "Thêm ngày" }</S.StyledDateValue>          
          </S.StyledDateCheckInWrapper>
          <S.StyledDateCheckOutWrapper>
            <S.StyledDateLabel>TRẢ PHÒNG</S.StyledDateLabel>
            <S.StyledDateValue>{ endDatePicked ? dateRangePicked.formatSliceEndDate : "Thêm ngày" }</S.StyledDateValue>
          </S.StyledDateCheckOutWrapper>
        </S.StyledDateInfoWrapper>
        <S.StyledLine/>
        <S.StyledGuestInfoWrapper id="guestpick-popup" onClick={ handleGuestInfoMouseClick }>
          <S.StyledGuestLabel>KHÁCH</S.StyledGuestLabel>
          <S.StyledGuestValue>{guestPicked } khách</S.StyledGuestValue>
          <S.StyledGuestInfoExpandIconWrapper>
            { isShowGuestpickPopup ? <MdExpandLess size="25px"/> : <MdExpandMore size="25px"/> }
          </S.StyledGuestInfoExpandIconWrapper>
        </S.StyledGuestInfoWrapper>

        <S.StykedButtonBooking id="calendar-popup2" onClick={ handleBookingButtonMouseClick }>
          { endDatePicked ? "Đặt phòng" : "Kiểm tra tình trạng còn phòng" }
        </S.StykedButtonBooking>

        { isShowCalendarPopup && <CalendarPopup/> }
        { isShowGuestpickPopup && <GuestPickPopup maxGuest={ maxGuest }/> }
      </S.StyledBookingContainer>

      <S.StyledHintContainer>
        <S.StyledHint>
          <S.StyledHintBold>Nơi này rất hiếm khi còn chỗ. &nbsp;</S.StyledHintBold>
          Chố ở này thường kín phòng, nhanh tay đặt ngay nào.
        </S.StyledHint>
        <S.StyledHintIconWrapper>
          <SlDiamond size="35px"/>
        </S.StyledHintIconWrapper>
      </S.StyledHintContainer>

      <S.StyledReportWrapper>
        <S.StyledReportIconWrapper>
          <MdFlag size="20px"/>
        </S.StyledReportIconWrapper>
        <S.StyledReport>Báo cáo nhà/phòng cho thuê này</S.StyledReport>
      </S.StyledReportWrapper>
    </S.StyledContainer>
  )
}