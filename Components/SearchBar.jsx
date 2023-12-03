import React from 'react'

const SearchBar = ({setquery}) => {
  
  return (
    <div>
       <div className="search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search for a country..." onChange={(e)=>{setquery(e.target.value.toLowerCase())}} />
        </div>
    </div>
  )
}

export default SearchBar
