import { useTranslation } from 'react-i18next';
import './switchers.scss';

const LangSwitcher = () => {
  const { i18n} = useTranslation('global');
  const language = localStorage.getItem('lng');

  const handleChangeLanguage = () => {
    const newLanguage = language === 'en' ? 'ua' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('lng', newLanguage);
  };

  return (
    <label className="switcher js-cur-link">
      <input
        type="checkbox"
        className="switcher__input"
        onChange={handleChangeLanguage} />
      <span className="switcher__lang">{language === 'ua' ? 'EN' : 'UA'}</span>
    </label>
  );
};

export default LangSwitcher;
