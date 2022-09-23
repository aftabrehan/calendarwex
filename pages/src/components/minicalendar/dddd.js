import CalendarDaySmall from "./CalendarDaySmall";
import SmallCalendar from "./SmallCalendar";

import stl from "./index.module.scss";

const MiniCalendar = () => {
  return (
    <div className={stl.miniCalendarContainer}>
      <CalendarDaySmall />
      <SmallCalendar />
    </div>
  );
};

export default MiniCalendar;
