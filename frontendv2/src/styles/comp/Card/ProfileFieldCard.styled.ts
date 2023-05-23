import styled from "styled-components";

export const StyledContainer = styled.div<{ isEditting: boolean }>`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: solid 1px #DDDDDD;
  filter: ${({ isEditting }) => (isEditting ? 'opacity(100%)' : 'opacity(30%)')};
`

export const StyledFieldInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const StyledFieldLabel = styled.div`
  font-weight: 400;
  line-height: 30px;
`

export const StyledFieldValue = styled.div`
  color: #717171;
  font-weight: 200;
  line-height: 30px;
`

export const StyledButtonModify = styled.div<{ isEditting: boolean }>`
  font-weight: 400;
  font-size: 15px;
  text-decoration: underline;
  user-select: none;

  &:hover {
    cursor: ${({ isEditting }) => (isEditting ? 'pointer' : 'not-allowed')};
  }

  &:active {
    color: ${({ isEditting }) => (isEditting ? '#7D97B8' : '#000000')};
  }
`

export const StyledFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledInputWrapper = styled.div`
  position: relative;
  height: auto;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const StyledInputLalbel = styled.label`
  position: absolute;
  top: 30%;
  left: 15px;
  color: #7C7C7C;
  font-size: 16px;
  font-weight: 300;
  user-select: none;
  pointer-events: none;
  transition: all 0.2s ease;
`

export const StyledInput = styled.input<{ isEmpty: boolean }>`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 10px;
  padding-left: 20px;
  font-size: 16px;
  border: solid 1px #DDDDDD;
  border-radius: 10px;
  background-color: ${({ isEmpty }) => (isEmpty ? '#FFF8F6' : '#FFFFFF')};

  &:focus {
    outline: none;
    border: solid 1px #7D97B8;
    border-color: ${({ isEmpty }) => (isEmpty ? '#C13515' : '#7D97B8')};
  }

  &:focus + ${StyledInputLalbel} {
    top: 15%;
    font-size: 12px;
    color: ${({ isEmpty }) => (isEmpty ? '#C13515' : '#7D97B8')};
  }

  &:valid + ${StyledInputLalbel} {
    top: 15%;
    font-size: 12px;
    color:  #7D97B8;
  }
`

export const StyledSaveButtonWrapper = styled.div`
  position: relative;
  width: 90px;
`

export const StyledLoadingWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`

export const StyledSaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  padding: 15px 0;
  border-radius: 10px;
  background-color: #7D97B8;
  color: #FFFFFF;
  user-select: none;
  border: none;
  transition: transform 0.2s ease;
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }
`

export const StyledInputEmptyHintWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`

export const StyledInputEmptyHintLabel = styled.div`
  width: 100%;
  color: #C13515;
  font-size: 12px;
  font-weight: 500;
  padding-left: 5px;
`