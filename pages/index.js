import MiniCalendar from "../src/components/minicalendar/SmallCalendar";
import CalendarDaySmall from "../src/components/minicalendar/CalendarDaySmall";
import Buttons from "../src/components/buttons/Buttons";

import stl from "./index.module.scss";

const Home = () => {
  return (
    <div className={stl.container}>
      <Buttons />
      {/* <CalendarDaySmall />
      <MiniCalendar /> */}
    </div>
  );
};

export default Home;
