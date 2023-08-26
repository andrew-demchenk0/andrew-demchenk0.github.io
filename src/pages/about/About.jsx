import { useTranslation } from 'react-i18next';
import PageTitle from 'components/pageTitle/PageTitle.jsx';
import AboutPhoto from '../../assets/images/myPhotoAbout.jpeg';
import { FaLinkedin, FaUniversity } from 'react-icons/fa';
import { TbCircleArrowRight } from 'react-icons/tb';
import { BsPersonVcard } from 'react-icons/bs';

import ImageTile from 'components/pageTiles/components/ImageTile.jsx';
import IconTaleLink from 'components/pageTiles/components/IconTaleLink.jsx';
import TextTile from 'components/pageTiles/components/TextTile.jsx';
import TextTileLink from 'components/pageTiles/components/TextTileLink.jsx';
import IconTextTileLink from 'components/pageTiles/components/IconTextTileLink.jsx';

import './about.scss';

const About = () => {
  const { t } = useTranslation('global');

  return (
    <main>
      <PageTitle text={t('pageTitle.about')} className="page-title animate__animated animate__fadeInDown"/>
      <section className="about">
        <ImageTile className="tile__image-photo about__tile1 animate__animated  animate__slideInLeft"
                   image={AboutPhoto}
                   alt={'Author Photo'}/>

        <TextTile className={'tile about__tile2 animate__animated  animate__slideInRight'}
                  title={t('aboutPage.greeting.title')}
                  subtitle={t('aboutPage.greeting.subtitle')}/>

        <TextTile className={'tile about__tile3 animate__animated  animate__slideInLeft'}
                  title={t('aboutPage.about.title')}
                  subtitle={t('aboutPage.about.description')}/>

        <IconTextTileLink className={'tile about__tile4 animate__animated  animate__slideInRight'}
                          icon={<FaUniversity/>} title={t('aboutPage.education.title')}
                          subtitle={t('aboutPage.education.subtitle')}
                          linkIcon={<TbCircleArrowRight className='tile__link-icon'/>}
                          linkTo={'/education'}/>

        <IconTaleLink className={'tile tile-icon__tile about__tile5 animate__animated  animate__slideInLeft'}
                      icon={<FaLinkedin/>}
                      linkIcon={<TbCircleArrowRight className='tile__link-icon tile__link-icon__absolute'/>}
                      link={'https://www.linkedin.com/in/andrii-demchenko-21334125a/'}/>

        <TextTileLink className={'tile about__tile6 animate__animated  animate__slideInRight'}
                      title={t('aboutPage.contact.title')}
                      subtitle={t('aboutPage.contact.subtitle')}
                      linkIcon={<TbCircleArrowRight className='tile__link-icon'/>}
                      linkTo={'/contacts'}/>

        <IconTextTileLink className={'tile about__tile7 animate__animated  animate__slideInRight'}
                          icon={<BsPersonVcard/>}
                          title={t('aboutPage.resume.title')}
                          subtitle={t('aboutPage.resume.subtitle')}
                          linkIcon={<TbCircleArrowRight className='tile__link-icon'/>}
                          linkTo={'/resume'}/>
      </section>
    </main>
  );
};

export default About;
