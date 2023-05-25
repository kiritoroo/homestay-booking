import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(80, 80, 80, 0.5);
  z-index: 99999;
  cursor: auto;
`

export const StyledModalWrapper = styled(motion.div)`
  background: rgb(255, 255, 255);
  height: auto;
  width: auto;
  padding: 40px 40px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
`

export const StyledModalTopWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

export const StyledIconCloseWrapper = styled.div`
  position: absolute;
  top: -10px;
  right: -25px;
  transform: translateY(-40%);
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: #F7F7F7;
    border-radius: 50%;
  }
`

export const StyledInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 24px;
`

export const StyledHomestayInfo = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const StyledBookingInfo = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const StyledLineHoz = styled.div`
  width: 100%;
  border-bottom: 1px solid #DDDDDD;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const StyledHeader = styled.div`
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 20px;
`

export const StyledBookingIdWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  margin: 5px 0px;
`

export const StyledBookingIdLabel = styled.div`
  font-weight: 300;
  font-size: 16px;
  color: #555555;
`

export const StyledBookingIdvalue = styled.div`
  font-weight: 600;
  font-size: 18px;
`

export const StyledBookingCityWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  margin: 5px 0px;
`

export const StyledBookingCityLabel = styled.div`
  font-weight: 300;
  font-size: 16px;
  color: #555555;
`

export const StyledBookingCityvalue = styled.div`
  font-weight: 600;
  font-size: 18px;
`

export const StyledImage = styled.img`
  width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 24px;
  margin-bottom: 24px;
`

export const StyledHomestayAddress = styled.div`
  font-size: 16px;
  font-weight: 300;
`

export const StyledDateInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  border: 1px solid #DDDDDD;
  border-radius: 12px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const StyledCheckDateWrapper = styled.div`
  width: 150px;
  padding: 15px;
  border-radius: 10px;
`
export const StyledCheckLabel = styled.div`
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 5px;
`

export const StyledCheckValue = styled.div`
  font-weight: 300;
  font-size: 15px;
`

export const StyledDateLineVez = styled.div`
  height: 80px;


  border-left: 1px solid #DDDDDD;
`

export const StyledDateBookWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const StyledDateBookLabel = styled.div`
  font-weight: 300;
  font-size: 16px;
  color: #555555;
`

export const StyledDateBookValue = styled.div`
  font-weight: 600;
  font-size: 18px;
`

export const StyledGuestInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const StyledGuestInfoLabel = styled.div`
  font-weight: 500;
  font-size: 15px;
`

export const StyledGuestInfoValue = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: #999999;
`

export const StyledStatusWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 5px;
`

export const StyledStatusLabel = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #555555;
`

export const StyledStatusValue  = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #999999;
`