import React, { useCallback, useRef, useState, ChangeEvent, useEffect, useMemo } from 'react';
import * as S from "@style/comp/Modal/CalendarModal.styled";
import * as M from '@motion/CalendarModal.motion';
import { useRecoilState, useRecoilValue } from 'recoil';
import { endDatePickedAtom, isShowCalendarModalAtom, startDatePickedAtom } from '@store/app.atoms';
import { LooseValue, OnArgs } from 'react-calendar/dist/cjs/shared/types';
import { dateRangePickedSelector } from '@store/app.selectors';
import { useSearchParams } from 'react-router-dom';
import * as formatUtils from "@util/FormatUtils";
import Calendar from 'react-calendar';
import { MdOutlineClose } from 'react-icons/md';

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

  const dateRangePicked = useRecoilValue(dateRangePickedSelector);
  const [startDatePicked, setStartDatePicked] = useRecoilState(startDatePickedAtom);
  const [endDatePicked, setEndDatePicked] = useRecoilState(endDatePickedAtom);
  const [startDateCurr, setStartDateCurr] = useState(dateRangePicked.startDate);
  const [endDateCurr, setEndDateCurr] = useState(dateRangePicked.endDate);
  const formatStringStartDateCurr = useMemo<String | null>(() => (
    startDateCurr ? formatUtils.formatDateString(startDateCurr): null
  ), [startDateCurr]);
  const formatStringEndDateCurr = useMemo<String | null>(() => (
    endDateCurr ? formatUtils.formatDateString(endDateCurr): null
  ), [endDateCurr]);
  const dateCountCurr = useMemo<number | null>(() => (
    (startDateCurr && endDateCurr) ? Math.round((endDateCurr.getTime()-startDateCurr.getTime()) / (24 * 60 * 60 * 1000))-1 : null
  ), [startDateCurr, endDateCurr]);
  
  const [searchParams, setSearchParams] = useSearchParams();

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
          setStartDateCurr(null);
          setEndDateCurr(null);
          return
        }
        setEndDateCurr(event.value[1]);
        // (event.value.length > 1 && event.value[0] && event.value[1] &&
        //   setSearchParams((prev) =>
        //     Object.fromEntries([
        //       ...prev,
        //       ["checkOut", formatUtils.formatDateStrike((event.value as [Date, Date])[1])]
        //     ])
        // ));
      } else {
        if (event.value?.getDate() == startDateCurr?.getDate() || event.value?.getDate() == endDateCurr?.getDate()) {
          setSelectDateRange(null);
          setStartDateCurr(event.value);
          setEndDateCurr(null);
          return
        }
        setStartDateCurr(event.value as Date);
        // setSearchParams((prev) =>
        //   Object.fromEntries([
        //     ...prev,
        //     ["checkIn", formatUtils.formatDateStrike((event.value as Date))]
        //   ]));
      }
    }
  }, [startDateCurr, endDateCurr])

  const handleDateClear = useCallback(() => {
    setSelectDateRange(null);
    setStartDateCurr(null);
    setEndDateCurr(null);
    // setSearchParams({});
  }, [])

  const handleContainerMouseClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (containerRef.current && modalRef.current) {
      if (!modalRef.current.contains(event.target as Node)) {
        setIsShowCalendarModal(false)
      }
    }
  }, [containerRef.current, modalRef.current])

  useEffect(() => {
    setSelectDateRange([startDateCurr, endDateCurr]);

    return () => {
    }
  }, [])

  const handleCloseButtonMouseClick = useCallback(() => {
    setIsShowCalendarModal(false);
  }, [])

  const handleSaveButtonMouseClick = useCallback(() => {
    if (!startDateCurr || !endDateCurr) {
      return
    } else {
      setStartDatePicked(startDateCurr);
      setEndDatePicked(endDateCurr);
      setSearchParams((prev) =>
        Object.fromEntries([
          ...prev,
          ["checkIn", formatUtils.formatDateStrike(startDateCurr)],
          ["checkOut", formatUtils.formatDateStrike(endDateCurr)]
        ]));
    }
    setTimeout(() => {
      setIsShowCalendarModal(false);
    }, 100);
  }, [startDateCurr, endDateCurr])

  return (
    <S.StyledContainer
      onClick={ handleContainerMouseClick }
      ref={ containerRef }>
      <M.MotionModalWrapper
        ref={ modalRef }
        isShow={ isShowCalendarModal }>
        <S.StyledModalTopWrapper>
          <S.StyledIconCloseWrapper
            onClick={ handleCloseButtonMouseClick }>
            <MdOutlineClose size={"22px"}/>
          </S.StyledIconCloseWrapper>
        </S.StyledModalTopWrapper>

        <S.StyledHeaderWrapper>
          <S.StyledHeaderLeftWrapper>
            <S.StyledHeaderTitle> { dateCountCurr ? dateCountCurr + " đêm" : "Chọn ngày" } </S.StyledHeaderTitle>
            <S.StyledHeaderHint> { (startDateCurr && endDateCurr) ? (formatStringStartDateCurr + " - " + formatStringEndDateCurr) : "Thêm ngày để biết giá chính xác" } </S.StyledHeaderHint>
          </S.StyledHeaderLeftWrapper>
          <S.StyledHeaderRightWrapper>
            <S.StyledDateInfoWrapper>
              <S.StyledDateCheckInWrapper isPicking={startDateCurr == null}>
                <S.StyledDateLabel>NHẬN PHÒNG</S.StyledDateLabel>
                <S.StyledDateValue>{ startDateCurr ? dateRangePicked.formatSliceStartDate : "Thêm ngày" }</S.StyledDateValue>          
              </S.StyledDateCheckInWrapper>
              { startDateCurr && endDateCurr && <S.StyledLineVez/> }
              <S.StyledDateCheckOutWrapper isPicking={startDateCurr != null && endDateCurr == null}>
                <S.StyledDateLabel>TRẢ PHÒNG</S.StyledDateLabel>
                <S.StyledDateValue>{ endDateCurr ? dateRangePicked.formatSliceEndDate : "Thêm ngày" }</S.StyledDateValue>
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
            minDate={ startDateCurr ? startDateCurr : date }/>
        </S.StyledCalendarWrapper>

        <S.StyledFooterWrapper>
          <S.StyledClearDate onClick={ handleDateClear }>Xóa ngày</S.StyledClearDate>
          <S.StyledClose isDisable={!startDateCurr || !endDateCurr} onClick={ handleSaveButtonMouseClick }>Lưu</S.StyledClose>
        </S.StyledFooterWrapper>
      </M.MotionModalWrapper>
    </S.StyledContainer>
  )
}