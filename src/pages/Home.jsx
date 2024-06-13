import {
  Navbar,
  Footer,
  SelectRestaurant,
  TopImage,
  FoodCategory,
} from "../components";
import { useApiContext } from "../context";
import { Link } from "react-router-dom";
import { useEffect } from "react";


function Home() {
  const {
    restaurantsData,
    restaurantsLoading,
    restaurantsError,
  } = useApiContext();

  return (
    <>
      <Navbar />
      <TopImage />
      <FoodCategory />
      <h1 className="text-left px-10 text-3xl font-bold">Restaurants</h1>
      {restaurantsLoading ? (
        <h1>Loading...</h1>
      ) : restaurantsError ? (
        <h1>{restaurantsError}</h1>
      ) : (
        <div className="grid grid-cols-4 gap-6 m-4 p-4">
          {restaurantsData?.map((item, index) => (
            <div
              key={index}
              className="hover:scale-105 duration-300 cursor-pointer"
            >
              <Link to={`/restaurant/${item.name}`}>
                <SelectRestaurant item={item} />
              </Link>
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
