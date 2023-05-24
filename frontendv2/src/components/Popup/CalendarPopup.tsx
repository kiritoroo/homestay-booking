import React, { useCallback, useRef, useState, ChangeEvent, useEffect } from 'react';
import * as S from "@style/comp/Popup/CalendarPopup.styled";
import Calendar from "react-calendar";
import { LooseValue } from 'react-calendar/dist/cjs/shared/types';
import { OnArgs } from 'react-calendar/dist/cjs/shared/types';
import * as formatUtils from "@util/FormatUtils";
import { useRecoilState, useRecoilValue } from 'recoil';
import { endDatePickedAtom, isShowCalendarPopupAtom, startDatePickedAtom } from '@store/app.atoms';
import { dateRangePickedSelector } from '@store/app.selectors';
import { useSearchParams } from 'react-router-dom';

interface Props {}

export const CalendarPopup = (props: Props) => {
  const [isShowCalendarPopup, setisShowCalendarPopup] = useRecoilState(isShowCalendarPopupAtom);
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
  const dateRangePicked = useRecoilValue(dateRangePickedSelector);

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
          setStartDatePicked(null);
          setEndDatePicked(null);
          return
        }
        setEndDatePicked(event.value[1]);
        (event.value[0] && event.value[1] &&  
          setSearchParams({
            'checkIn': formatUtils.formatDateStrike(event.value[0]!),
            'checkOut': formatUtils.formatDateStrike(event.value[1]!)}));
        setTimeout(() => {
          setisShowCalendarPopup(false);
        }, 200);
      } else {
        if (event.value?.getDate() == startDatePicked?.getDate() || event.value?.getDate() == endDatePicked?.getDate()) {
          setSelectDateRange(null);
          setStartDatePicked(event.value);
          setEndDatePicked(null);
          return
        }
        setStartDatePicked(event.value as Date);
        setSearchParams({'checkIn': formatUtils.formatDateStrike(event.value!)});
      }
    }
  }, [startDatePicked, endDatePicked])

  const handleDateClear = useCallback(() => {
    setSelectDateRange(null);
    setStartDatePicked(null);
    setEndDatePicked(null);
    setSearchParams({});
  }, [])

  const handleModalClose = useCallback((event: MouseEvent) => {
    // if (containerRef.current && modalRef.current) {
    //   if (!modalRef.current.contains(event.target as Node)) {
    //     setisShowCalendarPopup(false)
    //   }
    // }
    const notAllowedIds = ["calendar-popup1", "calendar-popup2"];

    if (modalRef.current) {      
      if (!modalRef.current.contains(event.target as Node) 
        && !notAllowedIds.includes(((event.target as HTMLElement).id)) 
      ) {
        setisShowCalendarPopup(false);
      }
    }
  }, [modalRef.current])

  useEffect(() => {
    setSelectDateRange([startDatePicked, endDatePicked]);
    document.addEventListener("click", (e) => handleModalClose(e));

    return () => {
      document.removeEventListener("click", (e) => handleModalClose(e));
    }
  }, [])

  const handleCloseButtonMouseClick = useCallback(() => {
    setisShowCalendarPopup(false);
  }, [])

  return (
    <S.StyledContainer ref={ containerRef }>
      <S.StyledModalWrapper ref={ modalRef }>
        <S.StyledHeaderWrapper>
          <S.StyledHeaderLeftWrapper>
            <S.StyledHeaderTitle> { dateRangePicked.dateCount ? dateRangePicked.dateCount + " đêm" : "Chọn ngày" } </S.StyledHeaderTitle>
            <S.StyledHeaderHint> { (startDatePicked && endDatePicked) ? (dateRangePicked.formatStringStartDate + " - " + dateRangePicked.formatStringEndDate) : "Thêm ngày để biết giá chính xác" } </S.StyledHeaderHint>
          </S.StyledHeaderLeftWrapper>
          <S.StyledHeaderRightWrapper>
            <S.StyledDateInfoWrapper>
              <S.StyledDateCheckInWrapper isPicking={startDatePicked == null}>
                <S.StyledDateLabel>NHẬN PHÒNG</S.StyledDateLabel>
                <S.StyledDateValue>{ startDatePicked ? dateRangePicked.formatSliceStartDate : "Thêm ngày" }</S.StyledDateValue>          
              </S.StyledDateCheckInWrapper>
              { startDatePicked && endDatePicked && <S.StyledLineVez/> }
              <S.StyledDateCheckOutWrapper isPicking={startDatePicked != null && endDatePicked == null}>
                <S.StyledDateLabel>TRẢ PHÒNG</S.StyledDateLabel>
                <S.StyledDateValue>{ endDatePicked ? dateRangePicked.formatSliceEndDate : "Thêm ngày" }</S.StyledDateValue>
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