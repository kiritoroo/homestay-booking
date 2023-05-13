import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100vw;
  height: auto;
`

export const StyledContentWrapper = styled.div`
  margin-left: 40px;
  margin-right: 40px;
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

export const StyledFeedbackContentWrapper = styled.div`
  max-width: 900px;
`

export const StyledFeedbackSumaryWrapper = styled.div`
  
`

export const StyledFeedbackTitle = styled.div`
  font-weight: 400;
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-top: 50px;
`

export const StyledFeebackListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 40px;
  margin-bottom: 40px;
`

export const StyledFeedbackCriteriaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const StyledFeedbackCriteriaTitle = styled.div`
  font-weight: 300;
  font-size: 16px;
`

export const StyledFeedbackCriteriaRatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const StyledFeedbackCriteriaRatingProgress = styled.div`
  background-color: #7D97B8;
  width: 170px;
  height: 5px;
  border-radius: 10px;
`

export const StyledFeebackCriteriaRatingValue = styled.div`
  font-weight: 600;
  font-size: 13px;
`

export const StyledLine = styled.div`
  border-bottom: 1px solid #DDDDDD;
`

export const StyledFeedbackListWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`
