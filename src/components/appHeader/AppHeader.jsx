import Logo from 'icons/logo/Logo.jsx';
import Navigation from 'components/navigation/Navigation.jsx';
import ThemeSwitcher from 'components/switchers/ThemeSwitcher.jsx';
import LangSwitcher from 'components/switchers/LangSwitcher.jsx';

import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className='header'>
      <Logo color="var(--title-color)" />
      <Navigation />
      <div className='switcher-wrapper'>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>

    </header>
  );
};

export default AppHeader;
