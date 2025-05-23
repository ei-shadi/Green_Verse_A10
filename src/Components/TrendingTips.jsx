import {
  FaTint,
  FaRecycle,
  FaLeaf,
  FaSeedling,
  FaLayerGroup,
  FaBug,
  FaHeart,
  FaUser
} from "react-icons/fa";

const getIcon = (id) => {
  switch (id) {
    case 1: return <FaTint className="text-blue-500 text-4xl" />;
    case 2: return <FaRecycle className="text-green-500 text-4xl" />;
    case 3: return <FaLeaf className="text-yellow-500 text-4xl" />;
    case 4: return <FaSeedling className="text-green-600 text-4xl" />;
    case 5: return <FaLayerGroup className="text-orange-500 text-4xl" />;
    case 6: return <FaBug className="text-red-500 text-4xl" />;
    default: return <FaLeaf className="text-gray-400 text-4xl" />;
  }
};

const TrendingTips = ({ tip }) => {
  return (
    <div className="bg-gradient-to-b from-[#a3b18a] to-[#3a5a40] rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-110 hover:cursor-pointer p-5 w-full hover:bg-gradient-to-b hover:from-[#a3b18a] hover:to-[#d38e0e]">
      <div className="flex justify-center mb-4 bg-white rounded-full w-16 h-16 mx-auto p-3">{getIcon(tip.id)}</div>
      <h3 className="text-xl md:text-2xl font-semibold text-white text-center">{tip.title}</h3>
      <p className="text-gray-200 mt-2 text-sm md:text-lg text-center">{tip.description}</p>
      <div className="flex items-center justify-around mt-4 text-gray-200 text-sm md:text-lg">
        <span className="flex items-center gap-1">
          <FaUser className="text-green-600" />
          {tip.author}
        </span>
        <span className="flex items-center gap-1">
          <FaHeart className="text-red-500" />
          {tip.likes}
        </span>
      </div>
    </div>
  );
};

export default TrendingTips;
