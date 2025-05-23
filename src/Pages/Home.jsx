import { Helmet } from "react-helmet-async";
import Slider from "../Components/Slider";
import { useLoaderData } from "react-router";
import FeaturedGardeners from "../Components/FeaturedGardeners";


const Home = () => {

  const gardeners = useLoaderData();


  return (
    <>
      <Helmet title="Home - Green_Verse" />

      {/* Slider */}
      <section>
      <Slider />
      </section>

      {/* Featured Gardeners */}
      <section className="my-20 w-11/12 mx-auto ">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-b from-amber-600 to-[#588157] bg-clip-text text-transparent">Featured Gardeners</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto">
        {
          gardeners.map(gardener => <FeaturedGardeners key={gardener.id} gardener={gardener} />)
        }
        </div>

      </section>

    </>
  );
};

export default Home;