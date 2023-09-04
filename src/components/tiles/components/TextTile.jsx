import PropTypes from 'prop-types';
import './tiles.scss';

const TextTile = props => {
  const { className, title, subtitle } = props;

  return (
    <div className={className}>
      <h2 className="tile__title">{title}</h2>
      <p className="tile__subtitle">{subtitle}</p>
    </div>
  );
};

TextTile.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default TextTile;
