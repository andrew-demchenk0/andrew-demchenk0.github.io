import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './tiles.scss';

const IconTextTileLink = props => {
  const { className, icon, title, subtitle, linkIcon, linkTo } = props;

  return (
    <NavLink to={linkTo} className={className}>
      <div className="tile__icon">{icon}</div>
      <p className="tile__subtitle">{subtitle}</p>
      <div className="tile__wrapper">
        <h2 className="tile__title">{title}</h2>
        {linkIcon}
      </div>
    </NavLink>
  );
};

IconTextTileLink.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.object,
  linkIcon: PropTypes.object,
  linkTo: PropTypes.string,
};

export default IconTextTileLink;
