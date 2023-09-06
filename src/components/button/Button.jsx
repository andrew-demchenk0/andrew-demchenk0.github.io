import './button.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { LuView } from 'react-icons/lu';
const Button = props => {
  const { className, link } = props;
  return (
    <NavLink to={link} style={{textDecoration: 'none'}}>
      <button className={className}>
        {className.includes('button__github') ? <div className='button__icon'><AiFillGithub/></div> : null}
        {className.includes('button__view') ? <div className='button__icon'><LuView/></div> : null}

        {className.includes('button__github') ? ' View Source Code' : null}
        {className.includes('button__view') ? ' View Project' : null}
      </button>
    </NavLink>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Button;
