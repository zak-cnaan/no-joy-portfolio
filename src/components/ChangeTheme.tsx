import { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import TopButton from "./menues/TopButton";

function ChangeTheme() {
  const [ mode, setMode ] = useState("light");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme) localStorage.setItem("theme", "light")
    else if (theme === "dark"){
      toggleDarkMode();
  
    }
  }, [])



  const toggleDarkMode = () => {
    const nextMode = mode === "light" ? "dark" : "light";
    document.querySelector('html')!.classList.toggle("dark");
    localStorage.setItem("theme", nextMode);
    setMode(nextMode);
  };

  function DarkModeIcon() {
    return mode === "light" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />;
  }

  return (
    <>
      <TopButton onClick={toggleDarkMode}
      >
        <DarkModeIcon />
      </TopButton>

    </>
  );
}

export default ChangeTheme;
