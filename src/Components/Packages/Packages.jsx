import { useTranslation } from "react-i18next";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";

import { motion } from "motion/react";

export default function Packages() {
  const { language } = useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
    document.getElementsByClassName("packages")[0].dir =
      language == "en" ? "ltr" : "rtl";
  }, [i18n, language]);

  const packages = [
    {
      title: "MINI WEDDING",
      features: [
        "Photosession",
        "Photobook 30x45",
        "Mini Photobook",
        "Portrait",
        "1 photographer",
        "Delivery within 21 days",
      ],
      oldPrice: "3500",
      newPrice: "2500",
    },
    {
      title: "HALF-DAY",
      features: [
        "Photosession",
        "Hall Coverage (Party)",
        "Photobook 30x45",
        "Mini Photobook",
        "Portrait",
        "1 photographer",
        "Delivery within 21 days",
      ],
      oldPrice: "4500",
      newPrice: "3500",
    },
    {
      title: "FULLDAY",
      features: [
        "Preparation shoot (accessories)",
        "Photosession",
        "Hall Coverage (Party)",
        "Photobook 30x45",
        "Mini Photobook",
        "Portrait",
        "1 photographer",
        "Delivery within 21 days",
      ],
      oldPrice: "6000",
      newPrice: "5000",
    },
    {
      title: "VIP",
      features: [
        "Preparation shoot (accessories)",
        "Photosession",
        "Hall Coverage (Party)",
        "Media Coverage",
        "Photobook 30x45",
        "Mini Photobook",
        "Portrait",
        "2 Photographers",
        "Delivery within 21 days",
      ],
      oldPrice: "9000",
      newPrice: "8000",
    },
  ];

  const additionalOptions = [
    { text: "Extra Photographer", price: "1500 EGP" },
    { text: "Extra Hour of Shooting", price: "500 EGP" },
    { text: "Media Coverage", price: "1200 EGP" },
    { text: "Promo Video (session)", price: "2000 EGP" },
    { text: "Promo Video (session + Party)", price: "2500 EGP" },
    { text: "Full-Day Promo Video", price: "3000 EGP" },
  ];

  return (
    <section className="packages bg-gray-900 text-white min-h-screen p-4 sm:p-8">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold text-center my-12">
          <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {t("Packages")}
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
              }}
              key={index}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 flex flex-col transform hover:scale-101 transition-transform duration-300"
            >
              <h2 className="text-center text-4xl font-bold text-purple-400 mb-6">
                {pkg.title}
              </h2>
              <ul className="space-y-3 grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-2xl">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    <span className="text-gray-300">{t(feature)}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center mt-8">
                <div className="text-gray-500 line-through text-xl">
                  {pkg.oldPrice} <span>{t("Pound")}</span>
                </div>
                <div className="text-4xl font-bold">
                  {pkg.newPrice} <span>{t("Pound")}</span>
                </div>
              </div>
              {/* <button className="mt-8 w-full bg-linear-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                {t("Choose Plan")}
              </button> */}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700">
          <h1 className="flex items-center justify-center gap-4 text-3xl font-bold mb-8">
            <span role="img" aria-label="camera">
              📸
            </span>
            <span>{t("Additional Photography Options")}</span>
          </h1>
          <ul className="space-y-4">
            {additionalOptions.map((option, index) => (
              <li
                key={index}
                className="flex text-2xl justify-between items-center border-b border-gray-700 pb-3 text-gray-300"
              >
                <span>{t(option.text)}</span>
                <span className="font-semibold text-purple-400">
                  {t(option.price)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center  text-gray-500 italic mt-12 text-2xl px-4">
          <span>
            {t(
              "When changing the wedding date, the booking will not be canceled — you can only change the photography date."
            )}
          </span>
        </div>
      </div>
    </section>
  );
}
