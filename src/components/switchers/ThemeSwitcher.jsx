import { useState } from 'react';
import { FiSun } from 'react-icons/fi';
import { BiMoon } from 'react-icons/bi';
import { useTheme } from 'hooks/themeHook.js';

import './switchers.scss';
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  const changeTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <label className="switcher js-cur-link">
      <input
        className="switcher__input"
        type="checkbox"
        checked={currentTheme === 'dark'}
        onChange={changeTheme}
      />
      <FiSun className="switcher__icon-sun" />
      <BiMoon className="switcher__icon-moon" />
    </label>
  );
};

export default ThemeSwitcher;
