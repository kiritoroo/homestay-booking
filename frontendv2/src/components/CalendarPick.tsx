import { endDatePickedAtom, startDatePickedAtom } from '@store/app.atoms';
import { dateRangePickedSelector } from '@store/app.selectors';
import React, { useCallback, useRef, useState, ChangeEvent, useEffect } from 'react';
import { LooseValue, OnArgs } from 'react-calendar/dist/cjs/shared/types';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as S from "@style/comp/CalendarPick.styled";
import Calendar from 'react-calendar';
import { useSearchParams } from 'react-router-dom';
import * as formatUtils from "@util/FormatUtils";

interface Props {}

export const CalendarPick = (props: Props) => {
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

  useEffect(() => {
    setSelectDateRange([startDatePicked, endDatePicked])
  }, [startDatePicked, endDatePicked])

  useEffect(() => {
    const paramStartDatePicked = searchParams.get("checkIn");
    const paramEndDatePicked = searchParams.get("checkOut");

    if (paramStartDatePicked != null && paramEndDatePicked != null) {
      const dateObjStart = formatUtils.stringStrike2Day(paramStartDatePicked);
      const dateObjEnd = formatUtils.stringStrike2Day(paramEndDatePicked);
      
      setStartDatePicked(dateObjStart);
      setEndDatePicked(dateObjEnd);
      setSelectDateRange([dateObjStart, dateObjEnd])
      setSearchParams({
        'checkIn': paramStartDatePicked,
        'checkOut': paramEndDatePicked});
    } else {
      setSelectDateRange([startDatePicked, endDatePicked])
      setSearchParams({
        'checkIn': dateRangePicked.formatStrikeStartDate?.toString() ?? "",
        'checkOut': dateRangePicked.formatStrikeEndDate?.toString() ?? ""});
    }

    return () => {
    }
  }, [])

  return (
    <S.StyledContainer>
      <S.StyledModalWrapper>
        <S.StyledHeaderWrapper>
          <S.StyledHeaderLeftWrapper>
            <S.StyledHeaderTitle> { dateRangePicked.dateCount ? dateRangePicked.dateCount + " đêm" : "Chọn ngày" } </S.StyledHeaderTitle>
            <S.StyledHeaderHint> { (startDatePicked && endDatePicked) ? (dateRangePicked.formatStringStartDate + " - " + dateRangePicked.formatStringEndDate) : "Thêm ngày để biết giá chính xác" } </S.StyledHeaderHint>
          </S.StyledHeaderLeftWrapper>
          <S.StyledHeaderRightWrapper></S.StyledHeaderRightWrapper>
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
        </S.StyledFooterWrapper>
      </S.StyledModalWrapper>
    </S.StyledContainer>
  )
}