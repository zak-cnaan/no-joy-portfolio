// import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useEffect, useState } from "react";
// import { FaLinkedin } from "react-icons/fa6";
// import { GiLinkedRings } from "react-icons/gi";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import TopButton from "./menues/TopButton";

function ChangeTheme() {
  const [ mode, setMode ] = useState("light");
  const [mounted, setMounted] = useState(false);

  const toggleDarkMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  // necessary for server-side rendering
  // because mode is undefined on the server
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  function DarkModeIcon() {
    return mode === "light" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />;
  }

  return (
    <>
      <TopButton onClick={toggleDarkMode}
      >
        <DarkModeIcon />
      </TopButton>
      {/* <IconButton onClick={toggleDarkMode}>
        <DarkModeSwitch onChange={() => null} checked={mode === "light"} />
      </IconButton>
      <IconButton variant={"outlined"} onClick={toggleDarkMode}>
        <DarkModeSwitch onChange={() => null} checked={mode === "light"} />
      </IconButton>
      <IconButton variant={"solid"} onClick={toggleDarkMode}>
        <DarkModeSwitch onChange={() => null} checked={mode === "light"} />
      </IconButton>
      <IconButton variant={"soft"} onClick={toggleDarkMode}>
        <DarkModeSwitch onChange={() => null} checked={mode === "light"} />
      </IconButton> */}
    </>
  );
}

export default ChangeTheme;
