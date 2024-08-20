import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          navbar: {
            home: "Home",
            about: "about",
            products: "Products",
            orders: "Orders",
            settings: "Settings",
          },
        },
      },
      uz: {
        translation: {
          navbar: {
            home: "Uy",
            about: "Biz haqimizda",
            products: "Mahsulotlar",
            orders: "Buyurtmalar",
            settings: "Sozlamalar",
          },
        },
      },
    },
  
  });

export default i18n;
