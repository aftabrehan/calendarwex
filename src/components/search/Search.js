import clsx from 'clsx'

import stl from './Search.module.scss'
import SearchIcon from '../../assets/srchIcon.svg'
import Close from '../../assets/close.svg'

const Search = ({ id, onClick, customClass, variant, width }) => {
  const searchBoxHandler = () => {
    const searchbox = document.getElementById(id || 'srchbox')
    const svg = document.getElementById('srchIcon')
    svg.style.display = 'none'
    searchbox.style.background = '#F5F5F5'
  }

  return (
    <div
      id={id}
      className={clsx(stl.searchBox, customClass)}
      onClick={() => {
        onClick()
      }}
    >
      <button id="srchBtn" className={stl.searchButton}>
        <SearchIcon id="srchIcon" />
      </button>
    </div>
  )
}

export default Search

Search.defaultProps = {
  arg: 'Search',
  id: 'srchbox',
  width: '204px',
}
