import stl from './Toolbar.module.scss'
import clsx from 'clsx'

import Button from 'components/button'

const Toolbar = () => {
  return (
    <div className={stl.toolbar}>
      <div className={stl.right}>
        <Button
          customClass={clsx(stl.openSidebar)}
          icon={
            <svg
              width="15"
              height="13"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.30952 2.80954H13.6905C13.9535 2.80954 14.1667 2.59636 14.1667 2.33335V1.14288C14.1667 0.879872 13.9535 0.666687 13.6905 0.666687H1.30952C1.04652 0.666687 0.833334 0.879872 0.833334 1.14288V2.33335C0.833334 2.59636 1.04652 2.80954 1.30952 2.80954ZM1.30952 7.57145H13.6905C13.9535 7.57145 14.1667 7.35826 14.1667 7.09526V5.90478C14.1667 5.64178 13.9535 5.42859 13.6905 5.42859H1.30952C1.04652 5.42859 0.833334 5.64178 0.833334 5.90478V7.09526C0.833334 7.35826 1.04652 7.57145 1.30952 7.57145ZM1.30952 12.3334H13.6905C13.9535 12.3334 14.1667 12.1202 14.1667 11.8572V10.6667C14.1667 10.4037 13.9535 10.1905 13.6905 10.1905H1.30952C1.04652 10.1905 0.833334 10.4037 0.833334 10.6667V11.8572C0.833334 12.1202 1.04652 12.3334 1.30952 12.3334Z"
                fill="#333333"
              />
            </svg>
          }
          variant="transparent"
          style={{ flex: 'none', grow: '0', order: '0' }}
        ></Button>
        <span>01 January 2022</span>
        <Button
          onClick={() => {
            const btn = document.getElementById('drpBtn')
            btn.style.display = 'none'
            const dropDown = document.getElementById('dropMenu')
            dropDown.style.opacity = '1'
            dropDown.style.height = '200px'
          }}
          id={'drpBtn'}
          customClass={clsx(stl.type)}
          label="Month"
          variant="bordered"
          type="checkbox"
          icon={
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.48185 12.3312L1.54798 6.39727C1.2618 6.11108 1.2618 5.6471 1.54798 5.36095L2.24007 4.66886C2.52577 4.38316 2.9888 4.38261 3.27517 4.66763L8.00003 9.37035L12.7248 4.66763C13.0112 4.38261 13.4743 4.38316 13.7599 4.66886L14.452 5.36095C14.7382 5.64713 14.7382 6.11111 14.452 6.39727L8.5182 12.3312C8.23202 12.6173 7.76804 12.6173 7.48185 12.3312Z"
                fill="#0C41FF"
              />
            </svg>
          }
        />
        <ul id="dropMenu" className={stl.drpDwn}>
          <li
            onClick={() => {
              const btn = document.getElementById('drpBtn')
              btn.style.display = 'flex'
              const dropDown = document.getElementById('dropMenu')
              dropDown.style.height = '0'
              dropDown.style.opacity = '0'
            }}
          >
            Day
          </li>
          <li
            onClick={() => {
              const btn = document.getElementById('drpBtn')
              btn.style.display = 'flex'
              const dropDown = document.getElementById('dropMenu')
              dropDown.style.height = '0'
              dropDown.style.opacity = '0'
            }}
          >
            Week
          </li>
          <li
            onClick={() => {
              const btn = document.getElementById('drpBtn')
              btn.style.display = 'flex'
              const dropDown = document.getElementById('dropMenu')
              dropDown.style.height = '0'
              dropDown.style.opacity = '0'
            }}
          >
            Month
          </li>
          <li
            onMouseUpCapture={() => {
              const btn = document.getElementById('drpBtn')
              btn.style.display = 'flex'
              const dropDown = document.getElementById('dropMenu')
              dropDown.style.height = '0'
              dropDown.style.opacity = '0'
            }}
          >
            Year
          </li>
        </ul>
      </div>
      <div className={stl.left}>
        <Button
          customClass={clsx(stl.srchBtn)}
          icon={
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.4842 12.3608L10.8881 9.76473C10.771 9.64756 10.6121 9.58246 10.4455 9.58246H10.021C10.7397 8.66328 11.1667 7.50714 11.1667 6.24945C11.1667 3.25756 8.74251 0.833313 5.75061 0.833313C2.75871 0.833313 0.334473 3.25756 0.334473 6.24945C0.334473 9.24135 2.75871 11.6656 5.75061 11.6656C7.0083 11.6656 8.16444 11.2385 9.08362 10.5199V10.9443C9.08362 11.111 9.14872 11.2698 9.26589 11.387L11.862 13.9831C12.1068 14.2278 12.5026 14.2278 12.7447 13.9831L13.4816 13.2462C13.7264 13.0014 13.7264 12.6056 13.4842 12.3608ZM5.75061 9.58246C3.90964 9.58246 2.4176 8.09302 2.4176 6.24945C2.4176 4.40848 3.90704 2.91644 5.75061 2.91644C7.59158 2.91644 9.08362 4.40588 9.08362 6.24945C9.08362 8.09042 7.59418 9.58246 5.75061 9.58246Z" />
            </svg>
          }
          variant="bordered"
        />
        <Button
          variant="fill"
          icon={
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.99998 1.83331C4.31718 1.83331 1.33331 4.81718 1.33331 8.49998C1.33331 12.1828 4.31718 15.1666 7.99998 15.1666C11.6828 15.1666 14.6666 12.1828 14.6666 8.49998C14.6666 4.81718 11.6828 1.83331 7.99998 1.83331ZM11.8709 9.25267C11.8709 9.43009 11.7258 9.57525 11.5484 9.57525H9.07525V12.0484C9.07525 12.2258 8.93009 12.3709 8.75267 12.3709H7.24729C7.06987 12.3709 6.92471 12.2258 6.92471 12.0484V9.57525H4.45159C4.27417 9.57525 4.12901 9.43009 4.12901 9.25267V7.74729C4.12901 7.56987 4.27417 7.42471 4.45159 7.42471H6.92471V4.95159C6.92471 4.77417 7.06987 4.62901 7.24729 4.62901H8.75267C8.93009 4.62901 9.07525 4.77417 9.07525 4.95159V7.42471H11.5484C11.7258 7.42471 11.8709 7.56987 11.8709 7.74729V9.25267Z" />
            </svg>
          }
          customClass={clsx(stl.addEvent)}
          label="Add Event"
        />
      </div>
    </div>
  )
}

export default Toolbar
