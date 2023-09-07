import './button.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { LuView } from 'react-icons/lu';
import { useTranslation } from 'react-i18next';
const Button = props => {
  const { className, link } = props;
  const { t } = useTranslation('global');
  return (
    <NavLink to={link}
             target='_blank'
             rel="noreferrer"
             style={{textDecoration: 'none'}}>
      <button className={className}>
        {className.includes('button__github') ? <div className='button__icon'><AiFillGithub/></div> : null}
        {className.includes('button__view') ? <div className='button__icon'><LuView/></div> : null}

        {className.includes('button__github') ? t('button.github') : null}
        {className.includes('button__view') ? t('button.view') : null}
      </button>
    </NavLink>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default Button;
