import stl from './Search.module.scss'
import SearchIcon from '../../assets/srchIcon.svg'
import Close from '../../assets/close.svg'

const Search = () => {
  const searchBoxHandler = () => {
    const searchInput = document.getElementById('srchInpt')
    const searchox = document.getElementById('srchbox')
    const svg = document.getElementById('srchIcon')
    const svg2 = document.getElementById('closeIcon')
    svg.style.display = 'none'
    svg2.style.display = 'block'
    searchox.style.background = '#F5F5F5'
    searchInput.style.width = '204px'
    searchInput.style.padding = '0 6px'
  }

  const inputHandler = () => {
    const searchInput = document.getElementById('srchInpt')
    searchInput.focus()
  }

  const svgClickHandler = () => {
    const searchInput = document.getElementById('srchInpt')
    const searchox = document.getElementById('srchbox')
    const svg = document.getElementById('srchIcon')
    const svg2 = document.getElementById('closeIcon')
    searchox.style.background = 'transparent'
    svg2.style.display = 'none'
    svg.style.display = 'block'
    searchInput.style.width = '0'
    searchInput.style.padding = '0'
    searchInput.value = ''
  }

  return (
    <div id="srchbox" className={stl.searchBox}>
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
