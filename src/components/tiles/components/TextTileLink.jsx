import PropTypes from 'prop-types';
import './tiles.scss';

const TextTileLink = props => {
  const { className, title, subtitle, linkIcon, linkTo } = props;

  return (
    <a href={linkTo} className={className}>
      <p className="tile__subtitle">{subtitle}</p>
      <div className="tile__wrapper">
        <h2 className="tile__title-special">{title}</h2>
        {linkIcon}
      </div>
    </a>
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
