import './resume.scss';
import PhotoHome from 'assets/images/photo-home.jpeg';
import ResumeTile from 'components/tiles/components/ResumeTile.jsx';
import { useTranslation } from 'react-i18next';
import ResumePDF from 'public/resume-file.pdf';

const Resume = () => {
  const { t } = useTranslation('global');

  return (
    <section className='resume'>
      <div className='resume__aside'>
        <ResumeTile
          className={'tile animate__animated  animate__slideInLeft'}
          image={PhotoHome}
          alt={'author avatar'}
          title={t('footer.author')}
          subtitle={t('aboutPage.greeting.subtitle')}
          buttonClassName={'button button__contact'}
          buttonLink={'mailto: 2andrew.demchenko@gmail.com'}
          buttonClassName2={'button button__download'}
          buttonLink2={ResumePDF}
          download={'Resume EN | Demchenko Andrii'}
        />
      </div>
      <div className='resume__info'>
        <h3 className="resume__info-title">About me</h3>
        <p className="resume__info-descr">123</p>
        <h3 className="resume__info-titl">Experience</h3>
        <p className="resume__info-descr">123</p>

        <h3 className="resume__info-title">Education</h3>
        <p className="resume__info-descr">123</p>
        <p className="resume__info-descr">123</p>
        <p className="resume__info-descr">123</p>
        <p className="resume__info-descr">123</p>
        <p className="resume__info-descr">123</p>
        <p className="resume__info-descr">123</p>

        <h3 className="resume__info-title">Skills</h3>
        <p className="resume__info-descr">123</p>

        <h3 className="resume__info-title">Hobbies</h3>
        <p className="resume__info-descr">123</p>

      </div>
    </section>
  );
};

export default Resume;

