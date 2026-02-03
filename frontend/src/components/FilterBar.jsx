const FilterBar = ({ selected, setSelected }) => {
  const filters = ["all", "mountain", "beach", "city"];

  return (
    <div className="flex gap-4 justify-center mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setSelected(filter)}
          className={`px-5 py-2 rounded-full font-medium transition ${
            selected === filter
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
