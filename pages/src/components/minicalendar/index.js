import Link from "next/link";

import stl from "./index.module.scss";

const MiniCalendar = () => {
  return (
    <div className={stl.wrapper}>
      <Link href="minicalendar/CalendarDaySmall">
        <a className={stl.link}>CalendarDaySmall</a>
      </Link>
      <Link href="minicalendar/SmallCalendar">
        <a className={stl.link}>SmallCalendar</a>
      </Link>
    </div>
  );
};

export default MiniCalendar;
