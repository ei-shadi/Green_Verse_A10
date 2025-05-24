import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router'; 

const TipsDetailPage = () => {
  const data = useLoaderData();
  const [liked, setLiked] = useState(false);

  const handleLike = () => setLiked(!liked);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-[#a3b18a] to-[#3a5a40]">
      <div className="max-w-sm bg-cyan-500 text-white rounded-2xl shadow-md overflow-hidden border border-gray-200 p-4 w-11/12">
        <img
          src={data.image || "https://via.placeholder.com/400x200"}
          alt={data.title || "Gardening Tip"}
          className="w-full h-48 object-cover rounded-xl"
        />
        <div className="mt-4">
          <h2 className="text-xl font-bold text-amber-300">{data.title}</h2>
          <p className="text-sm text-gray-200">
            Category: {data.category} | Difficulty: {data.difficulty}
          </p>
          <p className="mt-2 text-gray-200">
            {data.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm md:text-xl text-amber-300 font-semibold">
              {data.visibility === 'public' ? 'Public' : 'Public'}
            </span>
            <button onClick={handleLike} className="text-xl md:text-3xl focus:outline-none hover:cursor-pointer">
              <FaHeart className={liked ? 'text-red-600' : 'text-black'} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsDetailPage;
