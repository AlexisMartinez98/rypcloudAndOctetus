import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { VscLocation, VscMail } from "react-icons/vsc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, phoneNumber, email, message } = formData;

    if (!name.trim()) {
      toast.error("Por favor ingresa tu nombre.");
      return false;
    }
    if (!phoneNumber.trim()) {
      toast.error("Por favor ingresa tu número de teléfono.");
      return false;
    }
    if (!email.trim()) {
      toast.error("Por favor ingresa tu correo electrónico.");
      return false;
    }
    if (!message.trim()) {
      toast.error("Por favor ingresa tu mensaje.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post(
        "https://rypconsultores.cl/send-email",
        {
          to: formData.email,
          subject: `Consulta de ${formData.name}`,
          body: `Mensaje: ${formData.message}\nTeléfono: ${formData.phoneNumber}`,
        }
      );

      if (response.status === 200) {
        toast.success("Email enviado con éxito!");
        setFormData({ name: "", phoneNumber: "", email: "", message: "" });
      } else {
        toast.error("Error al enviar el email.");
      }
    } catch (error) {
      toast.error("Error de conexión. Intenta de nuevo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="max-w-full mx-auto px-4 py-8 bg-[#EBEBEB]">
      <div className="text-center mb-8">
        <h1 className="text-4xl roboto-black mb-2">{t("form.title")}</h1>
        <h2 className="text-xl roboto-regular">{t("form.heading")}</h2>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-6 mb-8 flex-col md:flex-row lg:flex-row">
          <div className="flex gap-3 items-center">
            <VscLocation size={25} />
            <span className="text-black roboto-medium">Santiago, RM CL</span>
          </div>
          <div className="flex gap-3 items-center">
            <VscMail size={25} />
            <span className="text-black roboto-medium">
              contacto@rypcloud.cl{" "}
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              {t("form.name")} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-[#08A8FD] bg-[#EBEBEB] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold mb-1"
            >
              {t("form.number")} *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Your Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-3 border border-[#08A8FD] bg-[#EBEBEB] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              {t("form.email")} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#08A8FD] bg-[#EBEBEB] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-1"
            >
              {t("form.message")} *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-[#08A8FD] bg-[#EBEBEB] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#08A8FD] text-white py-2 px-4 rounded-full hover:bg-[#0897e4]"
            disabled={loading}
          >
            {loading ? "Enviando..." : t("form.submit")}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
