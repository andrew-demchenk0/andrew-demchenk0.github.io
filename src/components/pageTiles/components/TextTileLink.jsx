import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './tiles.scss';

const TextTileLink = props => {
  const { className, title, subtitle, linkIcon, linkTo } = props;

  return (
    <NavLink to={linkTo} className={className}>
      <h2 className="tile__title">{title}</h2>
      <div className="tile__wrapper">
        <p className="tile__subtitle">{subtitle}</p>
        {linkIcon}
      </div>
    </NavLink>
  );
};

TextTileLink.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  linkIcon: PropTypes.object,
  linkTo: PropTypes.string,
};

export default TextTileLink;
