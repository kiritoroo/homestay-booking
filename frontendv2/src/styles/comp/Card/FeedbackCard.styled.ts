import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`

export const StyledUserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 20px;
  gap: 15px;
`

export const StyledUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const StyledUserName = styled.div`
  font-weight: 600;
  font-size: 16px;
`

export const StyledTime = styled.div`
  font-weight: 300;
  font-size: 15px;
  text-transform: lowercase;
`

export const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: #FFFFFF;
  background: linear-gradient(to bottom right, #F0F3F7, #D3DCE7);
`

export const StyledCommentWrapper = styled.div`

`

export const StyledComment = styled.div`
  font-size: 15px;
  font-weight: 300;
`

export const StyledShowmoreWrapper = styled.div`
  margin-top: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: start;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:active {
    color: #7D97B8;
  }
`

export const StyledShowmore = styled.div`
  text-decoration: underline;
  font-size: 15px;
  font-weight: 600;
`

export const StyledHideWrapper = styled.div`
  margin-top: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: start;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:active {
    color: #7D97B8;
  }
`

export const StyledHide = styled.div`
  text-decoration: underline;
  font-size: 15px;
  font-weight: 600;
`