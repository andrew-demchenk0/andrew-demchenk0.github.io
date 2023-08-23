import React, { useState } from 'react';
import { useTheme } from 'hooks/themeHook.js';
import { useTranslation } from 'react-i18next';
import Logo from 'icons/logo/Logo.jsx';

import 'appHeader.scss';
import { NavLink } from 'react-router-dom';
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
    <div className='header'>
      <NavLink to="/" className="header__logo" >
        <Logo color="var(--title-color)" />
      </NavLink>

      <ul className='header__nav'>
        <li className='header__nav-item'>
          <NavLink to="/" style={({isActive}) => ({color: isActive ? 'var(--main-color)' : 'inherit'})}>
            {t('home')}
          </NavLink>
        </li>
        <li className='header__nav-item'>
          <NavLink to="/projects" style={({isActive}) => ({color: isActive ? 'var(--main-color)' : 'inherit'})}>
            {t('projects')}
          </NavLink>
        </li>
        <li className='header__nav-item'>
          <NavLink to="/about" style={({isActive}) => ({color: isActive ? 'var(--main-color)' : 'inherit'})}>
            {t('about')}
          </NavLink>
        </li>
        <li className='header__nav-item'>
          <NavLink to="/resume" style={({isActive}) => ({color: isActive ? 'var(--main-color)' : 'inherit'})}>
            {t('resume')}
          </NavLink>
        </li>
        <li className='header__nav-item'>
          <NavLink to="/tech-skills" style={({isActive}) => ({color: isActive ? 'var(--main-color)' : 'inherit'})}>
            {t('techSkills')}
          </NavLink>
        </li>
      </ul>

      <div className='switcher-wrapper'>
        <label className="switcher">
          <input
            className="switcher__input"
            type="checkbox"
            checked={currentTheme === 'dark'}
            onChange={changeTheme}
          />
          <FiSun className="switcher__icon-sun" />
          <BiMoon className="switcher__icon-moon" />
        </label>

        <label className="switcher">
          <input
            type="checkbox"
            className="switcher__input"
            onChange={handleChangeLanguage} />
          <span className="switcher__lang">{language === 'ua' ? 'EN' : 'UA'}</span>
        </label>
      </div>

    </div>
  );
};

export default AppHeader;
