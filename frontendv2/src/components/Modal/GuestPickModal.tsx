import React, { useCallback, useRef, useState, ChangeEvent, useEffect, useMemo } from 'react';
import * as S from "@style/comp/Modal/GuestPickModal.styled";
import * as M from '@motion/GuestPickModal.motion';
import { useRecoilState } from 'recoil';
import { guestPickedAtom, isShowGuestPickModalAtom } from '@store/app.atoms';
import { MdOutlineClose } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr';

interface Props {
  maxGuest: number;
}

export const GuestPickModal = (props: Props) => {
  const { maxGuest } = props;
  const [guestCountPicked, setGuestCountPicked] = useRecoilState(guestPickedAtom);
  const [guestCountCurr, setGuestCountCurr] = useState(guestCountPicked);
  const [petCount, setPetCount] = useState(0);
  const [isShowGuestPickModal, setIsShowGuestPickModal] = useRecoilState(isShowGuestPickModalAtom);
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleGuestAdd = useCallback(() => {
    if (guestCountCurr < maxGuest) {
      setGuestCountCurr((prev) => prev + 1)
      // setSearchParams((prev) => 
      //   Object.fromEntries([...prev, ["numberOfGuest", guestCount+1]])
      // )
    }
  }, [guestCountCurr])

  const handleGuestSub = useCallback(() => {
    if (guestCountCurr > 1) {
      setGuestCountCurr((prev) => prev - 1);
      // setSearchParams((prev) => 
      //   Object.fromEntries([...prev, ["numberOfGuest", guestCount-1]])
      // )
    }
  }, [guestCountCurr])

  const handlePetAdd = useCallback(() => {
    if (petCount < 5) {
      setPetCount((prev) => prev + 1)
    }
  }, [guestCountCurr])

  const handlePetSub = useCallback(() => {
    if (petCount > 0) {
      setPetCount((prev) => prev - 1);
    }
  }, [petCount])

  const handleContainerMouseClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (containerRef.current && modalRef.current) {
      if (!modalRef.current.contains(event.target as Node)) {
        setIsShowGuestPickModal(false)
      }
    }
  }, [containerRef.current, modalRef.current])

  const handleCloseButtonMouseClick = useCallback(() => {
    setIsShowGuestPickModal(false);
  }, [])

  const handleSaveButtonMouseClick = useCallback(() => {
    setGuestCountPicked(guestCountCurr);
    setSearchParams((prev) => 
      Object.fromEntries([...prev, ["numberOfGuest", guestCountCurr]])
    )
    setTimeout(() => {
      setIsShowGuestPickModal(false);
    }, 100);
  }, [guestCountCurr])

  return (
    <S.StyledContainer
      onClick={ handleContainerMouseClick }
      ref={ containerRef }>
      <M.MotionModalWrapper
        ref={ modalRef }
        isShow={ isShowGuestPickModal }>
        <S.StyledModalTopWrapper>
          <S.StyledIconCloseWrapper
            onClick={ handleCloseButtonMouseClick }>
            <MdOutlineClose size={"22px"}/>
          </S.StyledIconCloseWrapper>
        </S.StyledModalTopWrapper>

        <S.StyledModalHeader>Khách</S.StyledModalHeader>
        <S.StyledModalHint>Chỗ ở này được phép tối đa { maxGuest }, không tính em bé, được phép mang theo thú cưng.</S.StyledModalHint>

        <S.StyledOptionWrapper>
          <S.StyledOptionFlexLeft>
            <S.StyledOptionTitle>Người lớn</S.StyledOptionTitle>
            <S.StyledOptionHint>Từ 15 tuổi trở lên</S.StyledOptionHint>
          </S.StyledOptionFlexLeft>
          <S.StyledOptionFlexRight>
            <S.StyledButtonControl
              isDissable={ guestCountCurr <= 1 }
              onClick={ handleGuestSub }>
              <GrFormSubtract size={20}/>
            </S.StyledButtonControl>
            <S.StyledValue>{ guestCountCurr }</S.StyledValue>
            <S.StyledButtonControl
              isDissable={ guestCountCurr >=  maxGuest }
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
        <S.StyledLineHoz/>

        <S.StyledModalBottom>
          <S.StyledButtonAbort onClick={ handleCloseButtonMouseClick }>Hủy</S.StyledButtonAbort>
          <S.StyledButtonSave onClick={ handleSaveButtonMouseClick }>Lưu</S.StyledButtonSave>
        </S.StyledModalBottom>
      </M.MotionModalWrapper>
    </S.StyledContainer>
  )
}