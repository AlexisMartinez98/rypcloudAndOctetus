import { useTranslation } from "react-i18next";
import innovative from "../assets/innovative software solutions.png";

const About = () => {
  const {t} = useTranslation()
  return (
    <div className=" roboto-regular bg-[#393939] px-4 py-8 text-white flex flex-col md:px-16 md:bg-[#EBEBEB] md:text-black">
      <div className="  m-2 shadow-custom-b roboto-medium lg:mx-48  ">
        <h1 className=" text-2xl text-end md:text-3xl lg:text-4xl">
        {t("about.title")}
        </h1>
      </div>
      <div className=" p-4 flex flex-col md:flex md:flex-row md:gap-4 md:justify-center">
        <div className="flex mb-4 md:w-[50%] lg:w-[20%] md:px-6 ">
          <h3 className="text-xl roboto-medium text-start md:hidden">
          {t("about.heading")}
          </h3>
          <img
            className="rounded-xl md:w-full hidden md:block "
            src={innovative}
            alt="innovative software solutions"
          />
        </div>
        <div className="flex flex-col md:w-1/2 ">
          <h3 className="hidden md:block text-2xl roboto-medium md:mb-4 lg:text-3xl  ">
          {t("about.heading")}
          </h3>
          <p className="text-md  flex items-center justify-center lg:text-lg">
          {t("about.description")}
          </p>
          <div className=" flex justify-center md:justify-start mt-8">
            <button className="bg-[#046878] text-lg p-3 px-10 rounded-full w-full md:w-1/2 lg:w-1/3 text-white">
            {t("about.button")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
