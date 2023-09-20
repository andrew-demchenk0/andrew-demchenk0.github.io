import { useTranslation } from 'react-i18next';
import Logo from '../../assets/icons/logo/Logo.jsx';
import Navigation from 'components/navigation/Navigation.jsx';
import { FaReact } from 'react-icons/fa';
import Socials from 'components/socials/Socials.jsx';

import './footer.scss';

const Footer = () => {
  const { t } = useTranslation('global');
  return (
    <footer className="footer">
      <div className="footer__nav">
        <Logo color="var(--title-color)" style={{ height: '30px' }}/>
        <Navigation className={'navigation'}/>
      </div>
      <div className="socials">
        <Socials/>
      </div>
      <div className="footer__info">
        <div className="footer__info-item">
          {t('footer.copyright')}
          <a href="https://www.linkedin.com/in/andrii-demchenko-21334125a/"
             target="_blank"
             rel="noreferrer">
            {t('footer.author')}
          </a>
        </div>
        <div className="footer__info-item">
          {t('footer.create')}
          <a href="https://react.dev/"
             target="_blank"
             rel="noreferrer">
            React
            <FaReact className="react-icon" color="#61DBFB"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
