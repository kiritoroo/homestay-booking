import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const StyledHomestayListWrapper = styled.div`
  display: grid;
  grid-gap: 50px 30px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`