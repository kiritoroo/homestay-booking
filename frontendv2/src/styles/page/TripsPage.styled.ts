import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

export const StyledContentWrapper = styled.div`
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 40px;
  margin-bottom: 60px;
  position: relative;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const StyledHeader = styled.div`
  font-weight: 600;
  font-size: 30px;
`

export const StyledHeaderHint = styled.div`
  font-weight: 300;
  font-size: 15px;
  margin-bottom: 20px;
  color: #999999;
`

export const StyledLineHoz = styled.div`
  width: 100%;
  border: 1px solid #DDDDDD;
`

export const StyledNothingWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`

export const StyledNothingHintTitle = styled.div`
  margin-top: 40px;
  font-weight: 500;
  font-size: 20px;
`

export const StyledNothingDesc = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 16px;
  color: #222222;
`

export const StyledNothingButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 10px;
  background-color: #FFFFFF;
  color: #FFFFFF;
  user-select: none;
  border: 1px solid #7D97B8;
  transition: transform 0.2s ease;
  font-size: 16px;
  color: #222222;
  font-weight: 400;
  margin-bottom: 60px;
  &:hover {
    cursor: pointer;
    background-color: #F7F7F7;
  }

  &:active {
    background-color: #F7F7F7;
    transform: scale(0.95);
  }
`

export const StyledTripsListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 40px;
  padding-bottom: 150px;
`