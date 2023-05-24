import styled from "styled-components";

export const StyledContainer = styled.div`
  border: 2px solid #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  :hover {
    cursor: pointer;
    border: 2px solid #7D97B8;
  }
`

export const StyledFlexHoz = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
`

export const StyledFlexLeft = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
  justify-content: center;
`

export const StyledFlexRight = styled.div`
  width: 150px;
  position: relative;
`

export const StyledProTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const StyledProExp = styled.div`
  font-size: 15px;
  font-weight: 300;
`

export const StyledProDesc = styled.div`
  font-weight: 200;
  font-size: 15px;
`

export const StyledProPercent = styled.div`
  font-weight: 600;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
  background-image: linear-gradient(to bottom right, #EBEFF4, #7D97B8);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

export const StyledCopyHint = styled.div`
  position: absolute;
  bottom: -30px;
  right: 10px;
  font-weight: 200;
  color: #999999;
`