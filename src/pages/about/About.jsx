import { useTranslation } from 'react-i18next';
import PageTitle from 'components/pageTitle/PageTitle.jsx';
import AboutPhoto from 'images/myPhotoAbout.jpeg';
import './about.scss';
import Tile from 'components/pageTile/Tile.jsx';
import { FaLinkedin } from 'react-icons/fa';
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
        <Tile className={'tile about__tile2'} title={t('aboutPage.greeting.title')} subtitle={t('aboutPage.greeting.subtitle')} />
        <Tile className={'tile about__tile3'} title={t('aboutPage.about.title')} subtitle={t('aboutPage.about.description')} />
        <Tile className={'tile tile-sm about__tile5'} icon={<FaLinkedin />} linkIcon={<TbCircleArrowRight />} />
        <Tile className={'tile tile-lg about__tile7'} icon={<BsPersonVcard />} title={t('aboutPage.resume.title')} subtitle={t('aboutPage.resume.description')} linkIcon={<TbCircleArrowRight />} />
      </section>
    </>
  );
};

export default About;
