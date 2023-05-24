import styled from "styled-components";

export const StyledContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 250px;
  transform: translateY(10px);
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
`

export const StyledGroupButton = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const StyledButton = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 300;
  padding: 10px 15px;
  
  &:hover {
    background-color: #F7F7F7;
  }
`

export const StyledLine = styled.div`
  border-bottom: 1px solid #DDDDDD;
`