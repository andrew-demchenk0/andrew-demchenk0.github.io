import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { LuView } from 'react-icons/lu';
import { BiCloudDownload } from 'react-icons/bi';

import './button.scss';

const Button = props => {
  const { className, link, download } = props;
  const { t } = useTranslation('global');

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
            <div className="button__icon"><AiFillGithub/></div>
            {t('button.github')}
          </>
        )}

        {className.includes('button__view') && (
          <>
            <div className="button__icon"><LuView/></div>
            {t('button.view')}
          </>
        )}

        {className.includes('button__download') && (
          <>
            <div className="button__icon"><BiCloudDownload/></div>
            {t('button.download')}
          </>
        )}

        {className.includes('button__contact') && t('button.contactMe')}
      </button>
    </NavLink>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  link: PropTypes.string,
  download: PropTypes.string,
};

export default Button;
