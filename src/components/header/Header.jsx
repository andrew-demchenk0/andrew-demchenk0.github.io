import Logo from '../../assets/icons/logo/Logo.jsx';
import Navigation from 'components/navigation/Navigation.jsx';
import ThemeSwitcher from 'components/switchers/ThemeSwitcher.jsx';
import LangSwitcher from 'components/switchers/LangSwitcher.jsx';

import './header.scss';
import { useMediaQuery } from 'react-responsive';
import BurgerBtn from 'components/navigation/component/BurgerBtn.jsx';
import { useState } from 'react';

const Header = () => {
  const isMobile = useMediaQuery({maxWidth: 768});
  const [isBurgerChecked, setIsBurgerChecked] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerChecked(!isBurgerChecked);
  };

  return (
    <header className={!isMobile ? 'header' : 'header header-mobile'}>
      <Logo color="var(--title-color)" />
      {!isMobile ? (
        <>
          <Navigation className={'navigation'} />
          <div className='switcher__wrapper'>
            <ThemeSwitcher />
            <LangSwitcher />
          </div>
        </>
      ) : (
        <>
          <BurgerBtn isChecked={isBurgerChecked} onClick={handleBurgerClick} />
          <div className={isBurgerChecked ? 'navigation__mobile-wrapper open ' : 'navigation__mobile-wrapper'}>
            <Navigation className={'navigation__mobile'} />
            <div className='switcher__wrapper switcher__wrapper-mobile'>
              <ThemeSwitcher />
              <LangSwitcher />
            </div>
          </div>
        </>
        )}
    </header>
  );
};

export default Header;
