import Link from "next/link";

import stl from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={stl.wrapper}>
      <h3>
        Home Page ©copyright calendarar by{" "}
        <Link href="https//:github.com/appwex">@appwex</Link>
      </h3>
      <Link href="/src/components/stories">Go to Stories 🚀</Link>
    </div>
  );
};

export default HomePage;
