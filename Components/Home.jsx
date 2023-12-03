import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useTheme } from "../hooks/useTheme";

const Home = () => {
  const [query, setquery] = useState("");
  const [isdark] = useTheme();

  return (
    <>
      <main className={` ${isdark ? "dark" : ""}`}>
        <div className="search-filter-container">
          <SearchBar setquery={setquery} />
          <SelectMenu setquery={setquery} />
        </div>
        <CountriesList query={query} />
      </main>
    </>
  );
};

export default Home;
