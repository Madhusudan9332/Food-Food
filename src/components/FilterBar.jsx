import { useState } from "react";
import { useApiContext } from "../Context";

const FilterBar = () => {
  const [avtiveFilters, setActiveFilters] = useState([]);
  const [sortOption, setSortOption] = useState('All');
  const [searchQuery, setSearchQuery] = useState("");

  const {fetchData} = useApiContext();
  const handleFetchData = (query) => {
    query = `menu/search/${query}`
    fetchData(query);
  };


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

      {/* Sort Options */}
      <div>
        <span className="font-bold">Sort by Price:</span>
        <select className="border border-gray-300 rounded px-4 py-2 ml-2" value={sortOption} onChange={(e)=>setSortOption(e.target.value)}>
          <option>All</option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
      </div>

      {/* Search Bar */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button className="bg-green-500 text-white rounded-r px-4 py-2"
        onClick={() => handleFetchData(searchQuery)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 15l-5-5m0 0l-5 5m5-5v12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
