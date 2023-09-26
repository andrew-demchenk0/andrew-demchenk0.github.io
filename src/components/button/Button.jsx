import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './button.scss';

const Button = props => {
  const { className, icon, link, download, text } = props;

  return (
    <NavLink
      to={link}
      download={download}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: 'none' }}>
      <button className={className}>
        {className.includes('button__github') && (
          <>
            <div className="button__icon button-project__icon">{icon}</div>
            {text}
          </>
        )}

        {className.includes('button__view') && (
          <>
            <div className="button__icon button-project__icon">{icon}</div>
            {text}
          </>
        )}

        {className.includes('button__download') && (
          <>
            <div className="button__icon">{icon}</div>
            {text}
          </>
        )}

        {className.includes('button__contact') && text}
      </button>
    </NavLink>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  link: PropTypes.string,
  download: PropTypes.string,
  icon: PropTypes.element,
  text: PropTypes.string
};

export default Button;
