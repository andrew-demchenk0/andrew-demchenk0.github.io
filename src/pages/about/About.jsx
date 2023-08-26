import { useTranslation } from 'react-i18next';
import PageTitle from 'components/pageTitle/PageTitle.jsx';
import AboutPhoto from 'images/myPhotoAbout.jpeg';
import './about.scss';
import Tile from 'components/pageTile/Tile.jsx';
import { FaLinkedin, FaUniversity } from 'react-icons/fa';
import { TbCircleArrowRight } from 'react-icons/tb';
import { BsPersonVcard } from 'react-icons/bs';

const About = () => {
  const { t } = useTranslation('global');

  return (
    <>
      <PageTitle text={t('pageTitle.about')} className='page-title animate__animated animate__fadeInDown' />
      <section className='about'>
        <Tile className="tile__image-photo about__tile1 animate__animated  animate__slideInLeft"
              image={AboutPhoto}
              alt={'Author Photo'} />

        <Tile className={'tile about__tile2 animate__animated  animate__slideInRight'}
              title={t('aboutPage.greeting.title')}
              subtitle={t('aboutPage.greeting.subtitle')} />

        <Tile className={'tile about__tile3 animate__animated  animate__slideInLeft'}
              title={t('aboutPage.about.title')}
              subtitle={t('aboutPage.about.description')} />

        <Tile className={'tile tile-lg about__tile4 animate__animated  animate__slideInRight'}
              icon={<FaUniversity />} title={t('aboutPage.education.title')}
              subtitle={t('aboutPage.education.subtitle')}
              linkIcon={<TbCircleArrowRight />} />

        <Tile className={'tile tile-sm about__tile5 animate__animated  animate__slideInLeft'}
              icon={<FaLinkedin />}
              linkIcon={<TbCircleArrowRight />} />

        <Tile className={'tile tile-lg about__tile6 animate__animated  animate__zoomIn'}
              title={t('aboutPage.contact.title')}
              subtitle={t('aboutPage.contact.subtitle')}
              linkIcon={<TbCircleArrowRight />} />

        <Tile className={'tile tile-lg about__tile7 animate__animated  animate__slideInRight'}
              icon={<BsPersonVcard />}
              title={t('aboutPage.resume.title')}
              subtitle={t('aboutPage.resume.subtitle')}
              linkIcon={<TbCircleArrowRight />} />
      </section>
    </>
  );
};

export default About;
