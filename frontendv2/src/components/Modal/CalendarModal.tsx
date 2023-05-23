import React, { useCallback, useRef, useState, ChangeEvent, useEffect } from 'react';
import * as S from "@style/comp/Modal/CalendarModal.styled";
import Calendar from "react-calendar";
import { LooseValue } from 'react-calendar/dist/cjs/shared/types';
import { OnArgs } from 'react-calendar/dist/cjs/shared/types';
import * as formatUtils from "@util/FormatUtils";
import { useRecoilState } from 'recoil';
import { endDatePickedAtom, isShowCalendarModalAtom, startDatePickedAtom } from '@store/app.atoms';

interface Props {}

export const CalendarModal = (props: Props) => {
  const [isShowCalendarModal, setIsShowCalendarModal] = useRecoilState(isShowCalendarModalAtom);
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const [date, setDate] = useState<Date>(new Date());
  const [selectDateRange, setSelectDateRange] = useState<LooseValue | undefined>(undefined)
  const [activeStartMonth, setActivateStartMonth] = useState<Date>(date)
  const [activeEndMonth, setActivateEndMonth] = useState<Date>(new Date(
    date.getFullYear(),
    date.getMonth()+1,
    date.getDate()));

  const [startDatePicked, setStartDatePicked] = useRecoilState(startDatePickedAtom);
  const [endDatePicked, setEndDatePicked] = useRecoilState(endDatePickedAtom);

  const handlePrevMonthClick = useCallback(() => {
    setActivateStartMonth((prev) => new Date(
      prev.getFullYear(),
      prev.getMonth()-1,
      prev.getDate()
    ));
    setActivateEndMonth((prev) => new Date(
      prev.getFullYear(),
      prev.getMonth()-1,
      prev.getDate()
    ));
  }, [])

  const handleNextMonthClick = useCallback(() => {
    setActivateStartMonth((prev) => new Date(
      prev.getFullYear(),
      prev.getMonth()+1,
      prev.getDate()
    ));
    setActivateEndMonth((prev) => new Date(
      prev.getFullYear(),
      prev.getMonth()+1,
      prev.getDate()
    ));
  }, [])

  const handleCalendarEvent = useCallback((event: OnArgs) => {
    if (event.action == "prev") {
      handlePrevMonthClick()
    }
    if (event.action == "next") {
      handleNextMonthClick()
    }

    if (event.action == "onChange") {
      if (Array.isArray(event.value)) {
        if (event.value[0]?.getDate() == event.value[1]?.getDate()) {
          setSelectDateRange(null);
          setStartDatePicked(null);
          setEndDatePicked(null);
          return
        }
        setEndDatePicked(event.value[1]);
        setTimeout(() => {
          setIsShowCalendarModal(false);
        }, 200);
      } else {
        if (event.value?.getDate() == startDatePicked?.getDate() || event.value?.getDate() == endDatePicked?.getDate()) {
          setSelectDateRange(null);
          setStartDatePicked(event.value);
          setEndDatePicked(null);
          return
        }
        setStartDatePicked(event.value as Date);
      }
    }
  }, [startDatePicked, endDatePicked])

  const handleDateClear = useCallback(() => {
    setSelectDateRange(null);
    setStartDatePicked(null);
    setEndDatePicked(null);
  }, [])

  const handleModalClose = useCallback((event: MouseEvent) => {
    // if (containerRef.current && modalRef.current) {
    //   if (!modalRef.current.contains(event.target as Node)) {
    //     setIsShowCalendarModal(false)
    //   }
    // }

    if (modalRef.current) {      
      if (!modalRef.current.contains(event.target as Node) && (event.target as HTMLElement).id != "calendar-popup") {
        setIsShowCalendarModal(false);
      }
    }
  }, [modalRef.current])

  useEffect(() => {
    setSelectDateRange([startDatePicked, endDatePicked])
    document.addEventListener("click", (e) => handleModalClose(e))

    return () => {
      document.removeEventListener("click", (e) => handleModalClose(e))
    }
  })

  const handleCloseButtonMouseClick = useCallback(() => {
    setIsShowCalendarModal(false);
  }, [])

  return (
    <S.StyledContainer ref={ containerRef }>
      <S.StyledModalWrapper ref={ modalRef }>
        <S.StyledHeaderWrapper>
          <S.StyledHeaderLeftWrapper>
            <S.StyledHeaderTitle>Chọn ngày</S.StyledHeaderTitle>
            <S.StyledHeaderHint>Thêm ngày để biết giá chính xác</S.StyledHeaderHint>
          </S.StyledHeaderLeftWrapper>
          <S.StyledHeaderRightWrapper>
            <S.StyledDateInfoWrapper>
              <S.StyledDateCheckInWrapper isPicking={startDatePicked == null}>
                <S.StyledDateLabel>NHẬN PHÒNG</S.StyledDateLabel>
                <S.StyledDateValue>{ startDatePicked ? formatUtils.formatDate(startDatePicked) : "Thêm ngày" }</S.StyledDateValue>          
              </S.StyledDateCheckInWrapper>
              { startDatePicked && endDatePicked && <S.StyledLineVez/> }
              <S.StyledDateCheckOutWrapper isPicking={startDatePicked != null && endDatePicked == null}>
                <S.StyledDateLabel>TRẢ PHÒNG</S.StyledDateLabel>
                <S.StyledDateValue>{ endDatePicked ? formatUtils.formatDate(endDatePicked) : "Thêm ngày" }</S.StyledDateValue>
              </S.StyledDateCheckOutWrapper>
            </S.StyledDateInfoWrapper>
          </S.StyledHeaderRightWrapper>
        </S.StyledHeaderWrapper>

        <S.StyledCalendarWrapper>
          <Calendar
            showDoubleView={true}
            locale='vn'
            value={selectDateRange}
            onChange={setSelectDateRange}
            prevLabel={ (activeStartMonth.getMonth() <= date.getMonth() && activeStartMonth.getFullYear() <= date.getFullYear()) ? null : "‹" }
            prev2Label={null}
            next2Label={null}
            showNeighboringMonth={false}
            showFixedNumberOfWeeks={false}
            activeStartDate={activeStartMonth}
            onActiveStartDateChange={(event) => handleCalendarEvent(event)}
            selectRange={ true }
            minDate={ startDatePicked ? startDatePicked : date }/>
        </S.StyledCalendarWrapper>

        <S.StyledFooterWrapper>
          <S.StyledClearDate onClick={handleDateClear }>Xóa ngày</S.StyledClearDate>
          <S.StyledClose onClick={ handleCloseButtonMouseClick }>Đóng</S.StyledClose>
        </S.StyledFooterWrapper>
      </S.StyledModalWrapper>
    </S.StyledContainer>
  )
} 