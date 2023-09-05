import './button.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const Button = props => {
  const { className, text, link } =props;
  return (
    <NavLink to={link}>
      <button className={className}>
        {text}
      </button>
    </NavLink>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default Button;
