import React from "react";
import * as S from "@style/comp/BookingModal.styled";
import { BiDollar } from "react-icons/bi";
import { IHomestaySchema } from "@store/homestay/homestay.schema";
import { BsStarFill } from "react-icons/bs";
import { MdExpandMore, MdFlag } from "react-icons/md";
import { SlDiamond } from "react-icons/sl";

interface Props {
  price: number;
  rating: number;
  feedbackCount: number;
}

export const BookingModal = (props: Props) => {
  const { price, rating, feedbackCount } = props;

  return (
    <S.StyledContainer>
      <S.StyledBookingContainer>
        <S.StyledHomestayInfoWrapper>
          <S.StyledPriceWrapper>
            <BiDollar size={"18px"} color="#252525"/>
            <S.StyledPrice>{ price}</S.StyledPrice> &nbsp;/ đêm
          </S.StyledPriceWrapper>

          <S.StyledRatingWrapper>
            <BsStarFill size="12px" color="#7D97B8"/> 
            <S.StyledRating>{ rating }</S.StyledRating>
          </S.StyledRatingWrapper>
          <S.StyledFeedBackCountWrapper>
            ·
            <S.StyledFeedbackCount>{feedbackCount} đánh giá</S.StyledFeedbackCount>
          </S.StyledFeedBackCountWrapper>
        </S.StyledHomestayInfoWrapper>

        <S.StyledDateInfoWrapper>
          <S.StyledDateCheckInWrapper>
            <S.StyledDateLabel>NHẬN PHÒNG</S.StyledDateLabel>
            <S.StyledDateValue>27/05/2023</S.StyledDateValue>          
          </S.StyledDateCheckInWrapper>
          <S.StyledDateCheckOutWrapper>
            <S.StyledDateLabel>TRẢ PHÒNG</S.StyledDateLabel>
            <S.StyledDateValue>01/06/2023</S.StyledDateValue>
          </S.StyledDateCheckOutWrapper>
        </S.StyledDateInfoWrapper>
        <S.StyledLine/>
        <S.StyledGuestInfoWrapper>
          <S.StyledGuestLabel>KHÁCH</S.StyledGuestLabel>
          <S.StyledGuestValue>1 khách</S.StyledGuestValue>
          <S.StyledGuestInfoExpandIconWrapper>
            <MdExpandMore size="25px"/>
          </S.StyledGuestInfoExpandIconWrapper>
        </S.StyledGuestInfoWrapper>

        <S.StykedButtonBooking>
          Đặt phòng
        </S.StykedButtonBooking>
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