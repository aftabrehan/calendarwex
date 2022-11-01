import { useEffect } from 'react'
import PropTypes from 'prop-types'

export const useOnClickOutside = (onClick, ref) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClick, ref])
}

useOnClickOutside.propTypes = {
  onClick: PropTypes.func.isRequired,
  ref: PropTypes.object.isRequired,
}
