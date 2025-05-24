import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router';

const TipsDetailPage = () => {
  const data = useLoaderData();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(data.likeCount || 0); // initial like count from data

  const handleLike = async () => {
    try {
      // Optimistically update UI
      const newLiked = !liked;
      setLiked(newLiked);
      setLikeCount(prev => newLiked ? prev + 1 : prev - 1);

      // Send update to backend
      const response = await fetch('https://green-verse-server.vercel.app/gardeners-tips', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          tipId: data.id,    // send the tip id to backend
          liked: newLiked
        }),
      });

      if (!response.ok) throw new Error('Failed to update like status.');

      // get updated like count from backend response
      const result = await response.json();
      if (typeof result.likeCount === 'number') {
        setLikeCount(result.likeCount);
      }
    } catch (error) {
      console.error('Error liking tip:', error);
      // Revert UI changes on failure
      setLiked(prev => !prev);
      setLikeCount(prev => liked ? prev - 1 : prev + 1);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-t from-amber-600 to-[#588157] items-center justify-center ">
      <div className="max-w-sm bg-gradient-to-t from-[#a3b18a] to-[#3a5a40] text-white rounded-2xl shadow-md overflow-hidden border border-gray-200 p-4 w-11/12">
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
          <p className="mt-2 text-gray-200">{data.description}</p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm md:text-xl text-amber-300 font-semibold">
              {data.visibility === 'public' ? 'Public' : 'Private'}
            </span>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleLike}
                className="text-xl md:text-3xl focus:outline-none hover:cursor-pointer"
              >
                <FaHeart className={liked ? 'text-red-600' : 'text-black'} />
              </button>
              <span className="text-amber-300 font-semibold">{likeCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsDetailPage;
