import React, { useState, useCallback, useMemo } from 'react';
import { IHomestaySchema } from '@store/homestay/homestay.schema';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import * as S from '@style/comp/HomestayCard.styled';
import * as M from '@motion/HomestayCard.motion';
import { AnimatePresence } from 'framer-motion';
import { BiDollar } from "react-icons/bi";
import { BsStarFill, BsFillHeartFill } from "react-icons/bs";

interface Props {
  homestay: IHomestaySchema
}

export const HomestayCard = (props: Props) => {
  const { homestay } = props;

  const [isShowImageControl, setIsShowImageControl] = useState(false);
  const images = useMemo<string[]>(() => [
    homestay.main_image,
    homestay.first_image,
    homestay.second_image,
    homestay.third_image
  ], [homestay]);
  const [currImageIndex, setCurrImageIndex] = useState(0);
  const maxImageIndex = useMemo<number>(() => images.length, [images]);

  const cityName = useMemo<string>(() => {
    const startIndex = homestay.address.toLocaleLowerCase().indexOf('thành phố') + 'thành phố'.length;
    return 'Thành phố ' + homestay.address.substring(startIndex).trim();
  }, [homestay])

  const handleMouseEnter = useCallback(() => {
    setIsShowImageControl(true);
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsShowImageControl(false);
  }, [])

  const handleBeforeButtonClick = useCallback(() => {
    setCurrImageIndex((prev) => (prev - 1) );
  }, [])

  const handleNextButtonClick = useCallback(() => [
    setCurrImageIndex((prev) => (prev + 1))
  ], [])

  return (
    <S.StyledContainer
      onMouseEnter={ handleMouseEnter }
      onMouseLeave={ handleMouseLeave }>
      <S.StyledImageWrapper>
        <S.StyledImageList
          imageIndex={ currImageIndex }>
          { images.map((url, index) => (
            <S.StyledImage key={ index } src={ url }/>
          )) }
        </S.StyledImageList>

        <S.StyledHeartWrapper>
          <BsFillHeartFill size={"15px"} color={"#7D97B8"}/>
        </S.StyledHeartWrapper>
        
        <AnimatePresence>
        { isShowImageControl &&
          <React.Fragment>
            { currImageIndex > 0 &&
              <M.MotionBeforeButton
                onClick={ handleBeforeButtonClick }>
                <MdNavigateBefore size={"25px"} color={"#525252"}/>
              </M.MotionBeforeButton> }

            { currImageIndex < (maxImageIndex - 1) &&
              <M.MotionNextButton
                onClick={ handleNextButtonClick }>
                <MdNavigateNext size={"25px"} color={"#525252"}/>
              </M.MotionNextButton> }
          </React.Fragment> }
        </AnimatePresence>

        <S.StyledDotIndexWrapper>
          { Array.from({ length: maxImageIndex}, (_, index: number) => (
            <S.StyledDotIndex
              key={ index }
              isCurrIndex={ currImageIndex == index }/>
          )) }
        </S.StyledDotIndexWrapper>
        
        <S.StyledGradientBottom/>
      </S.StyledImageWrapper>
      
      <S.StyledFirstInfoWrapper>
        <S.StyledCity>{ cityName }</S.StyledCity>
      
      <S.StyledRatingWrapper>
        <BsStarFill color="#7D97B8"/> 
        <S.StyledRating>5,0</S.StyledRating>
      </S.StyledRatingWrapper>
      </S.StyledFirstInfoWrapper>
      <S.StyledPriceWrapper>
        <BiDollar size={"18px"} color="#252525"/>
        <S.StyledPrice>{ homestay.price }</S.StyledPrice> &nbsp;/ đêm
      </S.StyledPriceWrapper>
    </S.StyledContainer>
  )
}