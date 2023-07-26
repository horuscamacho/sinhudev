import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import { GrFormClose } from "react-icons/gr";
import { FaX } from "react-icons/fa6";
import { useState } from "react";
import emailjs from "@emailjs/browser";
export default function Form({ isFormOpen, setIsFormOpen }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_orek92m",
        "template_sg3t7ci",
        {
          from_name: form.name,
          to_name: "Sinhudev",
          from_email: form.email,
          to_email: "horussinhue.camacho@cesantares.edu.mx",
          message: form.message,
        },
        "sdOfLmsxMb4uMMW-a"
      )
      .then(
        () => {
          setLoading(false);
          setForm({ name: "", email: "", message: "" });
          setAlertMessage(
            "Muchas gracias por tu mensaje, tan pronto como me sea posible me pondré en contacto! 🚀"
          );
          setAlertOpen(true);
        },
        (error) => {
          setLoading(false);
          setAlertMessage(
            "Ocurrió un problema, inténtalo nuevamente por favor."
          );
          setAlertOpen(true);
        }
      );
  };
  return (
    <>
      <AnimatePresence>
        {isFormOpen && (
          <motion.form
            initial={{ display: "none", opacity: 0, scale: 0 }}
            animate={{ display: "flex", opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="fixed bg-black left-0 top-0 w-screen h-screen z-10 flex flex-col justify-center items-center gap-12"
          >
            <h2 className="text-4xl font-bold text-white ">
              Formulario de Contacto
            </h2>
            <div className="flex flex-col gap-8">
              <label className="text-white flex justify-between w-96  ">
                <span className="">Nombre:</span>
                <input
                  onChange={handleChange}
                  name="name"
                  value={form.name}
                  type="text"
                  className="bg-gray-900 placeholder:text-gray-500 rounded-sm outlined-none border-none font-medium w-60 p-1"
                  placeholder="Ingresa tu nombre"
                />
              </label>
              <label className="text-white flex justify-between w-96 ">
                <span className="">Email:</span>
                <input
                  onChange={handleChange}
                  name="email"
                  value={form.email}
                  placeholder="Ingresa tu correo"
                  type="email"
                  className="bg-gray-900 placeholder:text-gray-500 rounded-sm outlined-none border-none font-medium w-60 p-1"
                />
              </label>
              <label className="text-white flex justify-between w-96 ">
                <span className="">Mensaje:</span>
                <textarea
                  onChange={handleChange}
                  name="message"
                  value={form.message}
                  rows={7}
                  placeholder="Ingresa tu mensaje aquí"
                  className="bg-gray-900 placeholder:text-gray-500 rounded-sm outlined-none border-none font-medium w-60 p-1"
                />
              </label>
            </div>
            <span
              onClick={() => setIsFormOpen(false)}
              className="text-white absolute top-12 right-24 hover:text-primaryDark cursor-pointer"
            >
              <FaX className="text-white hover:text-primaryDark" size={30} />
            </span>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-primaryDark text-black font-bold py-1 px-4 rounded hover:text-gray-500 text-lg"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
      {alertOpen && (
        <div className="w-1/3 h-1/2 bg-gray-900 fixed z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md text-white flex flex-col gap-8 p-16 justify-center items-center">
          <p>{alertMessage}</p>
          <button
            type="button"
            className="bg-primaryDark text-black font-bold py-1 px-4 rounded hover:text-gray-500 text-lg"
            onClick={() => {
              setAlertMessage("");
              setAlertOpen(false);
              setIsFormOpen(false);
            }}
          >
            Aceptar
          </button>
        </div>
      )}
    </>
  );
}
