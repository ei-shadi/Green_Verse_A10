import { useState } from "react";
import { useNavigate } from "react-router";

const BrowseTipsCard = ({ gardenersTips }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const navigate = useNavigate();

  const handleSeeMore = (tip) => {
    navigate(`/tips-details/${tip._id}`);
  };

  // Filtered tips based on difficulty
  const filteredTips =
    selectedDifficulty === "All"
      ? gardenersTips
      : gardenersTips.filter((tip) => tip.difficulty === selectedDifficulty);

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-bold my-10 text-center bg-gradient-to-b from-amber-600 to-[#588157] bg-clip-text text-transparent">
        <span className="text-green-600 inline md:hidden">🌿</span>
        Browse Gardeners Tips
        <span className="text-green-600">🌿</span>
      </h2>

      {/* Filter Dropdown */}
      <div className="flex justify-center mb-6">
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="text-xl px-4 py-2 rounded-md shadow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* Table */}
      <div className="p-4 md:p-6 bg-gradient-to-t from-[#a3b18a] to-[#3a5a40] rounded-xl shadow-lg overflow-x-auto mb-20">
        <table className="w-full min-w-[600px] text-sm md:text-base text-center border-collapse bg-gradient-to-t from-[#a3b18a] to-[#3a5a40] shadow-md rounded-xl overflow-hidden">
          <thead className="bg-green-100 text-2xl text-center font-bold">
            <tr>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTips.length > 0 ? (
              filteredTips.map((tip, idx) => (
                <tr
                  key={idx}
                  className="border-b hover:bg-cyan-500 text-white text-xl font-semibold text-center"
                >
                  <td className="p-3 border max-w-xs break-words">{tip.title}</td>
                  <td className="p-3 border capitalize">{tip.category}</td>
                  <td className="p-3 border">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-[100px] h-[60px] object-cover rounded mx-auto"
                    />
                  </td>
                  <td className="p-3 border">
                    <button
                      onClick={() => handleSeeMore(tip)}
                      className="px-4 py-1 bg-green-600 text-white rounded hover:bg-amber-500 duration-300 hover:scale-125 transition hover:cursor-pointer"
                    >
                      See More
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-5 text-gray-200 text-lg">
                  No tips found for this difficulty level.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTipsCard;
