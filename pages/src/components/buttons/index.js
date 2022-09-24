import Link from "next/link";

import stl from "./index.module.scss";

const Buttons = () => {
  return (
    <div className={stl.wrapper}>
      <Link href="buttons/ButtonPrimary">
        <a className={stl.link}>ButtonPrimary</a>
      </Link>
      <Link href="buttons/ButtonSecondary">
        <a className={stl.link}>ButtonSecondary</a>
      </Link>
      <Link href="buttons/ButtonTertiary">
        <a className={stl.link}>ButtonTertiary</a>
      </Link>
    </div>
  );
};

export default Buttons;
