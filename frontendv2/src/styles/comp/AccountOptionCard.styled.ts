import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 310px;
  padding: 15px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  user-select: none;
  
  &:hover {
    cursor: pointer;
  }
`

export const StyledIcon = styled.div`
  padding-bottom: 20px;
`

export const StyledTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  padding-bottom: 5px;
`

export const StyledDesciption = styled.div`
  font-weight: 200;
  font-size: 15px;
`