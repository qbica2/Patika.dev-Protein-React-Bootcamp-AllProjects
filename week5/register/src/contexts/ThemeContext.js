/* eslint-disable react/prop-types */
import React, { createContext, useState,useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [vectorColor,setVectorColor]= useState("blue");

  useEffect(() => {
    if(theme === "dark"){
      setVectorColor("#FFBF5E");
    }else if(theme === "light"){
      setVectorColor("#444AFF");
    }
  },[theme]);

  const handleSetTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const values = {
    theme,
    vectorColor,
    handleSetTheme
  };
 
  return(
    <ThemeContext.Provider value={values} >{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;