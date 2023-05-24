import React, { useCallback, useRef, useState, useEffect } from "react";
import * as S from "@style/comp/Popup/GuestPickPopup.styled";
import { GrFormSubtract, GrFormAdd } from "react-icons/gr";
import { useRecoilState } from "recoil";
import { guestPickedAtom, isShowGuestPickPopupAtom } from "@store/app.atoms";
import { useSearchParams } from "react-router-dom";

interface Props {
  maxGuest: number;
}

export const GuestPickPopup = (props: Props) => {
  const { maxGuest } = props;
  const [guestCount, setGuestCount] = useRecoilState(guestPickedAtom);
  const [petCount, setPetCount] = useState(0);
  const [isShowPopup, setIsShowPopup] = useRecoilState(isShowGuestPickPopupAtom);
  const containerRef = useRef<HTMLDivElement>(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleGuestAdd = useCallback(() => {
    if (guestCount < maxGuest) {
      setGuestCount((prev) => prev + 1)
      setSearchParams((prev) => 
        Object.fromEntries([...prev, ["numberOfGuest", guestCount+1]])
      )
    }
  }, [guestCount])

  const handleGuestSub = useCallback(() => {
    if (guestCount > 1) {
      setGuestCount((prev) => prev - 1);
      setSearchParams((prev) => 
        Object.fromEntries([...prev, ["numberOfGuest", guestCount-1]])
      )
    }
  }, [guestCount])

  const handlePetAdd = useCallback(() => {
    if (petCount < 5) {
      setPetCount((prev) => prev + 1)
    }
  }, [guestCount])

  const handlePetSub = useCallback(() => {
    if (petCount > 0) {
      setPetCount((prev) => prev - 1);
    }
  }, [petCount])

  const handleClosePopup = useCallback((event: MouseEvent) => {
    const notAllowedIds = ["guestpick-popup"];
    if (containerRef.current) {
      if (!containerRef.current.contains(event.target as Node) 
        && !notAllowedIds.includes((event.target as HTMLElement).id)
      ) {
        setIsShowPopup(false);
      }
    }
  }, [containerRef.current])

  useEffect(() => {
    document.addEventListener("click", (e) => handleClosePopup(e))

    return () => {
      document.removeEventListener("click", (e) => handleClosePopup(e))
    }
  }, [])

  const handleCloseButtonMouseClick = useCallback(() => {
    setIsShowPopup(false);
  }, [])

  return (
    <S.StyledContainer ref={ containerRef }>
      <S.StyledOptionWrapper>
        <S.StyledOptionFlexLeft>
          <S.StyledOptionTitle>Người lớn</S.StyledOptionTitle>
          <S.StyledOptionHint>Từ 15 tuổi trở lên</S.StyledOptionHint>
        </S.StyledOptionFlexLeft>
        <S.StyledOptionFlexRight>
          <S.StyledButtonControl
            isDissable={ guestCount <= 1 }
            onClick={ handleGuestSub }>
            <GrFormSubtract size={20}/>
          </S.StyledButtonControl>
          <S.StyledValue>{ guestCount }</S.StyledValue>
          <S.StyledButtonControl
            isDissable={ guestCount >=  maxGuest }
            onClick={ handleGuestAdd }>
            <GrFormAdd size={20}/>
          </S.StyledButtonControl>
        </S.StyledOptionFlexRight>
      </S.StyledOptionWrapper>

      <S.StyledOptionWrapper>
        <S.StyledOptionFlexLeft>
          <S.StyledOptionTitle>Thú cưng</S.StyledOptionTitle>
          <S.StyledOptionHint>Bạn sẽ mang theo thú cưng?</S.StyledOptionHint>
        </S.StyledOptionFlexLeft>
        <S.StyledOptionFlexRight>
          <S.StyledButtonControl
            isDissable={ petCount <= 0 }
            onClick={ handlePetSub }> 
            <GrFormSubtract size={20}/>
          </S.StyledButtonControl>
          <S.StyledValue>{ petCount }</S.StyledValue>
          <S.StyledButtonControl
            isDissable={ petCount >=5 }
            onClick={ handlePetAdd }>
            <GrFormAdd size={20}/>
          </S.StyledButtonControl>
        </S.StyledOptionFlexRight>
      </S.StyledOptionWrapper>

      <S.StyledHint>Chỗ ở này được phép tối đa { maxGuest }, không tính em bé, được phép mang theo thú cưng.</S.StyledHint>
      <S.StyledButtonClose onClick={ handleCloseButtonMouseClick }>Đóng</S.StyledButtonClose>
    </S.StyledContainer>
  )
}