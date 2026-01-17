import "./home.css";
import { useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";
import { useNavigate } from "react-router";

// alert
import { toast } from "react-toastify";

export default function Home() {
  const { language, setLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();

  function goPackagesPage() {
    if (language == null || language == "") {
      toast.warn("Please choose any language!");
      return;
    } else {
      navigate("/packages");
    }
  }
  return (
    <section className="home bg-cover bg-center lg:bg-[url(./bgForPC.webp)] bg-[url(./bgForMob.webp)]">
      <div className="container  h-screen mx-auto flex items-center justify-center lg:block">
        <div className="card lg:text-white text-black rounded-lg absolute right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2  lg:right-0 lg:top-0 lg:translate-0 py-6 px-4 flex flex-col items-center   text-center justify-center w-[80%] max-h-screen lg:w-1/2 lg:h-screen ">
          <img
            src="./mainPhoto.webp"
            className="w-24 lg:w-42 rounded-full  absolute  -top-12 border-2 border-white  lg:relative"
            alt="mainPhoto"
          />
          <h1 className="font-bold text-5xl mb-4 mt-8 lg:mt-0 bg-linear-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Mohamed Ali
          </h1>
          <p className="text-2xl leading-8 mb-10 w-[97%] lg:w-[70%] text-white">
            Passionate developer & creative designer crafting beautiful digital
            experiences. Building the future one line of code at a time.
          </p>
          <div className="social flex gap-3 mb-8">
            <a
              href="https://www.facebook.com/ELSHAKYphotographer"
              target="_blank"
              className="w-12 h-12 rounded-full cursor-pointer text-xl flex justify-center items-center border-2 border-blue-600 text-blue-600  hover:bg-blue-600 hover:text-white transition-all duration-300 hover:border-white"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/mohamed_ali_photography1/?igsh=MWhhNjBldnNramdjYQ%3D%3D#"
              target="_blank"
              className="w-12 h-12 rounded-full cursor-pointer text-xl flex justify-center items-center border-2 border-pink-600 text-pink-600  hover:bg-pink-600 hover:text-white transition-all duration-300 hover:border-white"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="wa.me/201007021051"
              target="_blank"
              className="w-12 h-12 rounded-full cursor-pointer text-xl flex justify-center items-center border-2 border-green-500 text-green-500   hover:bg-green-500 hover:text-white transition-all duration-300 hover:border-white"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href="https://www.tiktok.com/@mohamedali_photographer?_t=ZS-90uL9uOTzW6&_r=1"
              target="_blank"
              className="w-12 h-12 rounded-full cursor-pointer text-xl flex justify-center items-center border-2 border-black text-black   hover:bg-black hover:text-white transition-all duration-300 hover:border-white"
            >
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a
              href="https://maps.app.goo.gl/DpdpudTZgD68bZZi6"
              target="_blank"
              className="w-12 h-12 rounded-full cursor-pointer text-xl flex justify-center items-center border-2 border-indigo-700 text-indigo-700   hover:bg-indigo-700 hover:text-white transition-all duration-300 hover:border-white"
            >
              <i className="fa-solid fa-location-dot"></i>
            </a>
          </div>
          <h3 className="text-2xl font-medium mb-2 text-white">
            Choose Your Language
          </h3>
          <div
            onClick={() => {
              localStorage.setItem("lang", "en");
              setLanguage("en");
            }}
            className="bg-gray-900 py-2 px-1 rounded-md    text-white w-full flex items-center gap-1 text-2xl mb-2"
          >
            <input type="radio" name="language" id="en" />
            <label htmlFor="en" className="flex-1 text-start cursor-pointer">
              English
            </label>
          </div>
          <div
            onClick={() => {
              localStorage.setItem("lang", "ar");
              setLanguage("ar");
            }}
            className="bg-gray-900 py-2 px-1 rounded-md  text-white w-full flex items-center gap-1 text-2xl "
          >
            <input id="ar" type="radio" name="language" />
            <label htmlFor="ar" className="flex-1 text-start cursor-pointer">
              Arabic
            </label>
          </div>
          <button
            onClick={goPackagesPage}
            className="bg-linear-to-r from-blue-500 to-purple-600  text-2xl border-2 border-transparent transition-all duration-300 hover:text-white hover:border-white py-2 px-4 rounded-md font-semibold cursor-pointer mt-4 w-full"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
