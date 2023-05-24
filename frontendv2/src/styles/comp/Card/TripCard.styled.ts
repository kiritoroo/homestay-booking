import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 24px;
  border: 1px solid #DDDDDD;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  :hover {
    cursor: pointer;
    border: 1px solid #7D97B8;
  }
`

export const StyledBooInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0px;
`

export const StyledBookInfoTitle = styled.div`
  font-weight: 300;
  font-size: 15px;
`

export const StyledBookInfoValue = styled.div`
  font-weight: 500;
  font-size: 16px;
`

export const StyledImage = styled.img`
  border-radius: 12px;
  width: 350px;
  height: 250px;
  object-fit: cover;
  align-self: center;
  margin-bottom: 20px;
`

export const StyledDateInfoWrapper = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: stretch;
  border: 1px solid #DDDDDD;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #FFFFFF;
`

export const StyledDateCheckInWrapper = styled.div`
  padding: 15px;
  width: 180px;
  border-radius: 10px;
`

export const StyledDateCheckOutWrapper = styled.div`
  padding: 15px;
  width: 180px;
  border-radius: 10px;
`

export const StyledDateInfoTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`

export const StyledDateInfoValue = styled.div`
  font-size: 15px;
  font-weight: 300;
`

export const StyledDateInfoLineVez = styled.div`
  height: 68px;
  border-left: 1px solid #DDDDDD;
`

export const StyledLineHoz = styled.div`
  width: 100%;
  border-bottom: 1px solid #DDDDDD;
  margin-top: 10px;
`

export const StyledButtonAbort = styled.div`
  display: flex;
  width: 100%;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: #F87876;
  margin-top: 20px;
  padding: 15px 0px;
  font-size: 16px;
  color: #FFFFFF;
  border-radius: 8px;
  transition: transform 0.2s ease;
  user-select: none;

  &:hover {
    cursor: pointer;
    background-color: #FAA5A3;
  }

  &:active {
    background-color: #FAA5A3;
    transform: scale(0.95);
  }
`

export const StyledButtonReBook = styled.div`
  display: flex;
  width: 100%;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: #7F97B6;
  margin-top: 20px;
  padding: 15px 0px;
  font-size: 16px;
  color: #FFFFFF;
  border-radius: 8px;
  transition: transform 0.2s ease;
  user-select: none;

  &:hover {
    cursor: pointer;
    background-color: #A9B9CE;
  }

  &:active {
    background-color: #A9B9CE;
    transform: scale(0.95);
  }
`