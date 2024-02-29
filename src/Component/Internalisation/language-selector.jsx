import React, { useEffect } from "react";
import "../../App.css";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "French" },
  { code: "hi", lang: "Hindi" },
  { code: "ar", lang: "Arabic" },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    console.log(i18n.dir());
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="btn-container">
      {languages.map((lang) => {
        return (
          <button
            className={lang.code === i18n.language ? "selected" : ""}
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
          >
            {lang.lang}
          </button>
        );
      })}
    </div>
  );
}
