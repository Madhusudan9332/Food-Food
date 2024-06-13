import {
  Navbar,
  Footer,
  SelectRestaurant,
  TopImage,
  FoodCategory,
  Loader,
} from "../components";
import { useApiContext } from "../ApiContext";
import { Link } from "react-router-dom";


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
        <h1 className="text-center px-10 text-3xl font-bold">
          <Loader />
        </h1>
      ) : restaurantsError ? (
        <h1 className="text-center px-10 text-3xl font-bold">{restaurantsError}</h1>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-4 p-4">
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
