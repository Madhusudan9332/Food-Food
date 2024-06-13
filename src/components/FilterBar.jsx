import { useState } from "react";

const FilterBar = () => {
  const [avtiveFilters, setActiveFilters] = useState([]);
  const [isActiveFilter, setIsActiveFilter] = useState(false);

  const filterArray = ["Fast Delivery", "Pure Veg", ["Below 200", "Above 200"]];

  const isActive = (filter) => avtiveFilters.includes(filter);

  const toggleIsActiveFilter = () => {
    setIsActiveFilter(pre => !pre);
  };

  const toggleFilter = (filter) => {
    if (isActive(filter)) {
      setActiveFilters(avtiveFilters.filter((f) => f !== filter));
    } else {
      setActiveFilters([...avtiveFilters, filter]);
    }
    console.log(avtiveFilters);
  };

  return (
    <div className="flex items-center justify-between mb-4 px-10 ">
      {/* Tab Name Filter */}
      <div className="space-x-4">
        <span className="font-bold bg-gray-200 rounded px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl"
        onClick={toggleIsActiveFilter}>
          Filter by:
        </span>
        <div className={`flex flex-col gap-2 sm:flex-row sm:gap-4 py-2 ${isActiveFilter ? "block" : "hidden" } sm:flex`}>
          {filterArray.map((item, index) =>
            Array.isArray(item) ? (
              <select
                key={index}
                className="bg-gray-200 rounded px-4 py-2 text-xs sm:text-sm md:text-md lg:text-lg"
              >
                {item.map((subItem, index) => (
                  <option key={index}>{subItem}</option>
                ))}
              </select>
            ) : (
              <button
                key={index}
                className={`bg-gray-200 rounded px-4 py-2 text-xs sm:text-sm md:text-md lg:text-lg ${
                  isActive(item) ? "bg-green-500 text-white" : ""
                }`}
                onClick={() => toggleFilter(item)}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
