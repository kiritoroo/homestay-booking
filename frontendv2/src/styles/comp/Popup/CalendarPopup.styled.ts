import styled from "styled-components";

export const StyledContainer = styled.div`

`

export const StyledModalWrapper = styled.div`
  position: absolute;
  top: 55px;
  right: -10px;
  background: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
  padding: 10px 32px 16px;
`

export const StyledHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const StyledHeaderLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
`

export const StyledHeaderRightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledHeaderTitle = styled.div`
  font-weight: 600;
  font-size: 22px;
`

export const StyledHeaderHint = styled.div`
  font-weight: 300;
  font-size: 15px;
`

export const StyledDateInfoWrapper = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: stretch;
  border: 1px solid #DDDDDD;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #F0F3F7;
`

export const StyledDateCheckInWrapper = styled.div<{isPicking: boolean}>`
  padding: 15px;
  width: 180px;
  border-radius: 10px;
  border: ${({ isPicking }) => isPicking ? "2px solid #7D97B8": "none"};
  background-color: ${({ isPicking }) => isPicking ? "#FFFFFF": "none"};
`

export const StyledDateCheckOutWrapper = styled.div<{isPicking: boolean}>`
  padding: 15px;
  width: 180px;
  border-radius: 10px;
  border: ${({ isPicking }) => isPicking ? "2px solid #7D97B8": "none"};
  background-color: ${({ isPicking }) => isPicking ? "#FFFFFF": "none"};
`

export const StyledLineVez = styled.div`
  height: 68px;
  border-left: 1px solid #DDDDDD;
`

export const StyledDateLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
`

export const StyledDateValue = styled.div`
  font-size: 15px;
  font-weight: 300;
`

export const StyledCalendarWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
`

export const StyledFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
`

export const StyledClearDate = styled.div`
  text-decoration: underline;
  font-weight: 300;
  font-size: 16px;
  user-select: none;

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: #7D97B8;
  }
`

export const StyledClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7D97B8;
  border: none;
  padding: 8px 18px;
  transition: transform 0.2s ease;
  user-select: none;
  color: #FFFFFF;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 300;
  
  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }
`