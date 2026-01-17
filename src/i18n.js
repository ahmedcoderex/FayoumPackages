import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Packages: "Packages",
      Photosession: "Photosession",
      "Photobook 30x45": "Photobook 30x45",
      "Mini Photobook": "Mini Photobook",
      Portrait: "Portrait",
      "1 photographer": "1 photographer",
      "Delivery within 21 days": "Delivery within 21 days",
      Pound: "Pound",
      "Hall Coverage (Party)": "Hall Coverage (Party)",
      "Preparation shoot (accessories)": "Preparation shoot (accessories)",
      "Media Coverage": "Media Coverage",
      "2 Photographers": "2 Photographers",
      "Additional Photography Options": "Additional Photography Options",
      "Extra Photographer": "Extra Photographer",
      "Extra Hour of Shooting": "Extra Hour of Shooting",
      "Promo Video (session)": "Promo Video (session)",
      "Promo Video (session + Party)": "Promo Video (session + Party)",
      "Full-Day Promo Video": "Full-Day Promo Video",
      EGP: "EGP",
      "When changing the wedding date, the booking will not be canceled — you can only change the photography date.":
        "When changing the wedding date, the booking will not be canceled — you can only change the photography date.",
    },
  },
  ar: {
    translation: {
      Packages: "باقات",
      Photosession: "فوتوسيشن",
      "Photobook 30x45": "فوتوبوك مقاس 30×45",
      "Mini Photobook": "ميني فوتوبوك",
      Portrait: "بورتريه",
      "1 photographer": "عدد 1 مصور",
      "Delivery within 21 days": "الاستلام خلال 21 يوم",
      Pound: "جنيه",
      "Hall Coverage (Party)": "تصوير قاعة",
      "Preparation shoot (accessories)": "تصوير التحضيرات (الاكسسوارات)",
      "Media Coverage": "ميديا كافريدج",
      "2 Photographers": "عدد 2 مصور",
      "Additional Photography Options": "خيارات التصوير الإضافية",
      "Extra Photographer": "مصور إضافي",
      "Extra Hour of Shooting": "ساعة تصوير إضافية",
      "Promo Video (session)": " برومو فيديو (أثناء الفوتوسيشن فقط)",
      "Promo Video (session + Party)": "برومو فيديو أثناء الفوتوسيشن والقاعة",
      "Full-Day Promo Video": "برومو فيديو يوم كامل",
      EGP: "جنيه",
      "When changing the wedding date, the booking will not be canceled — you can only change the photography date.":
        "حين تغيير موعد الزفاف .. لن يتم إلغاء الحجز يمكنك فقط تغيير تاريخ التصوير",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
