import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-top: 40px;
`

export const StyledModalWrapper = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 16px;
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
