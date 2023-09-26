import PropTypes from 'prop-types';
import Button from 'components/button/Button.jsx';

const ResumeTile = props => {
  const {
    className,
    image,
    alt,
    title,
    subtitle,
    buttons,
  } = props;
  return (
    <div className={className}>
      <div className="tile__image-avatar">
        <img src={image} alt={alt}/>
      </div>
      <h2 className="tile__title">{title}</h2>
      <h1 className="tile__subtitle-special">{subtitle}</h1>
      {buttons.map((button, index) => (
        <Button
          key={index}
          className={button.className}
          link={button.link}
          icon={button.icon}
          text={button.text}
          download={button.download}
        />
      ))}
    </div>
  );
};

ResumeTile.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      icon: PropTypes.element,
      text: PropTypes.string,
      download: PropTypes.string,
    })
  ),
};

export default ResumeTile;
