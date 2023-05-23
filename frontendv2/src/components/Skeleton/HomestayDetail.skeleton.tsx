import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import * as S from "@style/page/HomestayDetailPage.styled";

export const HomestayDetailSkeleton = () => {
  
  return (
    <SkeletonTheme baseColor="#f2f7fc" highlightColor="#f8fbfd">
      <S.StyledContentWrapper>
        <S.StyledImageListWrapper>
          <Skeleton count={1} width={"40vw"} height={"35vw"}/>
          <S.StyledImageGrid>
            <Skeleton count={1} width={"100%"} height={"100%"}/>
            <Skeleton count={1} width={"100%"} height={"100%"}/>
            <Skeleton count={1} width={"100%"} height={"100%"}/>
            <Skeleton count={1} width={"100%"} height={"100%"}/>
          </S.StyledImageGrid>
        </S.StyledImageListWrapper>

        <S.StyledMidSectionContainer>
          <S.StyledHomestayInfoContainer>
            <S.StyledHomestayBigInfoListWrapper>
              <Skeleton count={1} width={"180px"} height={"90px"}/>
              <Skeleton count={1} width={"180px"} height={"90px"}/>
              <Skeleton count={1} width={"180px"} height={"90px"}/>
            </S.StyledHomestayBigInfoListWrapper>
            <Skeleton count={1} width={"300px"} height={"30px"}/>
            <Skeleton count={1} width={"600px"} height={"20px"}/>
          </S.StyledHomestayInfoContainer>

          <Skeleton count={1} width={"420px"} height={"100px"} style={{ marginTop: "40px" }}/>
        </S.StyledMidSectionContainer>
      </S.StyledContentWrapper>
    </SkeletonTheme>
  )
}