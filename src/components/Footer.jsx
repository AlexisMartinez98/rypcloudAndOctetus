import octetus from "../assets/Logo-Octetus.png";
import rypCloud from "../assets/Logo-rypCloud.png";

const Footer = () => {
  return (
    <div className="bg-[#393939] flex justify-between py-3 px-6 items-center roboto-regular">
      <img className="w-20 h-20" src={octetus} alt="Octetus" />

      <h2 className="text-white ">
        Copyright 2024 RYPCLOUD&OCTETUS || Consulting Partners || Privacy Policy
      </h2>

      <img className="w-20 h-20" src={rypCloud} alt="RYP Cloud" />
    </div>
  );
};

export default Footer;
