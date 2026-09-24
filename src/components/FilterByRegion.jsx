function FilterByRegion({ onChange, value }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="h-11 w-[200px] rounded-lg border border-border bg-surface px-4 text-text outline-none"
    >
      <option value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}

export default FilterByRegion;
