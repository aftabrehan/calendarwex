import stl from "./MiniCalendar.module.scss";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const MiniCalendar = () => {
  return (
    <div className={stl.miniCalendar}>
      <div className={stl.smallCalendarHeader}>
        <h2>January</h2>
      </div>
      <div className={stl.smallCalendar}></div>
    </div>
  );
};

export default MiniCalendar;
