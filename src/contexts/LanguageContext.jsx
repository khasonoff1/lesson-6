import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { language } from "../data/lang";
import { LANGUAGE } from "../constants";

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  const [langType, setLangType] = useState(
    localStorage.getItem(LANGUAGE) || "ru"
  );

  const switchLang = (e) => {
    setLangType(e.target.value);
    localStorage.setItem(LANGUAGE, e.target.value);
  };

  const state = { langType, lang: language[langType], switchLang };

  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageContextProvider.propTypes = {
  children: PropTypes.node,
};

export default LanguageContextProvider;
