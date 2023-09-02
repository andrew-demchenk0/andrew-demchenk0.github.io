import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './navigation.scss';
import PropTypes from 'prop-types';
const Navigation = props => {
  const {className} = props
  const { t } = useTranslation('global');

  return (
    <ul className={className}>
      <li>
        <NavLink to="/"
                 className='navigation__item'
                 style={({isActive}) => ({color: isActive ? 'var(--main-color)' : 'var(--subtitle-color)'})}>
                 {t('home')}
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects"
                 className='navigation__item'
                 style={({isActive}) => ({color: isActive ? 'var(--main-color)' : 'var(--subtitle-color)'})}>
          {t('projects')}
        </NavLink>
      </li>
      <li>
        <NavLink to="/about"
                 className='navigation__item'
                 style={({isActive}) => ({color: isActive ? 'var(--main-color)' : 'var(--subtitle-color)'})}>
          {t('about')}
        </NavLink>
      </li>
      <li>
        <NavLink to="/resume"
                 className='navigation__item'
                 style={({isActive}) => ({color: isActive ? 'var(--main-color)' : 'var(--subtitle-color)'})}>
          {t('resume')}
        </NavLink>
      </li>
    </ul>
  );
};

Navigation.propTypes = {
  className: PropTypes.string.isRequired,
}

export default Navigation;
