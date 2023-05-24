import styled from "styled-components";

export const StyledContainer = styled.div`

`

export const StyledContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-left: 8vw;
  margin-right: 8vw;
`

export const StyledHeadWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`

export const StyledTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  line-height: 60px;
`

export const StyledNavigateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
`

export const StyledLinkBefore = styled.div`
  font-weight: 500;
  font-size: 15px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:active {
    color: #7D97B8;
  }
`

export const StyledLinkCurrent = styled.div`
  font-weight: 500;
  font-size: 15px;

  &:hover {
    cursor: text;
  }
`

export const StyledFieldListWrapper = styled.div`
  width: 650px;
`
