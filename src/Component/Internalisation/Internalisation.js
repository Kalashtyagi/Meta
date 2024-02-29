import React from "react";
import "../../App.css";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./language-selector";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          greeting: "Hello, Welcome",
          description: {
            line1: "Hey i am creating this internalisation app",
            line2: "This app creates my app in different language",
          },
        },
      },
      fr: {
        translation: {
          greeting: "Bonjour, bienvenue",
          description: {
            line1: "Salut, je crée cette application d'internationalisation",
            line2:
              "Cette application crée mon application dans différentes langues",
          },
        },
      },
      hi: {
        translation: {
          greeting: "नमस्ते, आपका स्वागत है",
          description: {
            line1: "नमस्ते, मैं इस अंतरराष्ट्रीयकरण ऐप को बना रहा हूँ",
            line2: "यह एप्लिकेशन मेरे एप्लिकेशन को विभिन्न भाषाओं में बनाता है",
          },
        },
      },
      ar: {
        translation: {
          greeting: "مرحبًا، مرحبًا بك",
          description: {
            line1: "مرحبًا، أنا أقوم بإنشاء هذا التطبيق للتدويل",
            line2: "يقوم هذا التطبيق بإنشاء تطبيقي بلغات مختلفة",
          },
        },
      },
    },
  });

export default function Internalisation() {
  const { t } = useTranslation();
  const { line1, line2 } = t("description");
  // console.log("d", description);
  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <p>{line1}</p>
      <span>{line2}</span>
    </div>
  );
}
