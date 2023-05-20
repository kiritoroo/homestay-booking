import styled from "styled-components";

export const StyledContainer = styled.div`
  position: sticky;
  bottom: 0;  
  left: 0;
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 50px;
  border-top: solid 1px #DDDDDD;
  background: #FFFFFF;
  z-index: 1;
`

export const StyledLinkWrapper = styled.div`
  display: flex;
  font-size: 15px;
`

export const StyledLink = styled.div`
  font-weight: 200;
  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:active {
    color: #7D97B8;
  }
`

export const StyledLinkSpace = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`

export const StyledSettingListWrapper = styled.div`
  display: flex;
  gap: 15px;
  font-size: 15px;
`

export const StyledSettingWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`

export const StyledSetting = styled.div`
  font-weight: 300;
  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:active {
    color: #7D97B8;
  }
`