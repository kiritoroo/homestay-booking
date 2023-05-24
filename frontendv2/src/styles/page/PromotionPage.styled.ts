import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

export const StyledContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledHeadWrapper = styled.div`
  width: 650px;
  margin-top: 50px;
  margin-bottom: 10px;
`

export const StyledTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  line-height: 55px;
`

export const StyledUserInfoWrapper = styled.div`
  font-size: 16px;
  line-height: 25px;
`

export const StyledNameInfo = styled.span`
  font-weight: 600;
`

export const StyledUserHint = styled.span`
  font-weight: 300;
`

export const StyledLinkHint = styled.span`
  font-weight: 300;
  font-size: 14px;
  text-decoration: underline;
  margin-left: 20px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: #7D97B8;
  }
`

export const StyledProHint = styled.div`
  font-weight: 200;
  font-size: 14px;
`

export const StyledPromotionListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-bottom: 100px;
`