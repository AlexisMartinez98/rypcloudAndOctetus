
import "./components-style.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const {t} = useTranslation()
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center gradient-mask"
      style={{
        backgroundImage: `url('https://cdn.b12.io/client_media/fvoatBts/045fbb24-6d45-11ef-b7d1-0242ac110002-jpg-hero_image.jpeg')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-50"></div>
      <div className="relative max-w-full px-6 py-8 sm:py-12 md:pl-16 lg:pl-24">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-3xl roboto-medium text-white mb-4">
        {t("home.title")}
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl roboto-bold text-white mb-6">
        {t("home.subtitle")}
        </h2>
        <button className="bg-[#046878] text-white px-6 py-2 text-lg roboto-regular rounded-full hover:text-gray-800 transition lg:mt-4">
        {t("home.button")}
        </button>
      </div>
    </div>
  );
};

export default Home;
