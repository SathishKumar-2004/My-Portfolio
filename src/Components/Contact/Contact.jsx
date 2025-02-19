import { useRef, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

import "./Contact.css";

// toast.configure();

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      toast.warn("Please fill in all fields.");
      return;
    }

    setError("");
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          form.current.reset();
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send message. Try again later.");
        }
      );
  };
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <h2 className="font-bold text-white mb-20 text-center section-title-contact ">
        Contact
      </h2>
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between max-w-6xl">
        {/* Left Side: Contact Info with Image/GIF */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>

          <p className="mt-6 text-gray-400">
            Hey, I am very much interested speaking to you, <br />
            Feel free to reach out for collaborations or just a chat!
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl mt-6">
            <a
              href="mailto:sathishkumarofficial2004@gmail.com"
              target="_blank"
              className="hover:text-yellow-400 transform hover:scale-110 transition-all duration-200"
            >
              <FaRegEnvelope />
            </a>
            <a
              href="https://github.com/SathishKumar-2004"
              target="_blank"
              className="hover:text-gray-600 transform hover:scale-110 transition-all duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sathish-kumar2004/"
              target="_blank"
              className="hover:text-blue-500 transform hover:scale-110 transition-all duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/itz__.sathish?igsh=MTVneTMybGpmOGJjZQ=="
              target="_blank"
              className="hover:text-pink-500 transform hover:scale-110 transition-all duration-200"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
          <form ref={form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleInputChange}
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded h-32 resize-none overflow-y-auto"
            ></textarea>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <ToastContainer />
            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-500 py-3 rounded text-white hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
