
const FeaturedGardeners = ({ gardener }) => {
  console.log(gardener);

  const { name, location, bio, image, status } = gardener;

  return (
    <div className="bg-gradient-to-t from-[#a3b18a] to-[#3a5a40] text-white shadow-2xl rounded-xl">
      <div className=" shadow-2xl rounded-xl p-10 flex flex-col items-center mx-auto hover:bg-gradient-to-b from-[#a3b18a] to-[#d38e0e] hover:cursor-pointer h-full">
        <img src={image} className="w-[450px] h-[300px] object-cover mx-auto rounded-4xl mb-4" />
        <div className="text-center my-5">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-gray-200">{bio}</p>
        </div>
        <div className="flex items-center gap-2 lg:gap-10 self-center text-white">
          <p className="bg-green-300 py-2 px-4 text-green-700 font-semibold rounded-full uppercase w-1/2 md:w-full text-center">{status}</p>
          <p
            className="bg-sky-300 py-2 px-4 rounded-full font-semibold whitespace-nowrap">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGardeners;