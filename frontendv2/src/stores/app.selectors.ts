import { selector } from "recoil";
import { endDatePickedAtom, guestPickedAtom, homestayPickedAtom, startDatePickedAtom } from "./app.atoms";
import * as formatUtils from "@util/FormatUtils";
import { authSelector } from "./user/user.selectors";

export const dateRangePickedSelector = selector(({
  key: 'startDatePickedSelector',
  get: ({get}) => {
    const startDate = get(startDatePickedAtom);
    const endDate = get(endDatePickedAtom);

    const formatSliceStartDate: String | null = startDate ? formatUtils.formatDateSlice(startDate): null;
    const formatSliceEndDate: String | null = endDate ? formatUtils.formatDateSlice(endDate): null;
    const formatStrikeStartDate: String | null = startDate ? formatUtils.formatDateStrike(startDate): null;
    const formatStrikeEndDate: String | null = endDate ? formatUtils.formatDateStrike(endDate): null;
    const formatStringStartDate: String | null = startDate ? formatUtils.formatDateString(startDate): null;
    const formatStringEndDate: String | null = endDate ? formatUtils.formatDateString(endDate): null;
    const dateCount: number | null = (startDate && endDate) ? Math.round((endDate.getTime()-startDate.getTime()) / (24 * 60 * 60 * 1000))-1 : null;
    
    return {
      startDate,
      endDate,
      dateCount,
      formatSliceStartDate,
      formatSliceEndDate,
      formatStrikeStartDate,
      formatStrikeEndDate,
      formatStringStartDate,
      formatStringEndDate
    }
  }
}))

export const bookingInfoSelector = selector(({
  key: 'bookingInfoSelector',
  get: ({get}) => {
    const guestCount = get(guestPickedAtom);
    const homestayInfo = get(homestayPickedAtom);
    const dateInfo = get(dateRangePickedSelector);
    const user = get(authSelector);

    return {
      user,
      dateInfo,
      homestayInfo,
      guestCount
    }
  }
}))