import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import Slider1 from "../assets/Slider 1.webp";
import Slider2 from "../assets/Slider 2.webp";
import Slider3 from "../assets/Slider 3.webp";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import PlantCard from "../components/PlantCard";
import AOS from "aos";
import "aos/dist/aos.css";


const Home = () => {
  const [plants, setPlants] = useState([]);
  const [tips, setTips] = useState([]);
  const navigate = useNavigate();
  const monsteraPlant = plants.find(
    (plant) => plant.plantName === "Monstera Deliciosa"
  );

  const handleBuyNow = (plantId) => {
    navigate(`/plants/${plantId}`);
  };

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Plants fetch error:", err));

    fetch("/tips.json")
      .then((res) => res.json())
      .then((data) => setTips(data))
      .catch((err) => console.error("Tips fetch error:", err));
  }, []);

  const topRated = [...plants]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div className="space-y-16 bg-green-50 px-4 md:px-8 lg:px-16 py-8">

      {/* Hero Slider */}
<section className="mb-20">
  <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    navigation
    loop
    className="rounded-3xl shadow-2xl"
  >
    {/* Slide 1 */}
    <SwiperSlide>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col-reverse md:flex-row items-center gap-8 bg-linear-to-r from-green-50 via-white to-green-100 rounded-2xl p-8 md:p-16 shadow-2xl text-center md:text-left min-h-[550px]"
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-700 leading-tight">
            Bring the calm of nature home
          </h1>
          <p className="mt-4 text-gray-700 text-lg md:text-xl">
            Discover low-maintenance plants and expert care tips.
          </p>
          <Link
  to="/plants"
  className="inline-block mt-6 px-8 py-3 text-lg font-semibold text-white rounded-xl 
             bg-linear-to-r from-green-500 to-emerald-600 shadow-lg 
             transition-all duration-300 ease-out 
             hover:from-green-600 hover:to-emerald-700 
             hover:shadow-2xl hover:scale-105 
             focus:outline-none focus:ring-4 focus:ring-emerald-300 
             active:scale-95 overflow-hidden"
>
  🌿 Shop Plants
</Link>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={Slider1}
            alt="hero"
            className="w-full h-80 sm:h-[380px] md:h-[420px] lg:h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </motion.div>
    </SwiperSlide>

    {/* Slide 2 */}
    <SwiperSlide>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col-reverse md:flex-row items-center gap-8 bg-linear-to-r from-green-100 via-white to-green-50 rounded-2xl p-8 md:p-16 shadow-2xl text-center md:text-left min-h-[550px]"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-700 leading-tight">
            Plant care made simple
          </h2>
          <p className="mt-4 text-gray-700 text-lg md:text-xl">
            Short video guides, weekly tips, and consultations with experts.
          </p>
          <a
          href="#plant-tips"
          className="inline-block relative mt-8 px-10 py-3 text-lg font-semibold text-green-800 rounded-xl 
                     border-2 border-green-600 overflow-hidden
                     transition-all duration-300 ease-out
                     hover:text-white hover:bg-linear-to-r from-green-500 to-emerald-600
                     hover:shadow-xl hover:scale-105
                     active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          🌿 Learn More
        </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={Slider2}
            alt="hero2"
            className="w-full h-84 sm:h-[350px] md:h-[420px] lg:h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </motion.div>
    </SwiperSlide>

    {/* Slide 3 — Top Rated Plant Feature */}
    <SwiperSlide>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center gap-8 bg-linear-to-r from-green-50 via-emerald-50 to-green-100 rounded-2xl p-8 md:p-16 shadow-2xl text-center md:text-left min-h-[550px]"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={Slider3}
            alt="Monstera Deliciosa"
            className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-700 leading-tight">
            Monstera Deliciosa 🌿
          </h2>
          <p className="mt-4 text-gray-700 text-lg md:text-xl">
            Our <span className="font-semibold text-green-600">top-rated</span> tropical beauty!
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-3 mt-4">
            <span className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</span>
            <p className="text-gray-600 font-medium">Rated 4.9 / 5</p>
          </div>
          <button
          onClick={() => handleBuyNow(monsteraPlant.plantId)}
          className="relative mt-6 px-8 py-3 text-lg font-semibold text-white rounded-xl 
                     bg-linear-to-r from-green-500 to-emerald-600 shadow-lg 
                     transition-all duration-300 ease-out 
                     hover:from-green-600 hover:to-emerald-700 
                     hover:shadow-2xl hover:scale-105 
                     focus:outline-none focus:ring-4 focus:ring-emerald-300 
                     active:scale-95 overflow-hidden"
        >
          🌿 Buy Now
        </button>
        </motion.div>
      </motion.div>
    </SwiperSlide>
  </Swiper>
</section>

      {/* Top Rated Plants */}
      <section data-aos="fade-up">
        <h2 className="text-2xl font-bold text-green-800 mb-6">
          Top Rated Indoor Plants
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {topRated.map((p) => (
            <PlantCard key={p.plantId} plant={p} />
          ))}
        </div>
      </section>

      {/* Plant Care Tips */}
<section id="plant-tips" data-aos="fade-up" aos-delay="200">
  <h2 className="text-2xl font-bold text-green-800 mb-6">
    Plant Care Tips
  </h2>

  {tips.length === 0 ? (
    <p className="text-gray-700">Loading tips... or check your tips.json path!</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {tips.map((tip) => (
        <div
          key={tip.id}
          className="p-6 bg-green-50 border-l-4 border-green-500 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="font-semibold text-green-700 text-lg">{tip.title}</h3>
          <p className="text-gray-700 text-sm mt-2">{tip.text}</p>
        </div>
      ))}
    </div>
  )}
</section>

      {/* Meet Our Experts */}
<section data-aos="fade-up" aos-delay="400">
  <h2 className="text-2xl font-bold text-green-800 mb-6">
    Meet Our Green Experts
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Expert 1 */}
    <div className="p-6 bg-white rounded-lg shadow text-center hover:shadow-lg transition-shadow">
      <img
        src="https://nayyarssolicitors.co.uk/wp-content/uploads/2025/04/Ayesha-Nayyar.webp"
        alt="Ayesha Nayyar"
        className="mx-auto w-28 h-28 rounded-full object-cover"
      />
      <h3 className="mt-3 font-semibold text-green-700">Ayesha Nayyar</h3>
      <p className="text-gray-700 text-sm">Indoor Plant Care</p>
    </div>

    {/* Expert 2 */}
    <div className="p-6 bg-white rounded-lg shadow text-center hover:shadow-lg transition-shadow">
      <img
        src="https://www.wilmerhale.com/-/media/images/people/khan_omar.jpg?h=760&w=760&la=en&hash=B476E77BAFFFF3BB0C24D6D9830E868C"
        alt="Omar Khan"
        className="mx-auto w-28 h-28 rounded-full object-cover"
      />
      <h3 className="mt-3 font-semibold text-green-700">Omar Khan</h3>
      <p className="text-gray-700 text-sm">Tropical Plants</p>
    </div>

    {/* Expert 3 */}
    <div className="p-6 bg-white rounded-lg shadow text-center hover:shadow-lg transition-shadow">
      <img
        src="https://i1.rgstatic.net/ii/profile.image/646870351216641-1531237318123_Q512/Lina-Hoyos.jpg"
        alt="Lina Gomez"
        className="mx-auto w-28 h-28 rounded-full object-cover"
      />
      <h3 className="mt-3 font-semibold text-green-700">Lina Gomez</h3>
      <p className="text-gray-700 text-sm">Propagation</p>
    </div>
  </div>
</section>

      {/* Eco Decor Ideas */}
<section data-aos="fade-up" aos-delay="600">
  <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Eco Decor Ideas</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    
    {/* Idea 1 */}
    <div className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <img
        src="https://cdn.shopify.com/s/files/1/0558/1130/9591/files/IMG_3924.jpg?v=1693743758"
        alt="Shelf Styling"
        className="w-full h-96 object-contain"
      />
      <div className="p-5">
        <h3 className="font-semibold text-green-700 text-lg">Shelf Styling</h3>
        <p className="text-gray-700 mt-2 text-sm">
          Combine trailing plants with sculptural pots for layered depth.
        </p>
      </div>
    </div>

    {/* Idea 2 */}
    <div className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKM11W8XjBq7Qtm-17_5pHo6jL630-E0dzg&s"
        alt="Corner Jungle"
        className="w-full h-96 object-contain"
      />
      <div className="p-5">
        <h3 className="font-semibold text-green-700 text-lg">Corner Jungle</h3>
        <p className="text-gray-700 mt-2 text-sm">
          Use varying heights: floor plant + mid-shelf + hanging basket.
        </p>
      </div>
    </div>

    {/* Idea 3 */}
    <div className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <img
        src="https://miro.medium.com/v2/resize:fit:1200/1*eBnymOA5ehEDh0Db2lV2pg.jpeg"
        alt="Bathroom Oasis"
        className="w-full h-96 object-contain"
      />
      <div className="p-5">
        <h3 className="font-semibold text-green-700 text-lg">Bathroom Oasis</h3>
        <p className="text-gray-700 mt-2 text-sm">
          Choose humidity-loving plants for bathrooms with indirect light.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
