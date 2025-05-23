import { Helmet } from "react-helmet-async";
import Slider from "../Components/Slider";
import { useLoaderData } from "react-router";
import FeaturedGardeners from "../Components/FeaturedGardeners";
import { useEffect, useState } from "react";
import TrendingTips from "../Components/TrendingTips";
import UpcomingEvents from "../Components/UpcomingEvents";




const Home = () => {
  const [tips, setTips] = useState([]);

  // Gardeners Data
  const gardeners = useLoaderData();

  // Trending Tips Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tipsResponse = await fetch('http://localhost:3000/trending-tips');
        const tipsData = await tipsResponse.json();
        setTips(tipsData);
      } catch (error) {
        console.error("Error fetching data:", error);

      }
    }

    fetchData();
  }, []);




  return (
    <>
      <Helmet title="Home - Green_Verse" />

      {/* Slider */}
      <section>
        <Slider />
      </section>

      {/* Featured Gardeners */}
      <section className="my-20 w-11/12 mx-auto ">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-b from-amber-600 to-[#588157] bg-clip-text text-transparent"><span className="text-green-600 inline md:hidden">🌿</span>Featured Gardeners<span className="text-green-600">🌿</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto">
          {
            gardeners.map(gardener => <FeaturedGardeners key={gardener.id} gardener={gardener} />)
          }
        </div>
      </section>

      {/* Upcoming Gardening Events */}
      <section className="my-20 w-10/12 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-b from-amber-600 to-[#588157] bg-clip-text text-transparent"><span className="text-green-600 inline md:hidden">🌿</span>Upcoming Gardening Event"s<span className="text-green-600">🌿</span></h2>

        <UpcomingEvents />
      </section>

      {/* Top Trending Section */}
      <section className="my-20 w-11/12 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-b from-amber-600 to-[#588157] bg-clip-text text-transparent"><span className="text-green-600">🌿</span>Top Trending Tips<span className="text-green-600 inline md:hidden">🌿</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto">
          {
            tips.map(tip => <TrendingTips key={tip.id} tip={tip} />)
          }
        </div>
      </section>





    </>
  );
};

export default Home;