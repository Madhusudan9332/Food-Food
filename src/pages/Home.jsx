import {
  Navbar,
  Footer,
  TopImage,
  FoodCategory,
  Loader,
} from "../components";
import { useApiContext } from "../ApiContext";
import { Link } from "react-router-dom";
import {Suspense,lazy} from "react";
const SelectRestaurant = lazy(()=>import('../components/SelectRestaurant'))

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
                <Suspense fallback={<div>please wait</div>}>
                <SelectRestaurant item={item} />
                  </Suspense>
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
