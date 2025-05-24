import { useNavigate } from "react-router";



const BrowseTipsCard = ({ gardenersTips }) => {
  const navigate = useNavigate();

  const handleSeeMore = (tip) => {
    navigate(`/tips-details/${tip._id}`);
  };

  return (
    <div className="p-4 md:p-6 bg-gradient-to-t from-[#a3b18a] to-[#3a5a40] rounded-xl shadow-lg overflow-x-auto my-20">
      <table className="w-full min-w-[600px] text-sm md:text-base text-center border-collapse bg-gradient-to-t from-[#a3b18a] to-[#3a5a40] shadow-md rounded-xl overflow-hidden ">
        <thead>
          <tr className="bg-cyan-600 font-bold text-white text-2xl ">
            <th className="p-3 border">Title</th>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Image</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {gardenersTips.map((tip, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? "bg-amber-200 text-black text-xl font-semibold" : "bg-green-200 text-black text-xl font-semibold"}
            >
              <td className="p-3 border max-w-xs break-words">{tip.title}</td>
              <td className="p-3 border capitalize">{tip.category}</td>
              <td className="p-3 border">
                <img
                  src={tip.imagesUrl}
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrowseTipsCard;
