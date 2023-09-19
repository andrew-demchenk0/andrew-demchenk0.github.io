import './button.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { LuView } from 'react-icons/lu';
import { BiCloudDownload } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

const Button = props => {
  const { className, link, download } = props;
  const { t } = useTranslation('global');

  return (
    <NavLink
             to={link}
             download={download}
             target = '_blank'
             rel = 'noreferrer'
             style={{textDecoration: 'none'}}>
      <button className={className}>
        {className.includes('button__github') ? <div className='button__icon'><AiFillGithub/></div> : null}
        {className.includes('button__github') ? t('button.github') : null}

        {className.includes('button__view') ? <div className='button__icon'><LuView/></div> : null}
        {className.includes('button__view') ? t('button.view') : null}

        {className.includes('button__contact') ? t('button.contactMe') : null}

        {className.includes('button__download') ? <div className='button__icon'><BiCloudDownload/></div> : null}
        {className.includes('button__download') ? t('button.download') : null}
      </button>
    </NavLink>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  link: PropTypes.string,
  download: PropTypes.string,
}

export default Button;
