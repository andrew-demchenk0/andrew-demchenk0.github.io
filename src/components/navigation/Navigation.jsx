import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './navigation.scss';
const Navigation = () => {
  const { t } = useTranslation('global');

  return (
    <ul className='navigation'>
      <li className='navigation__item'>
        <NavLink to="/" style={({isActive}) => ({color: isActive ? 'var(--main-color)' : 'inherit'})}>
          {t('home')}
        </NavLink>
      </li>
      <li className='navigation__item'>
        <NavLink to="/projects" style={({isActive}) => ({color: isActive ? 'var(--main-color)' : 'inherit'})}>
          {t('projects')}
        </NavLink>
      </li>
      <li className='navigation__item'>
        <NavLink to="/about" style={({isActive}) => ({color: isActive ? 'var(--main-color)' : 'inherit'})}>
          {t('about')}
        </NavLink>
      </li>
      <li className='navigation__item'>
        <NavLink to="/resume" style={({isActive}) => ({color: isActive ? 'var(--main-color)' : 'inherit'})}>
          {t('resume')}
        </NavLink>
      </li>
      <li className='navigation__item'>
        <NavLink to="/tech-skills" style={({isActive}) => ({color: isActive ? 'var(--main-color)' : 'inherit'})}>
          {t('techSkills')}
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
