import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setisClicked] = useState(initialState);
  const handleClick = (clicked) => {
    setisClicked({ ...initialState, [clicked]: true });
  };
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#e1affd");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (e) => {
    setCurrentColor(e.target.value);

    localStorage.setItem("ColorMode", e.target.value);
    setThemeSettings(false);
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu: activeMenu,
        setActiveMenu: setActiveMenu,
        isClicked: isClicked,
        setisClicked: setisClicked,
        handleClick: handleClick,
        screenSize: screenSize,
        setScreenSize: setScreenSize,
        currentColor: currentColor,
        setCurrentColor: setCurrentColor,
        currentMode: currentMode,
        setCurrentMode: setCurrentMode,
        themeSettings: themeSettings,
        setThemeSettings: setThemeSettings,
        setColor: setColor,
        setMode: setMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
