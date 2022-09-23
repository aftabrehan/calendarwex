import Link from "next/link";

import stl from "./index.module.scss";

const Home = () => {
  return (
    <div className={stl.container}>
      <div className={stl.Stories}>
        <h1>Stories</h1>
        <ul>
          <li>
            <Link href="/src/components/buttons/ButtonPrimary">
              ButtonPrimary
            </Link>
          </li>
          <li>
            <Link href="/src/components/buttons/ButtonSecondary">
              ButtonSecondary
            </Link>
          </li>
          <li>
            <Link href="/src/components/buttons/ButtonTertiary">
              ButtonTertiary
            </Link>
          </li>
          <li>
            <Link href="/src/components/minicalendar/">MiniCalendar</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
