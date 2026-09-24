function SearchBar({ onChange, value }) {
  return (
    <div className="flex h-11 w-[340px] items-center gap-3 rounded-lg border border-border bg-surface px-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-transparent text-text outline-none placeholder:text-muted"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default SearchBar;
