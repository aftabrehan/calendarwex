import Link from "next/link";

import stl from "./Stories.module.scss";

const StoriesLinks = () => {
  return (
    <div className={stl.wrapper}>
      <Link href="buttons">Buttons</Link>
      <Link href="minicalendar">MiniCalendar</Link>
    </div>
  );
};

export default StoriesLinks;
