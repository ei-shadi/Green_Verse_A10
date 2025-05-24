import { Helmet } from "react-helmet-async";
import ShareGardenTipForm from "../Components/ShareGardenForm";

const ShareGardenTip = () => {
  return (
    <>
      <Helmet title="Share Garden Tip - Green_Verse" />
      <div className="w-11/12 mx-auto">
      <ShareGardenTipForm />
      </div>
    </>
  );
};

export default ShareGardenTip;