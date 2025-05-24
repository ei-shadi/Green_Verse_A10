import { Helmet } from "react-helmet-async";
import MyTipsDetails from "../Components/MyTipsDetails";

const MyTips = () => {
  return (
    <>
      <Helmet title="My Tips - Green_Verse" />
      <div className="w-11/12 mx-auto">
        <MyTipsDetails />
      </div>
    </>
  );
};

export default MyTips;