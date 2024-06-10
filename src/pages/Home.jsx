import { Navbar, Footer, RandomImage, FoodItem , FoodCategory , FilterBar} from "../components";
import { useEffect, useState, useCallback } from "react";
import { useApiContext } from "../Context";

function Home() {
  const [query, setQuery] = useState("menu");
  const { data, loading, error, fetchData} = useApiContext();

  // const fetchDataCallback = 
  useCallback(() => {
    fetchData(query);
  }, [fetchData, query]);


  return (
    <>
      <Navbar />
      <RandomImage width={100} height={50} />
      <FoodCategory />
      <FilterBar />
      {loading ? <h1>Loading...</h1>: error ? <h1>{error}</h1> : (
        <div className="grid grid-cols-4 gap-6 m-4 p-4">
        {data?.map((item, index) => (
          <div
            key={index}
            className="hover:scale-105 duration-300 cursor-pointer"
          >
            <FoodItem item={item} />
          </div>
        ))}
      </div>
      // <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
      
      <Footer />
    </>
  );
}

export default Home;
