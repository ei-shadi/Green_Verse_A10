import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Loader from "../Utilities/Loader";

const ExploreGardeners = () => {
  const [gardeners, setGardeners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gardenersResponse = await fetch("http://localhost:3000/gardeners");
        const gardenersData = await gardenersResponse.json();
        setGardeners(gardenersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet title="Explore Gardeners - Green_Verse" />
      <div className="w-11/12 mx-auto py-8 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold mt-10 mb-20 text-center bg-gradient-to-b from-amber-600 to-[#588157] bg-clip-text text-transparent">
          <span className="text-green-600 inline md:hidden">🌿</span>
          Explore Gardeners
          <span className="text-green-600">🌿</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {gardeners.length === 0 ? (
            <Loader />
          ) : (
            gardeners.map((gardener, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={gardener.id}
                  initial={{ x: isEven ? -100 : 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="flex flex-col md:flex-row bg-gradient-to-r from-[#a3b18a] to-[#3a5a40] shadow-xl rounded-2xl overflow-hidden p-4 max-w-4xl mx-auto"
                >
                  {/* Image Section */}
                  <div className="flex justify-center items-center md:w-1/2 p-4">
                    <img
                      src={gardener.image}
                      alt={gardener.name}
                      className="w-70 h-70 object-cover rounded-xl"
                    />
                  </div>

                  {/* Info Section */}
                  <div className="flex flex-col justify-center md:w-1/2 p-4 space-y-2 text-center md:text-left text-white border-b-4 border-amber-400 rounded">
                    <h2 className="text-3xl md:text-4xl font-bold text-amber-400 text-center border-b-4 mb-4 pb-2 rounded">
                      {gardener.name}
                    </h2>
                    <p className="rounded border-amber-400 border-l-4 border-r-4 px-2 pb-1">
                      <span className="font-semibold text-lg md:text-xl text-cyan-400">Age :</span> {gardener.age}
                    </p>
                    <p className="rounded border-amber-400 border-l-4 border-r-4 px-2 pb-1">
                      <span className="font-semibold text-lg md:text-xl text-cyan-400">Gender :</span> {gardener.gender}
                    </p>
                    <p className="rounded border-amber-400 border-l-4 border-r-4 px-2 pb-1">
                      <span className="font-semibold text-lg md:text-xl text-cyan-400">Location :</span> {gardener.location}
                    </p>
                    <p className="rounded border-amber-400 border-l-4 border-r-4 px-2 pb-1">
                      <span className="font-semibold text-lg md:text-xl text-cyan-400">Status :</span> {gardener.status}
                    </p>
                    <p className="rounded border-amber-400 border-l-4 border-r-4 px-2 pb-1">
                      <span className="font-semibold text-lg md:text-xl text-cyan-400">Bio :</span> {gardener.bio}
                    </p>
                    <p className="rounded border-amber-400 border-l-4 border-r-4 px-2 pb-1">
                      <span className="font-semibold text-lg md:text-xl text-cyan-400">Experiences :</span>{" "}
                      {gardener.experiences.join(", ")}
                    </p>
                    <p className="rounded border-amber-400 border-l-4 border-r-4 px-2 pb-1">
                      <span className="font-semibold text-lg md:text-xl text-cyan-400">Total Shared Tips :</span> {gardener.totalSharedTips}
                    </p>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ExploreGardeners;
