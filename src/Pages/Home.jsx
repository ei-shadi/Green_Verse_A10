import { Helmet } from "react-helmet-async";
import Slider from "../Components/Slider";


const Home = () => {
  return (
    <>
      <Helmet title="Home - Green_Verse" />
      <section className="">
      <Slider />
      </section>

    </>
  );
};

export default Home;