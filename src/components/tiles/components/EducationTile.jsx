import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const EducationTile = props => {
  const { className, image, alt, title, subtitle, description, linkIcon, linkTo } = props;

  return (
    <NavLink to={linkTo} className={className} target="_blank" rel="noreferrer">
      <div className="tile__image-icon">
        <img src={image} alt={alt}/>
      </div>
      <h3 className="tile__title">{title}</h3>
      <p className="tile__subtitle">{subtitle}</p>
      <div className="tile__wrapper">
        <p className="tile__description">{description}</p>
        {linkTo ? linkIcon : null}
      </div>
    </NavLink>
  );
};

EducationTile.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  linkIcon: PropTypes.object,
  linkTo: PropTypes.string,
};

export default EducationTile;
