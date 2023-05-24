import styled from "styled-components";

export const StyledContainer = styled.div`
  position: absolute;
  top: 68%;
  right: 20px;
  border: 1px solid #DDDDDD;
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  background-color: white;
  width: 368px;
`

export const StyledOptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  user-select: none;
`

export const StyledOptionFlexLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
`

export const StyledOptionFlexRight = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 15px;
`

export const StyledOptionTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
`

export const StyledOptionHint = styled.div`
  font-weight: 300;
  font-size: 15px;
  max-width: 150px;
`

export const StyledButtonControl = styled.div<{ isDissable: boolean }>`
  width: 40px;
  height: 40px;
  border: 1px solid #b0b0b0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  opacity: ${({ isDissable }) => isDissable ? "25%" : "100%"};

  &:hover {
    cursor: ${({ isDissable }) => isDissable ? "not-allowed" : "pointer"};
    border: 2px solid #7D97B8;
  }
`

export const StyledValue = styled.div`
  font-size: 18px;
  font-weight: 300;
`

export const StyledHint = styled.div`
  font-weight: 300;
  font-size: 12px;
`

export const StyledButtonClose = styled.div`
  font-weight: 400;
  font-size: 16px;
  text-decoration: underline;
  float: right;
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: #7D97B8;
  }
`
