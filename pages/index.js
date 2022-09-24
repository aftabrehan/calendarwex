import Link from "next/link";

import HomePage from "./home";

import stl from "./index.module.scss";

const Home = () => {
  return (
    <div className={stl.container}>
      <HomePage />
    </div>
  );
};

export default Home;
