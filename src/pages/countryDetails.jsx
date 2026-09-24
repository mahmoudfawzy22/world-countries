import { Link, useParams } from "react-router-dom";

import countries from "../../data.json";
import NavBar from "../components/NavBar";

function CountryDetails() {
  const { numericCode } = useParams();

  const country = countries.find(
    (country) => country.numericCode === numericCode,
  );

  if (!country) {
    return <h1>Country not found</h1>;
  }

  return (
    <>
      <NavBar />

      <main className="mx-4 my-10 md:mx-10 lg:mx-20 xl:mx-[159px]">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-md bg-surface px-6 py-2.5 text-sm font-medium text-text shadow-md transition hover:bg-gray-100"
        >
          ← Back
        </Link>

        {/* Country Details */}
        <section className="mt-16 flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-20">
          {/* Flag */}
          <div className="flex flex-1 justify-center lg:justify-start">
            <img
              src={country.flags.svg}
              alt={country.name}
              className="w-full max-w-[560px] rounded-md shadow-md"
            />
          </div>

          {/* Country Information */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="mb-8 text-3xl font-bold text-primary">
              {country.name}
            </h1>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Left Information */}
              <div className="space-y-3">
                <p>
                  <span className="font-semibold">Native Name: </span>
                  {country.nativeName}
                </p>

                <p>
                  <span className="font-semibold">Population: </span>
                  {country.population.toLocaleString()}
                </p>

                <p>
                  <span className="font-semibold">Region: </span>
                  {country.region}
                </p>

                <p>
                  <span className="font-semibold">Sub Region: </span>
                  {country.subregion}
                </p>

                <p>
                  <span className="font-semibold">Capital: </span>
                  {country.capital}
                </p>
              </div>

              {/* Right Information */}
              <div className="space-y-3">
                <p>
                  <span className="font-semibold">Top Level Domain: </span>
                  {country.topLevelDomain?.join(", ")}
                </p>

                <p>
                  <span className="font-semibold">Currencies: </span>
                  {country.currencies
                    ?.map((currency) => currency.code)
                    .join(", ")}
                </p>

                <p>
                  <span className="font-semibold">Languages: </span>
                  {country.languages
                    ?.map((language) => language.name)
                    .join(", ")}
                </p>
              </div>
            </div>

            {/* Border Countries */}
            <div className="mt-12">
              <h2 className="mb-4 font-semibold">Border Countries:</h2>

              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {country.borders?.length > 0 ? (
                  country.borders.map((border) => (
                    <span
                      key={border}
                      className="rounded-md bg-surface px-5 py-2 text-sm shadow-md"
                    >
                      {border}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500">No border countries</span>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default CountryDetails;
