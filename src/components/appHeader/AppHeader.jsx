import React, { useState } from 'react';
import { useTheme } from '../../hooks/themeHook.js';
import { useTranslation } from 'react-i18next';
import Logo from '../../icons/logo/Logo.jsx';

import './appHeader.scss';
import { Link } from 'react-router-dom';
import { FiSun } from 'react-icons/fi';
import { BiMoon } from 'react-icons/bi';

const AppHeader = () => {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);
  const {t, i18n} = useTranslation('global');

  const changeTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  const language = localStorage.getItem('lng');

  const handleChangeLanguage = () => {
    const newLanguage = language === 'en' ? 'ua' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('lng', newLanguage);

  };
  return (
    <div>
      <Link to="/">
        <Logo className="logo" color="var(--title-color)" />
      </Link>

      <label className="switcher">
        <input
          className="input"
          type="checkbox"
          checked={currentTheme === 'dark'}
          onChange={changeTheme}
        />
        <FiSun className="icon icon-sun" />
        <BiMoon className="icon icon-moon" />
      </label>
      <label className="switcher">
        <input
          type="checkbox"
          className="input"
          onChange={handleChangeLanguage}
        />
        <span className="langBox">{language === 'ua' ? 'EN' : 'UA'}</span>
      </label>
      <h1 className="animate__animated animate__bounce header">An animated element</h1>
      <div>{t('h1')}</div>
      <div>{t('title.msg')}</div>
    </div>
  );
};

export default AppHeader;
