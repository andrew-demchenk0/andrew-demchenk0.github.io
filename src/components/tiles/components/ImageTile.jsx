import PropTypes from 'prop-types';
import './tiles.scss';

const ImageTile = props => {
  const { image, alt, className } = props;

  return (
    <div className={className}>
      <img src={image} alt={alt}/>
    </div>
  );
};

ImageTile.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageTile;
