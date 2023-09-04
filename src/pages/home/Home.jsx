import './home.scss';
import { FaLinkedin } from 'react-icons/fa';
import { TbCircleArrowRight } from 'react-icons/tb';
import IconTaleLink from 'components/tiles/components/IconTaleLink.jsx';
import TextTileLink from 'components/tiles/components/TextTileLink.jsx';
import { useTranslation } from 'react-i18next';
import { BsPersonVcard } from 'react-icons/bs';
import IconTextTileLink from 'components/tiles/components/IconTextTileLink.jsx';
import ImageTextTileLink from 'components/tiles/components/ImageTextTileLink.jsx';
import PhotoHome from 'assets/images/photo-home.jpeg';
const Home = () => {
  const { t } =useTranslation('global');
  return (
    <main>
      <section className='home'>
        <ImageTextTileLink className={'tile home__tile1 animate__animated  animate__slideInRight'}
                           image={PhotoHome}
                           alt={'author avatar'}
                           title={t('aboutPage.greeting.title')}
                           subtitle={t('aboutPage.greeting.subtitle')}
                           linkIcon={<TbCircleArrowRight className='tile__link-icon'/>}
                           linkTo={'/about'}/>
        <IconTextTileLink className={'tile home__tile2 animate__animated  animate__slideInRight'}
                          icon={<BsPersonVcard/>}
                          title={t('aboutPage.resume.title')}
                          subtitle={t('aboutPage.resume.subtitle')}
                          linkIcon={<TbCircleArrowRight className='tile__link-icon'/>}
                          linkTo={'/resume'}/>

        <IconTaleLink className={'tile tile-icon__tile home__tile5 animate__animated  animate__slideInLeft'}
                      icon={<FaLinkedin/>}
                      linkIcon={<TbCircleArrowRight className='tile__link-icon tile__link-icon__absolute'/>}
                      link={'https://www.linkedin.com/in/andrii-demchenko-21334125a/'}/>

        <TextTileLink className={'tile home__tile7 animate__animated  animate__slideInRight'}
                      title={t('aboutPage.contact.title')}
                      subtitle={t('aboutPage.contact.subtitle')}
                      linkIcon={<TbCircleArrowRight className='tile__link-icon'/>}
                      linkTo={'/contacts'}/>
      </section>
    </main>
  );
};

export default Home;
