import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './tiles.scss';

const ProjectTile = props => {
  const { className, image, alt, title, subtitle, linkIcon, linkTo } = props;

  return (
    <NavLink to={linkTo} className={className}>
      <div className="tile__image">
        <img src={image} alt={alt}/>
      </div>
      <p className="tile__subtitle">{subtitle}</p>
      <div className="tile__wrapper">
        <h2 className="tile__title">{title}</h2>
        {linkIcon}
      </div>
    </NavLink>
  );
};

ProjectTile.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  linkIcon: PropTypes.object,
  linkTo: PropTypes.string,
};

export default ProjectTile;
