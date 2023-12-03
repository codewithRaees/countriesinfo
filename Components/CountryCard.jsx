import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({country,flag,name,population,region,capital,data}) => {
  return (
  
        <Link className="country-card" to={`/${country}`} state={data}>
          <div className="flage-container">
          <img className='flagPic' src={flag} alt={`${name} +  Flag`}/>
          </div>
          <div className="card-text">
              <h3 className="card-title">{country}</h3>
              <p><b>Population: </b>{population.toLocaleString('en-IN')}</p>
              <p><b>Region: </b>{region}</p>
              <p><b>Capital: </b>{capital?.[0]}</p>
          </div>
  </Link>
   
  )
}

export default CountryCard
