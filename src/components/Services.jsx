import serviceOne from "../assets/software-development.jpg";
import serviceTwo from "../assets/custom-software-solution.jpeg";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <div id="services" className="roboto-regular px-6 py-8 flex flex-col md:px-16 lg:px-0">
      <div className="shadow-custom-b roboto-medium lg:mx-10 xl:mx-48">
        <h1 className="text-2xl md:text-3xl lg:text-4xl roboto-bold">
        {t("services.title")}
        </h1>
      </div>

      <div className="flex flex-col lg:mx-10 xl:mx-48 mt-8  ">
        <div className="flex flex-col md:flex-row md:items-center md:gap-10 lg:gap-0 md:justify-around">
          <div className="mb-4 md:w-1/2 lg:px-6 ">
            <h3 className="text-xl mb-2 roboto-bold text-start md:mb-6 md:text-3xl">
            {t("services.ai.heading")}
            </h3>
            <p className="text-md flex items-center justify-center lg:text-lg roboto-medium ">
            {t("services.ai.description")}
            </p>
          </div>
          <img
            className="md:w-1/2 lg:w-1/2 xl:w-2/6 mt-4 rounded-lg object-cover mb-4 md:mb-0 lg:mr-10"
            src={serviceOne}
            alt="AI software development"
          />
        </div>

        <div className="flex flex-col md:flex-row-reverse md:justify-around md:items-center mt-4 md:gap-10 lg:gap-0">
          <div className="mb-4 md:w-1/2 lg:px-6">
            <h3 className="text-xl mb-2 roboto-bold text-start md:mb-6 md:text-3xl">
            {t("services.custom.heading")}
            </h3>
            <p className="text-md flex items-center justify-center lg:text-lg roboto-medium">
            {t("services.custom.description")}
            </p>
          </div>
          <img
            className="md:w-1/2 lg:w-1/2 mt-4 rounded-lg object-cover mb-4 md:mb-0 xl:w-2/6 lg:ml-10"
            src={serviceTwo}
            alt="Custom software solutions"
          />
        </div>
      </div>

      <div className="flex flex-col items-center p-4 lg:mx-48 md:mt-20">
        <p className="roboto-bold mb-4 text-xl lg:text-2xl">
        {t("services.tailored_services")}
        </p>
        <button className="bg-[#046878] text-lg p-3 px-10 rounded-full w-full md:w-1/2 lg:w-1/3 text-white">
       <a href="#contact">
         {t("services.button")}
        </a>
        </button>
      </div>
    </div>
  );
};

export default Services;
