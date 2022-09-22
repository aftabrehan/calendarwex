import MiniCalendar from "../src/components/minicalendar/SmallCalendar";
import CalendarDaySmall from "../src/components/minicalendar/CalendarDaySmall";

import stl from "./Index.module.scss";

const Home = () => {
  return (
    <div className={stl.container}>
      <CalendarDaySmall />
      <MiniCalendar />
    </div>
  );
};

export default Home;
