import PropTypes from 'prop-types';

import './tile.scss';
const Tile = props => {
  const { image, alt, className, icon, title, subtitle, linkIcon } = props;

  const renderImageTale = () => {
    return (
      <div className={className}>
        <img src={image} alt={alt}/>
      </div>
    );
  }
  const renderIconLinkTale = () => {
    return (
      <div className={className}>
        <div className='tile-sm__icon'>{icon}</div>
        <div className="tile-sm__linkIcon">{linkIcon}</div>
      </div>
    );
  };

  const renderTitleSubtitleTale = () => {
    return (
      <div className={className}>
        <div className="tile-md__title">{title}</div>
        <div className="tile-md__subtitle">{subtitle}</div>
      </div>
    );
  };

  const renderTitleSubtitleLinkIndicatorTale = () => {
    return (
      <div className={className}>
        <div className="tile-md__title">{title}</div>
        <div className='tile-lg__wrapper'>
          <div className="tile-lg__subtitle">{subtitle}</div>
          <div className="tile-lg__linkIcon">{linkIcon}</div>
        </div>
      </div>
    );
  };

  const renderImageTitleSubtitleLinkTale = () => {
    return (
      <div className={className}>
        <img src={image} alt={alt}/>
        <div className="tile-lg__title">{title}</div>
        <div className='tile-lg__wrapper'>
          <div className="tile-lg__subtitle">{subtitle}</div>
          <div className="tile-lg__linkIcon">{linkIcon}</div>
        </div>
      </div>
    );
  };

  const renderIconTitleSubtitleLinkTale = () => {
    return (
      <div className={className}>
        <div className="tile-lg__icon">{icon}</div>
        <div className="tile-lg__title">{title}</div>
        <div className='tile-lg__wrapper'>
          <div className="tile-lg__subtitle">{subtitle}</div>
          <div className="tile-lg__linkIcon">{linkIcon}</div>
        </div>
      </div>
    );
  };
  return (
    <>
      {(image && alt) && renderImageTale()}
      {(icon && linkIcon) && renderIconLinkTale()}
      {(title && subtitle) && renderTitleSubtitleTale()}
      {(title && subtitle && linkIcon) && renderTitleSubtitleLinkIndicatorTale()}
      {(icon && title && subtitle && linkIcon ) && renderIconTitleSubtitleLinkTale()}
      {(image && alt && title && subtitle && linkIcon ) && renderImageTitleSubtitleLinkTale()}
    </>
  );
};

Tile.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.object,
  linkIcon: PropTypes.object,
  image: PropTypes.string,
  alt: PropTypes.string
};

export default Tile;
