import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Zoom } from 'react-awesome-reveal';
import { Mousewheel, Autoplay } from 'swiper/modules';
import { Tooltip } from 'react-tooltip';

const UpcomingEvents = () => {

  const events = [
    {
      id: "1",
      title: "Seed Swap at Central Park",
      date: "June 15, 2025",
      location: "New York",
      description: "Exchange heirloom seeds with fellow enthusiasts.",
      image: "https://img.freepik.com/free-vector/hand-drawn-gardening-hobby-sale-banner-template_23-2149744415.jpg",
    },
    {
      id: "2",
      title: "Organic Gardening Workshop",
      date: "June 20, 2025",
      location: "San Francisco",
      description: "Learn composting and soil care hands-on.",
      image: "https://img.freepik.com/free-vector/flat-gardening-sale-background_23-2149360735.jpg",
    },
    {
      id: "3",
      title: "Urban Gardening Meetup",
      date: "June 25, 2025",
      location: "Chicago",
      description: "Network with city gardeners and exchange tips.",
      image: "https://img.freepik.com/premium-photo/happy-friends-gardening-community_13339-224944.jpg",
    },
    {
      id: "4",
      title: "Herbal Garden Tour & Talk",
      date: "June 30, 2025",
      location: "Austin",
      description: "Guided tour through an herbal garden with live demonstrations.",
      image: "https://img.freepik.com/premium-photo/happy-guy-girl-gardeners-hold-pots-with-petunia-wonderful-garden-sunny-day_472597-3064.jpg",
    }
  ];

  return (
    <div className="h-[600px] w-full">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={50}
        modules={[Mousewheel, Autoplay]}
        mousewheel={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        speed={1500}
        loop={true}
        className="h-full"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <Zoom>
              <div
                className="lg:flex items-center bg-gradient-to-t from-[#a3b18a] to-[#3a5a40] p-4 rounded-xl hover:cursor-pointer hover:bg-gradient-to-t hover:from-amber-400 hover:to-[#588157]"
                data-tooltip-id="my-tooltip-inline"
                data-tooltip-content="Scroll For More Event's"
              >
                <Tooltip
                  style={{
                    backgroundColor: "#FFA500",
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: "bold",
                    padding: "10px",
                    zIndex: "9999",
                  }}
                />
                <div>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="lg:h-[500px] w-[2000px] object-cover rounded-lg h-[300px]"
                  />
                </div>
                <div className="text-center w-full my-10 rounded-xl relative">
                  <h2 className="text-2xl md:text-4xl font-bold text-white">{event.title}</h2>
                  <p className="text-md  text-amber-300 mt-2">
                    {event.date} • {event.location}
                  </p>
                  <p className="mt-2 text-xl text-gray-200">{event.description}</p>
                  <button className="bg-green-600 hover:bg-amber-600 text-white px-5 py-2 rounded-md transition duration-300 hover:cursor-pointer hover:scale-125 mt-5">
                    Join Event
                  </button>
                </div>
              </div>
            </Zoom>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UpcomingEvents;
