"use client";

import { RangeKeyDict, Range, DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

interface CalendarProps {
  value: Range;
  disabledDates?: Date[];
  onChange: (value: RangeKeyDict) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  value,
  disabledDates,
  onChange,
}: CalendarProps) => {
  return (
    <DateRange
      rangeColors={["#262626"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      disabledDates={disabledDates}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
    />
  );
};

export default Calendar;
