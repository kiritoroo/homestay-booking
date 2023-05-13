import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledHeadWrapper = styled.div`
  width: 650px;
  margin-top: 50px;
  margin-bottom: 50px;
`

export const StyledTitle = styled.div`
  font-size: 30px;
  line-height: 55px;
`

export const StyledUserInfoWrapper = styled.div`
  font-size: 16px;
  line-height: 25px;
`

export const StyledNameInfo = styled.span`
  font-weight: 600;
`

export const StyledEmailInfo = styled.span`
  font-weight: 300;
`

export const StyledLinkInfo = styled.span`
  font-weight: 500;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: #7D97B8;
  }
`

export const StyledOptionListWrapper = styled.div`
  width: 650px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`