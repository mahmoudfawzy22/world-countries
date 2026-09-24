import { Link } from "react-router-dom";
function CountryCard({
  countryName,
  population,
  region,
  capital,
  imgSrc,
  numericCode,
}) {
  return (
    <Link
      to={`/country/${numericCode}`}
      className="flex flex-col  h-auto shadow-lg

"
    >
      <img src={imgSrc} alt="germany" height={160} width={278} />
      <div className="p-6">
        <h2 className="font-bold text-primary text-base">{countryName}</h2>
        <div className="pt-1">
          <p className="font-semibold">
            Population: <span className="font-medium">{population}</span>
          </p>
        </div>
        <div className="pt-1">
          <p className="font-semibold">
            Region: <span className="font-medium">{region}</span>
          </p>
        </div>
        <div className="pt-1">
          <p className="font-semibold">
            Capital: <span className="font-medium">{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
