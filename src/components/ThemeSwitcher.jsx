import { useState } from "react";

export default function ThemeSwitcher({ darkTheme, setDarkTheme }) {
  const [previewTheme, setPreviewTheme] = useState(null);

  const handleMouseEnter = () => {
    setPreviewTheme(!darkTheme);
  };

  const handleMouseLeave = () => {
    setPreviewTheme(null);
  };

  const handleClick = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className="themeSwitcher">
      <div className="theme">
        {previewTheme !== null ? (
          previewTheme ? (
            <p>Dark Mode</p>
          ) : (
            <p>Light Mode</p>
          )
        ) : darkTheme ? (
          <p>Dark Mode</p>
        ) : (
          <p>Light Mode</p>
        )}
      </div>
      <div
        id="themeSwitch"
        className={
          darkTheme
            ? "themeSwitch switchDark trans1"
            : "themeSwitch switchLight trans1"
        }
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="switchHandle trans1"></div>
      </div>
    </div>
  );
}
