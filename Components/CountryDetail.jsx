import React, { useEffect, useState } from 'react'
import './CountryDetail.css'
import { Link, useLocation,useParams } from 'react-router-dom'
import CountryDetailShimmer from './CountryDetailShimmer'
import { useTheme } from '../hooks/useTheme'

const CountryDetail = () => {
    //const countryName = new URLSearchParams(location.search).get('name')
    const param = useParams()
    const countryName = param.country
    
    const[CountryData , setCountryData]=useState(null)
    const[NotFound , setNotFound]=useState(false)
    const {state} = useLocation()
    const [isdark] = useTheme()
   
  
    
  // Update Country Data Function
  function UpdateCountryData(data){
    setCountryData(
      {
          name: data.name.common || data.name,
          nativeName: Object.values(data.name.nativeName || {})[0]?.common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          tld: data.tld,
          currencies: Object.values(data.currencies || {})
          .map((currency)=>currency.name)
          .join(' , '),
          languages: Object.values(data.languages || {}).join(' , '),
          flag: data.flags.svg,
          borders: []
      }  
      
  ) 
  if(!data.borders){
      data.borders=[]
  }
     Promise.all( data.borders.map((border)=>{
       return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      .then((res)=> res.json())
      .then(([borderCountry])=> borderCountry.name.common)
   }))
   .then((borders)=>{
    setTimeout(() => {
      setCountryData((prevstate)=> ({...prevstate,borders}))
    }, );
})
  }
    // Go back button function.
    const goback=()=>{
        history.back()
    }
    //End go back function
        useEffect(()=>{
          if(state){
            UpdateCountryData(state)
            return
          }
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then(res =>res.json())
        .then(([data]) =>{
          UpdateCountryData(data)
        } )
        
        .catch((err)=>{
            setNotFound(true)
        })
    },[countryName])
    if(NotFound)
    {
        return  <div>Country Not Found</div>
        
    }
   
  return (
    
   <main className={` ${isdark? 'dark':''}`}>
        <div className="country-details-container">
          <span className="back-button" onClick={goback}>
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
          </span>
          {CountryData === null ? (
        <CountryDetailShimmer/>
        ):
    (
          <div className="country-details">
            <img src={CountryData.flag} alt={`${CountryData.name} Flag`} />
            <div className="details-text-container">
              <h1>{CountryData.name}</h1>
              <div className="details-text">
                <p><b>Native Name: </b><span className="native-name">{CountryData.nativeName || CountryData.name}</span></p>
                <p><b>Population: </b><span className="population">{CountryData.population.toLocaleString('en-IN')}</span></p>
                <p><b>Region: </b><span className="region">{CountryData.region}</span></p>
                <p><b>Sub Region: </b><span className="sub-region">{CountryData.subregion}</span></p>
                <p><b>Capital: </b><span className="capital">{CountryData.capital?.join( ' , ')}</span></p>
                <p>
                  <b>Top Level Domain: </b><span className="top-level-domain">{CountryData.tld}</span>
                </p>
                <p><b>Currencies: </b><span className="currencies">{CountryData.currencies}</span></p>
                <p><b>Languages: </b><span className="languages">{CountryData.languages}</span></p>
              </div>
             
              {CountryData.borders.length !== 0  && <div className="border-countries">
                
                <b>Border Countries: </b>&nbsp;
                {
              CountryData.borders.map((border,i)=> <Link key={i} to={`/${border}`}>{border}</Link> )
                }
                </div>
                }
            </div>
          </div>
          )}
        </div>
      </main>
    
  )
}

export default CountryDetail
