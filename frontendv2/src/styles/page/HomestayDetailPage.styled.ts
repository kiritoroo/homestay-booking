import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100vw;
  height: auto;
`

export const StyledContentWrapper = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 40px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledImageListWrapper = styled.div`
  display: grid;
  width: min-content;
  margin-top: 20px;
  margin-bottom: 50px;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 20px;
  overflow: hidden;
  align-items: center;
  gap: 10px;
`

export const StyledImageGrid = styled.div`
  width: 35vw;
  max-width: 500px;
  display: grid;
  object-fit: cover;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  aspect-ratio: 1/1;
`

export const StyledMainImage = styled.img`
  width: 40vw;
  height: 35vw;
  max-width: 800px;
  max-height: 500px;
  object-fit: cover;
`

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const StyledMidSectionContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-items: end;
  gap: 100px;
  margin-bottom: 80px;

  @media screen and (max-width: 1300px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`

export const StyledHomestayInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const StyledHomestayBigInfoListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 25px;
  margin-bottom: 25px;
  gap: 15px;
`

export const StyledHomestayBigInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
  width: 220px;
  height: 100px;
  border: 1px solid #DDDDDD;
  padding: 30px 25px;
  border-radius: 16px;
`

export const StyledHomestayMediumInfoListWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 40px;
`

export const StyledHomestayMediumInfoWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 15px;
`

export const StyledHomestayMediumFlexVezWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
`

export const StyledHomestaySmallInfoListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 30px;
  margin-top: 40px;
  margin-bottom: 40px;
`

export const StyledHomestaySmallInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
`

export const StyledIconWrapper = styled.div`
  color: #7D97B8;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledHomestayInfoTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
`

export const StyledHomestayInfoDesc = styled.div`
  font-size: 12px;
  font-weight: 300;
`

export const StyledLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #DDDDDD;
`

export const StyledHomestayDescContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
`

export const StyledHomestayDescWrapper = styled.div`
  
`

export const StyledHomestayDescLabel = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
`

export const StyledHomestayDesc = styled.div`
  font-size: 15px;
  font-weight: 300;
  line-height: 28px;
  margin-top: 20px;
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