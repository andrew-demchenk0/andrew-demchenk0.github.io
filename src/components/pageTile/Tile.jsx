import PropTypes from 'prop-types';

import './tile.scss';
const Tile = props => {
  const {className, icon, title, subtitle, linkIcon } = props;
  const renderTileSmall = () => {
    return (
      <div className={className}>
        <div className='tile-sm__icon'>{icon}</div>
        <div className="tile-sm__linkIcon">{linkIcon}</div>
      </div>
    );
  };

  const renderTileMedium = () => {
    return (
      <div className={className}>
        <div className="tile-md__title">{title}</div>
        <div className="tile-md__subtitle">{subtitle}</div>
      </div>
    );
  };

  const renderTileLarge = () => {
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
      {(icon && linkIcon) && renderTileSmall()}
      {(className && title && subtitle) && renderTileMedium()}
      {(linkIcon && className && title && subtitle) && renderTileLarge()}
    </>
  );
};

Tile.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.object,
  linkIcon: PropTypes.object,
};

export default Tile;
