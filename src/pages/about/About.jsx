import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaUniversity } from 'react-icons/fa';
import { TbCircleArrowRight } from 'react-icons/tb';
import { BsPersonVcard } from 'react-icons/bs';

import PageTitle from 'components/pageTitle/PageTitle.jsx';
import ImageTile from 'components/tiles/components/ImageTile.jsx';
import IconTaleLink from 'components/tiles/components/IconTaleLink.jsx';
import TextTile from 'components/tiles/components/TextTile.jsx';
import TextTileLink from 'components/tiles/components/TextTileLink.jsx';
import IconTextTileLink from 'components/tiles/components/IconTextTileLink.jsx';

import PhotoAbout from 'assets/images/photo-about.jpeg';

import './about.scss';

const About = () => {
  const { t } = useTranslation('global');

  return (
    <>
      <PageTitle text={t('pageTitle.about')} className="page-title animate__animated animate__fadeInDown"/>
      <section className="about">
        <ImageTile className="tile__image-photo about-1 animate__animated  animate__slideInLeft"
                   image={PhotoAbout}
                   alt={'Author Photo'}/>

        <TextTile className={'tile about-2 animate__animated  animate__slideInRight'}
                  title={t('aboutPage.greeting.title')}
                  subtitle={t('aboutPage.greeting.subtitle')}/>

        <TextTile className={'tile about-3 animate__animated  animate__slideInLeft'}
                  title={t('aboutPage.about.title')}
                  subtitle={t('aboutPage.about.description')}/>

        <IconTextTileLink className={'tile about-4 animate__animated  animate__slideInRight'}
                          icon={<FaUniversity/>} title={t('aboutPage.education.title')}
                          subtitle={t('aboutPage.education.subtitle')}
                          linkIcon={<TbCircleArrowRight className="tile__link-icon"/>}
                          linkTo={'/education'}/>

        <IconTaleLink className={'tile tile-icon__tile about-5 animate__animated  animate__slideInLeft'}
                      icon={<FaLinkedin/>}
                      linkIcon={<TbCircleArrowRight className="tile__link-icon tile__link-icon__absolute"/>}
                      link={'https://www.linkedin.com/in/andrii-demchenko-21334125a/'}/>

        <TextTileLink className={'tile about-6 animate__animated  animate__slideInRight'}
                      title={t('aboutPage.contact.title')}
                      subtitle={t('aboutPage.contact.subtitle')}
                      linkIcon={<TbCircleArrowRight className="tile__link-icon"/>}
                      linkTo={'mailto: 2andrew.demchenko@gmail.com'}/>

        <IconTextTileLink className={'tile about-7 animate__animated  animate__slideInRight'}
                          icon={<BsPersonVcard/>}
                          title={t('aboutPage.resume.title')}
                          subtitle={t('aboutPage.resume.subtitle')}
                          linkIcon={<TbCircleArrowRight className="tile__link-icon"/>}
                          linkTo={'/resume'}/>
      </section>
    </>
  );
};

export default About;
