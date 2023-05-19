import styled from "styled-components";

export const StyledContainer = styled.div`
  position: sticky;
  top: -2px;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline-start: 40px;
  padding-inline-end: 40px;
  border-top: solid 1px #DDDDDD;
  border-bottom: solid 1px #DDDDDD;
  background: #FFFFFF;
  z-index: 1;
`

export const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`

export const StyledLogoTitle = styled.div`
  margin-left: 10px;
  font-size: 25px;
  font-weight: 800;
  color: #7D97B8;
`

export const StyledUserWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: transparent;
  background-color: #FFFFFF;
  border: solid 1px #DDDDDD;
  border-radius: 21px;
  transition: box-shadow 0.2s ease;
  padding: 5px 5px 5px 12px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 4px rgba(0,0,0,0.18);
  }
`