import { Helmet } from "react-helmet-async";
import BrowseTipsCard from "../Components/BrowseTipsCard";
import { useEffect, useState } from "react";

const BrowseTips = () => {

  const [gardenersTips, setGardenersTips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Gardeners Tips Data Fetch
        const gardenersResponse = await fetch('http://localhost:3000/gardeners-tips/public');
        const gardenersData = await gardenersResponse.json();
        setGardenersTips(gardenersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);


  return (
    <>
      <Helmet title="Browse Tips - Green_Verse" />
      <div className="w-11/12 mx-auto">
        <BrowseTipsCard  gardenersTips={gardenersTips}/>
      </div>
    </>
  );
};

export default BrowseTips;