import { useState } from "react";

const FilterBar = () => {
  const [avtiveFilters, setActiveFilters] = useState([]);

  const filterArray = ["Fast Delivery", "Pure Veg", "Below 200", "Above 200"];

  const isActive = (filter) => avtiveFilters.includes(filter);

  const toggleFilter = (filter) => {
    if(isActive(filter)) {
      setActiveFilters(avtiveFilters.filter((f) => f !== filter));
    } else {
      setActiveFilters([...avtiveFilters, filter]);
    }
    console.log(avtiveFilters)
  };


  return (
    <div className="flex items-center justify-between mb-4 px-10 ">
      {/* Tab Name Filter */}
      <div className="space-x-4">
        <span className="font-bold bg-gray-200 rounded px-4 py-2">Filter by:</span>
        {filterArray.map((filter, index) => (
          <button
            key={index}
            className={`bg-gray-200 rounded px-4 py-2 ${
              isActive(filter) ? "bg-green-500 text-white" : ""
            }`}
            onClick={() => toggleFilter(filter)}
          >{filter}</button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
