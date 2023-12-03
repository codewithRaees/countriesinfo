import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryListShimmer from "./CountryListShimmer";
// import CountriesData from '../CountriesData'

CountriesList = ({ query }) => {
  const [CountriesData, setCountriesData] = useState([]);
 

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);

  return (
    <>
      {!CountriesData.length ? (
        <CountryListShimmer />
      ) : (
        <div className="countries-container">
          {CountriesData.filter((country) =>
            country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
          ).map((country, id) => {
            return (
              <CountryCard
                key={id}
                country={country.name.common}
                population={country.population}
                region={country.region}
                flag={country.flags.svg}
                capital={country.capital}
                data={country}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default CountriesList;
