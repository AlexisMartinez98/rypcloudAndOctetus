import React, { useState } from "react";
import { VscLocation, VscMail } from "react-icons/vsc";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-full mx-auto px-4 py-8 bg-[#EBEBEB]">
      <div className="text-center mb-8">
        <h1 className="text-4xl roboto-black mb-2">
          We're here to help you succeed
        </h1>
        <h2 className="text-xl roboto-regular">
          Reach out to our experts for tailored solutions. Let's transform your
          vision into reality.
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-16 mb-8">
          <div className="flex gap-3 items-center">
            <VscLocation size={25} />
            <span className="text-black roboto-regular">Santiago, RM CL</span>
          </div>
          <div className="flex gap-3 items-center">
            <VscMail size={25} />
            <span className="text-black roboto-regular">correo@correo.com</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-[#046878] bg-[#EBEBEB] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold mb-1"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Your Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-3 border border-[#046878] bg-[#EBEBEB] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#046878] bg-[#EBEBEB] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-1"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-[#046878] bg-[#EBEBEB] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#046878] text-white py-2 px-4 rounded-full hover:bg-[#03596e]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
