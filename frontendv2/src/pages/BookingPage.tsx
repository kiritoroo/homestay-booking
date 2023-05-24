import React, { useCallback, useLayoutEffect, useMemo, useState, useEffect, ChangeEvent } from "react";
import * as S from "@style/page/BookingPage.styled";
import { Loading } from "@comp/Loading";
import { Header } from "@comp/Header";
import { MdArrowBackIosNew, MdDiscount } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import { SlDiamond } from "react-icons/sl";
import { useRecoilState, useRecoilValue } from "recoil";
import { bookingInfoSelector } from "@store/app.selectors";
import { BsStarFill } from "react-icons/bs";
import { MdModeComment, MdKingBed } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { usePromotionActions } from "@store/promotion/promotion.actions";
import { IPromotionSchema } from "@store/promotion/promotion.schema";
import { promotionPickedAtom } from "@store/app.atoms";
import { RiPaypalFill, RiVisaFill } from "react-icons/ri";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MainFooter } from "@comp/MainFooter";

export default function BookingPage() {
  const [isloading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();
  const promotionActions = usePromotionActions();
  const [proInputValue, setProInputvalue] = useState("");
  const [proHint, setProHint] = useState("");

  const [proPicked, setProPicked] = useRecoilState(promotionPickedAtom);
  const bookingInfo = useRecoilValue(bookingInfoSelector);

  const searchParams = new URLSearchParams(location.search)
  const feedbackCount = searchParams.get("feedbackCount")

  const roomPrice = useMemo<number>(() => (
    (bookingInfo.homestayInfo?.price ?? 0)*(bookingInfo.dateInfo.dateCount ?? 0)
  ), [bookingInfo.dateInfo])
  const servicePrice = useMemo<number>(() => (
    15*(bookingInfo.guestCount ?? 0)*(bookingInfo.dateInfo.dateCount ?? 0)
  ), [bookingInfo.dateInfo, bookingInfo.guestCount])
  const taxPrice = useMemo<number>(() => (
    0.1 * (roomPrice + servicePrice)
  ), [roomPrice, servicePrice])
  const totalPrice = useMemo<number>(() => (
    roomPrice + servicePrice + taxPrice
  ), [roomPrice, servicePrice, taxPrice])
  const discoutAmout = useMemo<number>(() => (
    ((proPicked?.discount_percent ?? 0) / 100) * totalPrice
  ), [proPicked, totalPrice])
  const dicountPrice = useMemo<number>(() => (
    totalPrice - discoutAmout
  ), [totalPrice, discoutAmout])

  const datePick = useMemo<string>(() => {
    if (bookingInfo.dateInfo.startDate?.getMonth() == bookingInfo.dateInfo.endDate?.getMonth()) {
      return `Ngày ${bookingInfo.dateInfo.startDate?.getDate()} - Ngày ${bookingInfo.dateInfo.endDate?.getDate()} tháng ${bookingInfo.dateInfo.endDate?.getMonth()??0+1}`
    } else {
      return `Ngày ${bookingInfo.dateInfo.startDate?.getDate()} tháng ${bookingInfo.dateInfo.startDate?.getMonth()??0+1} - Ngày ${bookingInfo.dateInfo.endDate?.getDate()} tháng ${bookingInfo.dateInfo.endDate?.getMonth()??0+1}`
    }
  }, [bookingInfo.dateInfo])

  const handleBackNavigateMouseClick = useCallback(() => {
    navigate(-1)
  }, [])

  const handleCheckPromotion = useCallback(() => {
    promotionActions.getByName(proInputValue)
      .then((res: IPromotionSchema) => { 
        setProPicked(res);
        setProHint("Áp dụng mã giảm giá thành công!")
      })
      .catch((error) => {
        const errorStatus = Number(error.message);
        setProPicked(null);
        if (errorStatus == 404) {
          setProHint("Mã giảm giá không tồn tại!")
        } else if (errorStatus == 400) {
          setProHint("Mã giảm giá không hợp lệ!")
        }
      })
  }, [proInputValue])

  const handleProInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setProHint("");
    setProInputvalue(value);
  }, [])

  useEffect(() => {
    if (!bookingInfo.homestayInfo) {
      navigate(-1)
    }
  }, [bookingInfo.homestayInfo])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, ((500)));
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
        <S.StyledHeaderWrapper>
          <S.StyledBackNavigate onClick={ handleBackNavigateMouseClick }> <MdArrowBackIosNew size={18}/> </S.StyledBackNavigate>
          <S.StyledHeaderTitle>Yêu cầu đặt phòng/đặt chỗ</S.StyledHeaderTitle>
        </S.StyledHeaderWrapper>

        <S.StyledMidSectionContainer>
          <S.StyledMidSectionLeft>
            <S.StyledHintContainer>
              <S.StyledHint>
                <S.StyledHintBold>Nơi này rất hiếm khi còn chỗ. &nbsp;</S.StyledHintBold>
                Chố ở này thường kín phòng, nhanh tay đặt ngay nào.
              </S.StyledHint>
              <S.StyledHintIconWrapper>
                <SlDiamond size="35px"/>
              </S.StyledHintIconWrapper>
            </S.StyledHintContainer>

            <S.StyledBookInfoWrapper>
              <S.StyledBookInfoHeader>Chuyến đi của bạn</S.StyledBookInfoHeader>
              <S.StyledBookInfoItem>
                <S.StyledBookInfoItemLeft>
                  <S.StyledBookInfoTitle>Ngày</S.StyledBookInfoTitle>
                  <S.StyledBookInfoDesc>{ datePick }</S.StyledBookInfoDesc>
                </S.StyledBookInfoItemLeft>
                <S.StyledButtonEditInfo>Chỉnh sửa</S.StyledButtonEditInfo>
              </S.StyledBookInfoItem>
              <S.StyledBookInfoItem>
                <S.StyledBookInfoItemLeft>
                  <S.StyledBookInfoTitle>Khách</S.StyledBookInfoTitle>
                  <S.StyledBookInfoDesc>{ bookingInfo.guestCount } khách</S.StyledBookInfoDesc>
                </S.StyledBookInfoItemLeft>
                <S.StyledButtonEditInfo>Chỉnh sửa</S.StyledButtonEditInfo>
              </S.StyledBookInfoItem>
            </S.StyledBookInfoWrapper>

            <S.StyledLineHoz/>

            <S.StyledPaymentMethodWrapper>
              <S.StyledPaymentMethodHeader>Chọn phương thức thanh toán</S.StyledPaymentMethodHeader>
              <S.StyledPaymentMethodItemListWrapper>
                <S.StyledPaymentMethodItem style={{ border: "2px solid #7D97B8", borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
                  <FaRegMoneyBillAlt size={35} color="#7D97B8"/>
                  <S.StyledPaymentMethodItemLeft>
                    <S.StyledPaymentMethodTitle>Thanh toán bằng tiền mặt</S.StyledPaymentMethodTitle>
                    <S.StyledPaymentMethodHint>Trả trực tiếp bằng tiền mặt tại quầy lễ tân.</S.StyledPaymentMethodHint>
                  </S.StyledPaymentMethodItemLeft>
                  <S.StyledPaymentMethodItemRight>
                    <S.StyledPaymentMethodPickButton checked type="radio"/>
                  </S.StyledPaymentMethodItemRight>
                </S.StyledPaymentMethodItem>
                <S.StyledLineHoz/>
                <S.StyledPaymentMethodItem>
                  <RiVisaFill size={40} color="#7D97B8"/>
                  <S.StyledPaymentMethodItemLeft style={{ opacity: "50%" }}>
                    <S.StyledPaymentMethodTitle>
                      Thanh toán bằng thẻ tín dụng
                      <S.StyledPaymentMethodTitleHint>(chưa hỗ trợ)</S.StyledPaymentMethodTitleHint>
                    </S.StyledPaymentMethodTitle>
                    <S.StyledPaymentMethodHint>Chấp nhận tất cả các loại thẻ tín dụng: Visa, MasterCard, American Express,...</S.StyledPaymentMethodHint>
                  </S.StyledPaymentMethodItemLeft>
                  <S.StyledPaymentMethodItemRight>
                    <S.StyledPaymentMethodPickButton disabled type="radio"/>
                  </S.StyledPaymentMethodItemRight>
                </S.StyledPaymentMethodItem>
                <S.StyledLineHoz/>
                <S.StyledPaymentMethodItem>
                  <RiPaypalFill size={40} color="#7D97B8"/>
                  <S.StyledPaymentMethodItemLeft style={{ opacity: "50%" }}>
                    <S.StyledPaymentMethodTitle>
                      Thanh toán bằng Paypal
                      <S.StyledPaymentMethodTitleHint>(chưa hỗ trợ)</S.StyledPaymentMethodTitleHint>
                    </S.StyledPaymentMethodTitle>
                    <S.StyledPaymentMethodHint>Sử dụng tài khoản Paypal để thanh toán một cách an toàn và tiện lợi.</S.StyledPaymentMethodHint>
                  </S.StyledPaymentMethodItemLeft>
                  <S.StyledPaymentMethodItemRight>
                    <S.StyledPaymentMethodPickButton disabled type="radio"/>
                  </S.StyledPaymentMethodItemRight>
                </S.StyledPaymentMethodItem>
              </S.StyledPaymentMethodItemListWrapper>
            </S.StyledPaymentMethodWrapper>

            <S.StyledLineHoz/>

            <S.StyledRuleWrapper>
              <S.StyledRuleHeader>Quy chuẩn chung</S.StyledRuleHeader>
              <S.StyledRuleHint>Chúng tôi yêu cầu tất cả khách phải ghi nhớ một số quy chuẩn đơn giản để làm một vị khách tuyệt vời.</S.StyledRuleHint>
              <S.StyledRuleItem> • &nbsp; Tuân thủ nội quy nhà</S.StyledRuleItem>
              <S.StyledRuleItem> • &nbsp; Giữ gìn ngôi nhà như thể đó là nhà bạn</S.StyledRuleItem>
            </S.StyledRuleWrapper>

            <S.StyledLineHoz/>

            <S.StyledPolicyWrapper>
              Bằng việc chọn nút bên dưới, tôi đồng ý với Nội quy nhà của Chủ nhà, Quy chuẩn chung đối với khách. Tôi đồng ý thanh toán tổng số tiền được hiển thị.
            </S.StyledPolicyWrapper>
            <S.StyledBookingButton>Yêu cầu đặt phòng</S.StyledBookingButton>
          </S.StyledMidSectionLeft>

          <S.StyledMidSectionRight>
            <S.StyledBookSumaryWrapper>
              <S.StyledHomestayInfoWrapper>
                <S.StyledHomestayImage src={ bookingInfo.homestayInfo?.main_image }/>
                <S.StyledHomestayInfoRight>
                  <S.StyledRatingWrapper>
                    <BsStarFill size="15px" color="#7D97B8"/> 
                    <S.StyledRating>{ 5 }</S.StyledRating>
                  </S.StyledRatingWrapper>
                  <S.StyledFeedBackCountWrapper>
                    <MdModeComment size="15px" color="#7D97B8"/> 
                    <S.StyledFeedbackCount>{ feedbackCount } đánh giá</S.StyledFeedbackCount>
                  </S.StyledFeedBackCountWrapper>
                </S.StyledHomestayInfoRight>       
              </S.StyledHomestayInfoWrapper>

              <S.StyledLineHoz/>

              <S.StyledPriceTitle>Chi tiết giá</S.StyledPriceTitle>
              <S.StyledPriceDetailWrapper>
                <S.StyledPriceDetailTitle><BiDollar size={"18px"} color="#222222"/>
                  {bookingInfo.homestayInfo?.price} x {bookingInfo.dateInfo.dateCount} đêm
                </S.StyledPriceDetailTitle>
                <S.StyledPriceDetailValue><BiDollar size={"18px"} color="#222222"/>{ roomPrice }</S.StyledPriceDetailValue>
              </S.StyledPriceDetailWrapper>
              <S.StyledPriceDetailWrapper>
                <S.StyledPriceDetailTitle style={{ textDecoration: "underline" }}>Phí dịch vụ</S.StyledPriceDetailTitle>
                <S.StyledPriceDetailValue><BiDollar size={"18px"} color="#222222"/>{ servicePrice }</S.StyledPriceDetailValue>
              </S.StyledPriceDetailWrapper>
              <S.StyledPriceDetailWrapper>
                <S.StyledPriceDetailTitle style={{ textDecoration: "underline" }}>Thuế</S.StyledPriceDetailTitle>
                <S.StyledPriceDetailValue><BiDollar size={"18px"} color="#222222"/>
                  { taxPrice.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) }
                </S.StyledPriceDetailValue>
              </S.StyledPriceDetailWrapper>
              { proPicked &&
              <S.StyledPriceDetailWrapper>
                <S.StyledPriceDetailTitle style={{ textDecoration: "underline" }}>Giảm giá ({proPicked.discount_percent}%)</S.StyledPriceDetailTitle>
                <S.StyledPriceDetailValue style={{ textDecoration: "line-through", color: "#008A05" }}><BiDollar size={"18px"} color="#222222"/>
                  -{ discoutAmout.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) }
                </S.StyledPriceDetailValue>
              </S.StyledPriceDetailWrapper> }

              <S.StyledLineHoz/>
              
              <S.StyledPriceDetailWrapper>
                <S.StyledPriceTotalTitle>Tổng (USD)</S.StyledPriceTotalTitle>
                <S.StyledPriceTotalValue><BiDollar size={"18px"} color="#222222"/> 
                  { totalPrice.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) }
                </S.StyledPriceTotalValue>
              </S.StyledPriceDetailWrapper>

              { proPicked &&
              <S.StyledPriceDetailWrapper>
                <S.StyledPriceTotalTitle>Tổng sau giảm giá (USD)</S.StyledPriceTotalTitle>
                <S.StyledPriceTotalValue style={{ textDecoration: "line-through" }}><BiDollar size={"18px"} color="#222222"/> 
                  { dicountPrice.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) }
                </S.StyledPriceTotalValue>
              </S.StyledPriceDetailWrapper> }
            </S.StyledBookSumaryWrapper>

            <S.StyledProContainer>
              <S.StyledInputProWrapper>
                <S.StyledProIconWrapper>
                  <MdDiscount size="20px" color='#7D97B8'/>
                </S.StyledProIconWrapper>
                <S.StyledInputWrapper>
                  <S.StyledInput value={proInputValue} required type="text" onChange={ handleProInputChange }/>
                  <S.StyledInputLabel>Nhập mã giảm giá</S.StyledInputLabel>
                </S.StyledInputWrapper>
              </S.StyledInputProWrapper>
              <S.StyledProCheck onClick={ handleCheckPromotion }>Kiểm tra</S.StyledProCheck>
            </S.StyledProContainer>
            <S.StyledProHint>{ proHint }</S.StyledProHint>
          </S.StyledMidSectionRight>
        </S.StyledMidSectionContainer>
      </S.StyledContentWrapper>)}

      <MainFooter/>
    </S.StyledContainer>
  )
}