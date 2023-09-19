import PropTypes from 'prop-types';
import Button from 'components/button/Button.jsx';

const ResumeTile = props => {
  const {
    className,
    image,
    alt,
    title,
    subtitle,
    buttonClassName,
    buttonLink,
    buttonClassName2,
    buttonLink2,
    download,
  } = props;
  return (
    <div className={className}>
      <div className="tile__image-avatar">
        <img src={image} alt={alt}/>
      </div>
      <h2 className="tile__title">{title}</h2>
      <h1 className="tile__subtitle-special">{subtitle}</h1>
      <Button className={buttonClassName} link={buttonLink}/>
      <Button className={buttonClassName2} link={buttonLink2} download={download}/>
    </div>
  );
};

ResumeTile.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonClassName: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonClassName2: PropTypes.string,
  buttonLink2: PropTypes.string,
  download: PropTypes.string,
};

export default ResumeTile;
