import stl from "./ButtonPrimary.module.scss";

const ButtonFilled = () => {
  let val;

  return (
    <div className={stl.btnPrimary}>
      <select
        onClick={(e) => {
          const value = e.target.value;
          if (value === "primary") {
            document.getElementById("btnOnlyText").style.display = "none";
            document.getElementById("btnOnlyIcon").style.display = "none";
            const btn = document.getElementById("btnDefault");
            btn.style.display = "flex";
            btn.className = "";
            btn.classList.add(stl.btnDefault);
          } else if (value === "hoverable") {
            document.getElementById("btnOnlyText").style.display = "none";
            document.getElementById("btnOnlyIcon").style.display = "none";
            const btn = document.getElementById("btnDefault");
            btn.style.display = "flex";
            btn.className = "";
            btn.classList.add(stl.hoverable);
          } else if (value === "disabled") {
            document.getElementById("btnOnlyText").style.display = "none";
            document.getElementById("btnOnlyIcon").style.display = "none";
            const btn = document.getElementById("btnDefault");
            btn.style.display = "flex";
            btn.className = "";
            btn.classList.add(stl.disabled);
          } else if (value === "btnOnlyText") {
            document.getElementById("btnDefault").style.display = "none";
            document.getElementById("btnOnlyIcon").style.display = "none";
            const btn = document.getElementById("btnOnlyText");
            btn.className = "";
            btn.style.display = "flex";
            btn.classList.add(stl.btnOnlyText);
          } else if (value === "btnOnlyTextHoverable") {
            document.getElementById("btnDefault").style.display = "none";
            document.getElementById("btnOnlyIcon").style.display = "none";
            const btn = document.getElementById("btnOnlyText");
            btn.className = "";
            btn.style.display = "flex";
            btn.classList.add(stl.btnOnlyTextHoverable);
          } else if (value === "btnOnlyTextDisabled") {
            document.getElementById("btnDefault").style.display = "none";
            document.getElementById("btnOnlyIcon").style.display = "none";
            const btn = document.getElementById("btnOnlyText");
            btn.className = "";
            btn.style.display = "flex";
            btn.classList.add(stl.btnOnlyTextDisabled);
          } else if (value === "btnOnlyIcon") {
            document.getElementById("btnDefault").style.display = "none";
            document.getElementById("btnOnlyText").style.display = "none";
            const btn = document.getElementById("btnOnlyIcon");
            btn.className = "";
            btn.style.display = "flex";
            btn.classList.add(stl.btnOnlyIcon);
          } else if (value === "btnOnlyIconHoverable") {
            document.getElementById("btnDefault").style.display = "none";
            document.getElementById("btnOnlyText").style.display = "none";
            const btn = document.getElementById("btnOnlyIcon");
            btn.className = "";
            btn.style.display = "flex";
            btn.classList.add(stl.btnOnlyIconHoverable);
          } else if (value === "btnOnlyIconDisabled") {
            document.getElementById("btnDefault").style.display = "none";
            document.getElementById("btnOnlyText").style.display = "none";
            const btn = document.getElementById("btnOnlyIcon");
            btn.className = "";
            btn.style.display = "flex";
            btn.classList.add(stl.btnOnlyIconDisabled);
          }
        }}
        className={stl.slct}
        onChange={(e) => {
          val = e.target.value;
        }}
        value={val}
      >
        <option value="">select</option>
        <option value="primary">Primary</option>
        <option value="hoverable">Hoverable</option>
        <option value="disabled">Disabled</option>
        <option value="btnOnlyText">ButtonOnlyText</option>
        <option value="btnOnlyTextHoverable">ButtonOnlyTextHoverable</option>
        <option value="btnOnlyTextDisabled">ButtonOnlyTextDisabled</option>
        <option value="btnOnlyIcon">ButtonOnlyIcon</option>
        <option value="btnOnlyIconHoverable">ButtonOnlyIconHoverable</option>
        <option value="btnOnlyIconDisabled">ButtonOnlyIconDisabled</option>
      </select>
      <button id="btnDefault" className={stl.btnDefault}>
        <span className={stl.btnText}>Button</span>
        <div id="btnIcon" className={stl.btnIcon}>
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.7285 0.91743L0.660582 7.87957C0.189322 8.15035 0.249206 8.80647 0.717862 9.00435L3.48554 10.1656L10.9658 3.57315C11.109 3.44557 11.3121 3.64084 11.1897 3.78925L4.91754 11.4309V13.5269C4.91754 14.1413 5.65958 14.3835 6.02409 13.9383L7.6774 11.9256L10.9215 13.2847C11.2913 13.441 11.713 13.2092 11.7807 12.8109L13.6554 1.56313C13.7439 1.0372 13.1789 0.657065 12.7285 0.91743Z" />
          </svg>
        </div>
      </button>
      <button id="btnOnlyText" className={stl.btnOnlyText}>
        <span className={stl.btnText}>Button</span>
      </button>
      <button id="btnOnlyIcon" className={stl.btnOnlyIcon}>
        <div id="btnIcon" className={stl.btnIcon}>
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.7285 0.91743L0.660582 7.87957C0.189322 8.15035 0.249206 8.80647 0.717862 9.00435L3.48554 10.1656L10.9658 3.57315C11.109 3.44557 11.3121 3.64084 11.1897 3.78925L4.91754 11.4309V13.5269C4.91754 14.1413 5.65958 14.3835 6.02409 13.9383L7.6774 11.9256L10.9215 13.2847C11.2913 13.441 11.713 13.2092 11.7807 12.8109L13.6554 1.56313C13.7439 1.0372 13.1789 0.657065 12.7285 0.91743Z" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default ButtonFilled;
