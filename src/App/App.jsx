import { useTranslation } from 'react-i18next';
import 'animate.css';
import '../styles/styles.scss';

function App() {
  const [t, i18n] = useTranslation('global');
  const handleChangeLanguage = (lang => i18n.changeLanguage(lang));
  return (
    <>
      <h1 className="animate__animated animate__bounce header">An animated element</h1>
      <div>{t('h1')}</div>
      <a href="http://google.com" target="_blank" rel="noreferrer">qwe</a>
      <div>{t('title.msg')}</div>
      <button onClick={() => handleChangeLanguage('en')}>en</button>
      <button onClick={() => handleChangeLanguage('ua')}>ua</button>

    </>
  );
}

export default App;
