import clsx from 'clsx'

import stl from './Search.module.scss'
import SearchIcon from '../../assets/srchIcon.svg'
import Close from '../../assets/close.svg'

const Search = ({ id, customClass, variant, width }) => {
  const searchBoxHandler = () => {
    const searchInput = document.getElementById('srchInpt')
    const searchbox = document.getElementById(id || 'srchbox')
    const svg = document.getElementById('srchIcon')
    const svg2 = document.getElementById('closeIcon')
    svg.style.display = 'none'
    svg2.style.display = 'block'
    searchbox.style.background = '#F5F5F5'
    searchInput.style.width = width
    searchInput.style.padding = '0 6px'
  }

  const inputHandler = () => {
    const searchInput = document.getElementById('srchInpt')
    searchInput.focus()
  }

  const svgClickHandler = () => {
    const searchInput = document.getElementById('srchInpt')
    const searchbox = document.getElementById(id)
    const svg = document.getElementById('srchIcon')
    const svg2 = document.getElementById('closeIcon')
    searchbox.style.background = 'transparent'
    svg2.style.display = 'none'
    svg.style.display = 'block'
    searchInput.style.width = '0'
    searchInput.style.padding = '0'
    searchInput.value = ''
  }

  return (
    <div id={id} className={clsx(stl.searchBox, customClass)}>
      <input
        onChange={inputHandler}
        id="srchInpt"
        className={stl.searchInput}
        type="text"
        placeholder="Search"
      />
      <button id="srchBtn" className={stl.searchButton}>
        <SearchIcon onClick={searchBoxHandler} id="srchIcon" />
        <Close
          onClick={svgClickHandler}
          id="closeIcon"
          className={stl.closeIcon}
        />
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
