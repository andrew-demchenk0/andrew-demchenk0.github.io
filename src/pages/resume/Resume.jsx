import { useTranslation } from 'react-i18next';
import ResumeTile from 'components/tiles/components/ResumeTile.jsx';

import PhotoHome from 'assets/images/photo-home.webp';
import ResumePDF from 'public/resume-file.pdf';

import { BiCloudDownload } from 'react-icons/bi';

import './resume.scss';

const Resume = () => {
  const { t } = useTranslation('global');

  const buttons = [
    {
      className: 'button button__contact',
      link: 'mailto:2andrew.demchenko@gmail.com',
      text: t('button.contactMe'),
    },
    {
      className: 'button button__download',
      link: ResumePDF,
      icon: <BiCloudDownload />,
      download: 'Resume EN | Demchenko Andrii',
    },
  ];

  return (
    <section className='resume'>
      <div className='resume__aside'>
        <ResumeTile
          className={'tile animate__animated  animate__slideInLeft'}
          image={PhotoHome}
          alt={'author avatar'}
          title={t('footer.author')}
          subtitle={t('aboutPage.greeting.subtitle')}
          buttons={buttons}
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

