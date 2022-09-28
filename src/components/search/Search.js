import stl from './Search.module.scss'
import SearchIcon from '../../assets/srchIcon.svg'
import Close from '../../assets/close.svg'

const Search = () => {
  const searchBoxHandler = () => {
    const searchInput = document.getElementById('srchInpt')
    const searchox = document.getElementById('srchbox')
    const svg = document.getElementById('srchIcon')
    const svg2 = document.getElementById('addIcon')
    searchox.style.background = '#F5F5F5'
    searchInput.focus()
    svg.style.display = 'none'
    svg2.style.display = 'block'
    searchInput.style.width = '204px'
    searchInput.style.padding = '0 6px'
  }

  const svgClickHandler = () => {
    const searchInput = document.getElementById('srchInpt')
    const searchox = document.getElementById('srchbox')
    console.log(searchInput)
    const svg = document.getElementById('srchIcon')
    console.log(svg)
    const svg2 = document.getElementById('addIcon')
    console.log(svg2)
    searchox.style.background = '#F5F5F5'
    searchInput.autofocus = false
    svg.style.display = 'block'
    svg2.style.display = 'none'
    // svg2.style.border = '3px solid red'
    console.log('clicked...')
    searchInput.style.width = '0'
    searchInput.style.padding = '0'
  }

  return (
    <div id="srchbox" className={stl.searchBox}>
      <input
        id="srchInpt"
        className={stl.searchInput}
        type="text"
        placeholder="Search"
      />
      <button id="srchBtn" className={stl.searchButton}>
        <SearchIcon onClick={searchBoxHandler} id="srchIcon" />
        <Close onClick={svgClickHandler} id="addIcon" className={stl.addIcon} />
      </button>
    </div>
  )
}

export default Search
