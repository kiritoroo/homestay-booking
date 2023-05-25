import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100vw;
  height: auto;
`

export const StyledContentWrapper = styled.div`
  position: relative;
  margin-left: 6vw;
  margin-right: 6vw;
`

export const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  margin-top: 60px;
  margin-bottom: 40px;
  margin-left: -40px;
`

export const StyledHeaderTitle = styled.div`
  font-size: 25px;
`

export const StyledBackNavigate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding-top: 5px;

  &:hover {
    background-color: #F7F7F7;
    cursor: pointer;
  }
`

export const StyledLineHoz = styled.div`
  border-bottom: 1px solid #DDDDDD;
  width: 100%;
`

export const StyledMidSectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  gap: 80px;
`

export const StyledMidSectionLeft = styled.div`
  width: 42vw;
  max-width: 750px;
  margin-bottom: 200px;
`

export const StyledMidSectionRight = styled.div`
  width: 32vw;
  max-width: 550px;
  position: sticky;
  top: 15%;
`

export const StyledHintContainer = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 30px 24px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 60px;
`

export const StyledHintIconWrapper = styled.div`
  color: #7D97B8;
`

export const StyledHint = styled.div`
  font-weight: 300;
`

export const StyledHintBold = styled.div`
  font-weight: 400;
`

export const StyledBookInfoWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`

export const StyledBookInfoHeader = styled.div`
  font-weight: 600;
  font-size: 22px;
`

export const StyledBookInfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const StyledBookInfoItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
`

export const StyledBookInfoTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
`

export const StyledBookInfoDesc = styled.div`
  font-weight: 300;
  font-size: 16px;
`

export const StyledButtonEditInfo = styled.div`
  font-size: 16px;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: #7D97B8;
  }
`

export const StyledPaymentMethodWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`

export const StyledPaymentMethodHeader = styled.div`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 20px;
`

export const StyledPaymentMethodItemListWrapper = styled.div`
  border: 1px solid #DDDDDD;
  border-radius: 12px;
`

export const StyledPaymentMethodItem = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 24px;
`

export const StyledPaymentMethodItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
  margin-left: 25px;
  margin-right: 40px;
`

export const StyledPaymentMethodItemRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledPaymentMethodTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const StyledPaymentMethodTitleHint = styled.div`
  font-weight: 300;
  font-size: 14px;
`

export const StyledPaymentMethodHint = styled.div`
  font-weight: 200;
  font-size: 15px;
`

export const StyledPaymentMethodPickButton = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  right: 40px;
  top: 24px;

  &:checked {
    cursor: pointer;
  }

  &:disabled {
    filter: grayscale(100%);
    opacity: 50%;
  }

  cursor: not-allowed;
  
  &:after {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: relative;
    outline: 1px solid #7D97B8;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
  }

  &:checked:after {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    position: relative;
    background-color: white;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 6px solid #7D97B8;
    outline: none;
  }
`

export const StyledRuleWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`

export const StyledRuleHeader = styled.div`
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 20px;
`

export const StyledRuleHint = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 20px;
  color: #222222;
`

export const StyledRuleItem = styled.div`
  font-size: 15px;
  font-weight: 300;
  margin: 10px 0px;
  color: #222222;
`

export const StyledPolicyWrapper = styled.div`
  font-size: 14px;
  font-weight: 200;
  margin-top: 40px;
`

export const StyledBookingButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 35px;
  border-radius: 12px;
  background-color: #7D97B8;
  color: #FFFFFF;
  user-select: none;
  border: none;
  transition: transform 0.2s ease;
  font-size: 16px;
  margin-top: 20px;
  
  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: #A8B9CF;
    transform: scale(0.95);
  }
`

export const StyledBookSumaryWrapper = styled.div`
  border: 1px solid #DDDDDD;
  border-radius: 12px;
  padding: 25px;
`

export const StyledHomestayInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
  margin-bottom: 20px;
`

export const StyledHomestayInfoRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const StyledHomestayImage = styled.img`
  width: 180px;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
`

export const StyledRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const StyledRating = styled.div`
  font-size: 16px;
`

export const StyledFeedBackCountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const StyledFeedbackCount = styled.div`
  font-size: 15px;
  font-weight: 300;

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: #7D97B8;
  }
`

export const StyledPriceTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
`

export const StyledPriceDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const StyledPriceDetailTitle = styled.div`
  color: #222222;
  font-weight: 300;
  font-size: 16px;
  display: flex;
  align-items: center;
`

export const StyledPriceDetailValue = styled.div`
  color: #222222;
  font-weight: 300;
  font-size: 16px;
  display: flex;
  align-items: center;
`

export const StyledPriceTotalTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
`

export const StyledPriceTotalValue = styled.div`
  font-weight: 500;
  font-size: 18px;
`

export const StyledProContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 50px;
`

export const StyledProCheck = styled.div`
  font-weight: 300;
  font-size: 15px;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: #7D97B8;
  }
`

export const StyledInputProWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: start;
  margin-bottom: 10px;
  margin-top: 20px;
  border: 1px solid #DDDDDD;
  border-radius: 12px;
  width: 300px;
`

export const StyledProIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 20px;
  border-right: 1px solid #DDDDDD;
  user-select: none;
`

export const StyledInputWrapper = styled.div`
  width: 100%;
  position: relative;
  height: auto;
`

export const StyledInputLabel = styled.label`
  position: absolute;
  top: 30%;
  left: 15px;
  color: #7C7C7C;
  font-size: 15px;
  font-weight: 300;
  user-select: none;
  pointer-events: none;
  transition: all 0.2s ease;
`

export const StyledInput = styled.input`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 10px;
  padding-left: 20px;
  border: solid 1px #FFFFFF;
  outline: none;
  border-radius: 10px;
  transition: border 0.5s ease;
  font-size: 16px;
  background-color: #FFFFFF;
  z-index: 0;

  &:focus {
    outline: none;
    border: solid 1px #7D97B8;
    border-color: #7D97B8;
    z-index: 2;
  }

  &:focus + ${StyledInputLabel} {
    top: 15%;
    font-size: 12px;
    color: #7D97B8;
  }

  &:valid + ${StyledInputLabel} {
    top: 15%;
    font-size: 12px;
    color:  #7D97B8;
  }
`

export const StyledProHint = styled.div`
  font-weight: 300;
  font-size: 15px;
  margin-left: 10px;
`

export const StyledLoadingWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 35px;
  margin-top: 10px;
`