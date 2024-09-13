import serviceOne from "../assets/software-development.jpg";
import serviceTwo from "../assets/custom-software-solution.jpeg";

const Services = () => {
  return (
    <div className="roboto-regular px-6 py-8 flex flex-col md:px-16 lg:px-0">
      <div className="shadow-custom-b roboto-medium lg:mx-10 xl:mx-48">
        <h1 className="text-2xl md:text-3xl lg:text-4xl roboto-bold">
          TRANSFORMING INDUSTRIES WITH TECHNOLOGY
        </h1>
      </div>

      <div className="flex flex-col lg:mx-10 xl:mx-48 mt-8  ">
        <div className="flex flex-col md:flex-row md:items-center md:gap-10 lg:gap-0 md:justify-around">
          <div className="mb-4 md:w-1/2 lg:px-6 ">
            <h3 className="text-xl mb-2 roboto-bold text-start md:mb-6 md:text-3xl">
              AI software development
            </h3>
            <p className="text-md flex items-center justify-center lg:text-lg roboto-medium ">
              Unlock the potential of your business with our advanced AI
              software development services. We specialize in creating tailored
              solutions that enhance operational efficiency, streamline
              processes, and drive innovation. Our team of experts collaborates
              closely with clients in various sectors, including government,
              finance, healthcare, and retail, to deliver high-quality software
              that meets their unique needs.
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
              Custom software solutions
            </h3>
            <p className="text-md flex items-center justify-center lg:text-lg roboto-medium">
              Experience the power of custom software solutions designed
              specifically for your organization's requirements. We offer
              personalized software development that aligns with your goals,
              ensuring a seamless integration that enhances productivity and
              accelerates growth across various sectors including finance,
              healthcare, and retail.
            </p>
          </div>
          <img
            className="md:w-1/2 lg:w-1/2 mt-4 rounded-lg object-cover mb-4 md:mb-0 xl:w-2/6 lg:ml-10"
            src={serviceTwo}
            alt="Custom software solutions"
          />
        </div>
      </div>

      <div className="flex flex-col items-center p-4 lg:mx-48">
        <p className="roboto-bold mb-4 text-xl lg:text-2xl">
          Tailored services
        </p>
        <button className="bg-[#046878] text-lg p-3 px-10 rounded-full w-full md:w-1/2 lg:w-1/3 text-white">
          Schedule appointment
        </button>
      </div>
    </div>
  );
};

export default Services;
