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
      <PageTitle text={t('pageTitle.about')}/>
      <section className='about'>
        <div className="about__photo about__tile1">
          <img src={AboutPhoto} alt="Autor Photo"/>
        </div>

        <Tile className={'tile about__tile2'}
              title={t('aboutPage.greeting.title')}
              subtitle={t('aboutPage.greeting.subtitle')}>
        </Tile>

        <Tile className={'tile about__tile3'}
              title={t('aboutPage.about.title')}
              subtitle={t('aboutPage.about.description')}>
        </Tile>

        <Tile className={'tile tile-lg about__tile4'}
              icon={<FaUniversity />} title={t('aboutPage.education.title')}
              subtitle={t('aboutPage.education.subtitle')}
              linkIcon={<TbCircleArrowRight />}>
        </Tile>

        <Tile className={'tile tile-sm about__tile5'}
              icon={<FaLinkedin />}
              linkIcon={<TbCircleArrowRight />}>
        </Tile>

        <Tile className={'tile tile-lg about__tile6'}
              title={t('aboutPage.contact.title')}
              subtitle={t('aboutPage.contact.subtitle')}
              linkIcon={<TbCircleArrowRight />}>
        </Tile>

        <Tile className={'tile tile-lg about__tile7'}
              icon={<BsPersonVcard />}
              title={t('aboutPage.resume.title')}
              subtitle={t('aboutPage.resume.subtitle')}
              linkIcon={<TbCircleArrowRight />}>
        </Tile>
      </section>
    </>
  );
};

export default About;
