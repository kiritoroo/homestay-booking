import styled from "styled-components";

export const StyledContainer = styled.div`
  position: sticky;
  top: 120px;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 420px;
`

export const StyledBookingContainer = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  background: white;
`

export const StyledHomestayInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const StyledHomestayInfoFlexHoz = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledPriceWrapper = styled.div`
  font-size: 15px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-top: 5px;
  padding-bottom: 5px;
`

export const StyledPrice = styled.span`
  font-size: 20px;
  font-weight: 600;
`

export const StyledRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-left: 30px;
`

export const StyledRating = styled.div`
  font-size: 12px;
`

export const StyledFeedBackCountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-left: 5px;
`

export const StyledFeedbackCount = styled.div`
  font-size: 12px;
  font-weight: 300;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: #7D97B8;
  }
`

export const StyledDateInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  border-left: 1px solid #DDDDDD;
  border-right: 1px solid #DDDDDD;
  border-top: 1px solid #DDDDDD;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: 20px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    border-radius: 10px;
    outline: 1px solid #515151;
  }
`

export const StyledDateCheckInWrapper = styled.div`
  padding: 15px;
  width: 180px;
  border-right: 1px solid #DDDDDD;
  pointer-events: none;
`

export const StyledDateCheckOutWrapper = styled.div`
  padding: 15px;
  width: 180px;
  pointer-events: none;
`

export const StyledDateLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
  pointer-events: none;
`

export const StyledDateValue = styled.div`
  font-size: 15px;
  font-weight: 300;
  pointer-events: none;
`

export const StyledLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #DDDDDD;
`

export const StyledGuestInfoWrapper = styled.div`
  position: relative;
  padding: 10px;
  width: 100%;
  border-left: 1px solid #DDDDDD;
  border-right: 1px solid #DDDDDD;
  border-bottom: 1px solid #DDDDDD;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    border-radius: 10px;
    outline: 1px solid #515151;
  }
`

export const StyledGuestLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
`

export const StyledGuestValue = styled.div`
  font-size: 15px;
  font-weight: 300;
`

export const StyledGuestInfoExpandIconWrapper = styled.div`
  position: absolute;
  right: 15px;
  top: 0;
  transform: translateY(50%);
`

export const StykedButtonBooking = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  border-radius: 10px;
  background-color: #7D97B8;
  color: #FFFFFF;
  user-select: none;
  border: none;
  transition: transform 0.2s ease;
  font-size: 15px;
  
  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }
`

export const StyledHintContainer = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 30px 24px;
  background: white;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const StyledHintIconWrapper = styled.div`
  color: #7D97B8;
`

export const StyledHint = styled.div`
  font-weight: 300;
`

export const StyledHintBold = styled.span`
  font-weight: 400;
`

export const StyledReportWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`

export const StyledReportIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #828282;
`

export const StyledReport = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #828282;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: #7D97B8;
  }
`
