import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { navigationLinks } from 'components/navigation/helper/navigationLinks.js';

import './navigation.scss';

const Navigation = ({ className }) => {
  const { t } = useTranslation('global');

  const linkStyle = {
    color: 'var(--subtitle-color)',
  };

  const activeLinkStyle = {
    color: 'var(--main-color)',
  };

  return (
    <ul className={className}>
      {navigationLinks.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.to}
            className="navigation__item js-cur-link"
            style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
          >
            {t(link.label)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

Navigation.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Navigation;
