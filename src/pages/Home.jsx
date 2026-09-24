import countries from "../../data.json";
import { useState } from "react";

import NavBar from "../components/NavBar";
import CountryCard from "../components/CountryCard";
import FilterByRegion from "../components/FilterByRegion";
import SearchBar from "../components/SearchBar";
function Home() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  function handlePrevClick() {
    setPageNumber((prev) => prev - 1);
  }

  function handleNextClick() {
    setPageNumber((prev) => prev + 1);
  }

  function onFilter(event) {
    setFiltered(event.target.value);
    setPageNumber(1);
  }

  function onSearch(event) {
    setSearch(event.target.value);
    setPageNumber(1);
  }

  let countriesFiltered = countries;

  if (search !== "") {
    countriesFiltered = countriesFiltered.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  if (filtered !== "") {
    countriesFiltered = countriesFiltered.filter(
      (country) => country.region.toLowerCase() === filtered.toLowerCase(),
    );
  }

  return (
    <>
      <NavBar />

      <main className="mx-4 mb-10 flex flex-col gap-y-10 md:mx-10 lg:mx-20 xl:mx-[159px]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SearchBar onChange={onSearch} value={search} />

          <FilterByRegion onChange={onFilter} value={filtered} />
        </div>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {countriesFiltered
            .slice((pageNumber - 1) * 10, pageNumber * 10)
            .map((country) => (
              <CountryCard
                key={country.alpha3Code}
                countryName={country.name}
                population={country.population.toLocaleString()}
                region={country.region}
                capital={country.capital}
                imgSrc={country.flags.svg}
                numericCode={country.numericCode}
              />
            ))}
        </div>

        <div className="flex items-center justify-center gap-x-3">
          <button
            onClick={handlePrevClick}
            disabled={pageNumber === 1}
            className="rounded-lg border border-border bg-surface px-5 py-2.5"
          >
            ← Prev
          </button>

          <button
            onClick={handleNextClick}
            className="rounded-lg border border-border bg-surface px-5 py-2.5"
          >
            Next →
          </button>
        </div>
      </main>
    </>
  );
}

export default Home;
