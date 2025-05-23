import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Button from '../Utilities/Button';

const events = [
  {
    id: 1,
    title: 'Spring Gardening Festival',
    description: 'Join us for a celebration of flowers, food, and fun!',
    buttonText: 'Learn More',
    imageUrl: 'https://img.freepik.com/free-photo/male-hands-cutting-bushes-with-big-scissors_651396-1549.jpg?semt=ais_hybrid&w=740',
  },
  {
    id: 2,
    title: 'Urban Farming Workshop',
    description: 'Get hands-on experience with container gardening.',
    buttonText: 'Register Now',
    imageUrl: 'https://img.freepik.com/premium-photo/gardening-tools-flowers-pot-planting-backyard_422666-1726.jpg?semt=ais_hybrid&w=740',
  },
  {
    id: 3,
    title: 'Sustainable Living Talk',
    description: 'Discover ways to live greener every day.',
    buttonText: 'Get Tickets',
    imageUrl: 'https://img.freepik.com/free-photo/senior-couple-caring-flowers_23-2148256670.jpg?semt=ais_hybrid&w=740',
  },
];

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      effect="fade"
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
      className="w-full"
    >
      {events.map(event => (
        <SwiperSlide key={event.id}>
          <div
            className="h-[600px] w-full bg-cover bg-center relative flex items-center justify-center transition-opacity duration-1000"
            style={{ backgroundImage: `url(${event.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 text-center text-white px-6 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">{event.title}</h2>
              <p className="mb-4 text-lg">{event.description}</p>
              <button className="bg-green-600 hover:bg-amber-600 text-white px-5 py-2 rounded-md transition duration-300 hover:cursor-pointer hover:scale-125">
                {event.buttonText}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
