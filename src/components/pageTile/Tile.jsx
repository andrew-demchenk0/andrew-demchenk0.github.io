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
  };
  const renderIconLinkTale = () => {
    return (
      <div className={className}>
        <div className="tile__icon-lg">{icon}</div>
        <div className="tile__link-icon">{linkIcon}</div>
      </div>
    );
  };

  const renderTitleSubtitleTale = () => {
    return (
      <div className={className}>
        <h2 className="tile__title">{title}</h2>
        <p className="tile__subtitle">{subtitle}</p>
      </div>
    );
  };

  const renderTitleSubtitleLinkIndicatorTale = () => {
    return (
      <div className={className}>
        <h2 className="tile__title">{title}</h2>
        <div className="tile__wrapper">
          <p className="tile__subtitle">{subtitle}</p>
          <div className="tile__link-icon">{linkIcon}</div>
        </div>
      </div>
    );
  };

  const renderImageTitleSubtitleLinkTale = () => {
    return (
      <div className={className}>
        <img className="tile__image" src={image} alt={alt}/>
        <h2 className="tile__title">{title}</h2>
        <div className="tile__wrapper">
          <p className="tile__subtitle">{subtitle}</p>
          <div className="tile__link-icon">{linkIcon}</div>
        </div>
      </div>
    );
  };

  const renderIconTitleSubtitleLinkTale = () => {
    return (
      <div className={className}>
        <div className="tile__icon">{icon}</div>
        <h2 className="tile__title">{title}</h2>
        <div className="tile__wrapper">
          <p className="tile__subtitle">{subtitle}</p>
          <div className="tile__link-icon">{linkIcon}</div>
        </div>
      </div>
    );
  };

  const content = (image && alt) && renderImageTale() ||
    (icon && linkIcon) && renderIconLinkTale() ||
    (title && subtitle) && renderTitleSubtitleTale() ||
    (title && subtitle && linkIcon) && renderTitleSubtitleLinkIndicatorTale() ||
    (icon && title && subtitle && linkIcon) && renderIconTitleSubtitleLinkTale() ||
    (image && alt && title && subtitle && linkIcon) && renderImageTitleSubtitleLinkTale();
  console.log('content', content)
  return (
    <>
      {/*{(image && alt) && renderImageTale()}*/}
      {/*{(icon && linkIcon) && renderIconLinkTale()}*/}
      {/*{(title && subtitle) && renderTitleSubtitleTale()}*/}
      {/*{(title && subtitle && linkIcon) && renderTitleSubtitleLinkIndicatorTale()}*/}
      {/*{(icon && title && subtitle && linkIcon) && renderIconTitleSubtitleLinkTale()}*/}
      {/*{(image && alt && title && subtitle && linkIcon) && renderImageTitleSubtitleLinkTale()}*/}
      {content}
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
  alt: PropTypes.string,
};

export default Tile;
