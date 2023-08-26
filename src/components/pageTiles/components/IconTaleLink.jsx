import PropTypes from 'prop-types';
import './tiles.scss';

const IconTaleLink = props => {
  const { className, icon, linkIcon, link } = props;

  return (
    <a href={link} className={className}>
      <div className="tile__icon-lg">{icon}</div>
      {linkIcon}
    </a>
  );
};

IconTaleLink.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.object,
  linkIcon: PropTypes.object,
  link: PropTypes.string,
};

export default IconTaleLink;
