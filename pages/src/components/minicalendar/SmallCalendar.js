import stl from "./SmallCalendar.module.scss";
import React from "react";

const MiniCalendar = () => {
  return (
    <div className={stl.smallCalendar}>
      <div className={stl.smallCalendarContent}>
        <div className={stl.smallCalendarDateWeek}>
          <div>m</div>
          <div>t</div>
          <div>w</div>
          <div>t</div>
          <div>f</div>
          <div>s</div>
          <div>s</div>
        </div>
        <div className={stl.smallCalendarDateWeek}>
          <div className={stl.firstWeek1}>01</div>
          <div className={stl.firstWeek2}>02</div>
          <div className={stl.firstWeek3}>03</div>
          <div className={stl.firstWeek4}>04</div>
          <div className={stl.firstWeek5}>05</div>
          <div className={stl.firstWeek6}>06</div>
          <div className={stl.firstWeek7}>07</div>
        </div>
        <div className={stl.smallCalendarDateWeek}>
          <div className={stl.secondWeek1}>08</div>
          <div className={stl.secondWeek2}>09</div>
          <div className={stl.secondWeek3}>10</div>
          <div className={stl.secondWeek4}>11</div>
          <div className={stl.secondWeek5}>12</div>
          <div className={stl.secondWeek6}>13</div>
          <div className={stl.secondWeek7}>14</div>
        </div>
        <div className={stl.smallCalendarDateWeek}>
          <div className={stl.thirWeek1}>15</div>
          <div className={stl.thirdWeek2}>16</div>
          <div className={stl.thirdWeek3}>17</div>
          <div className={stl.thirdWeek4}>18</div>
          <div className={stl.thirdWeek5}>19</div>
          <div className={stl.thirdWeek6}>20</div>
          <div className={stl.thirdWeek7}>21</div>
        </div>
        <div className={stl.smallCalendarDateWeek}>
          <div className={stl.forthWeek1}>22</div>
          <div className={stl.forthWeek2}>23</div>
          <div className={stl.forthWeek3}>24</div>
          <div className={stl.forthWeek4}>25</div>
          <div className={stl.forthWeek5}>26</div>
          <div className={stl.forthWeek6}>27</div>
          <div className={stl.forthWeek7}>28</div>
        </div>
        <div className={stl.smallCalendarDateWeek}>
          <div className={stl.fifthWeek1}>29</div>
          <div className={stl.fifthWeek2}>30</div>
          <div className={stl.fifthWeek3}>31</div>
          <div className={stl.fifthWeek4}>01</div>
          <div className={stl.fifthWeek5}>02</div>
          <div className={stl.fifthWeek6}>03</div>
          <div className={stl.fifthWeek7}>04</div>
        </div>
      </div>
    </div>
  );
};

export default MiniCalendar;
