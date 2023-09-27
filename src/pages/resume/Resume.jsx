import { useTranslation } from 'react-i18next';
import ResumeTile from 'components/tiles/components/ResumeTile.jsx';

import PhotoHome from 'assets/images/photo-home.webp';
import HobbieIMG from 'assets/images/uiverse.webp';
import ResumePDFen from 'public/resume-file.pdf';
import ResumePDFua from 'public/resume-file.pdf';
import { BiCloudDownload } from 'react-icons/bi';

import { TbCircleArrowRight } from 'react-icons/tb';
import './resume.scss';
import 'pages/404/404.scss';
import ProjectTile from 'components/tiles/components/ProjectTile.jsx';

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
      link: ResumePDFen,
      text: t('button.download.en'),
      icon: <BiCloudDownload/>,
      download: 'Resume EN | Demchenko Andrii',
    },
    {
      className: 'button button__download',
      link: ResumePDFua,
      text: t('button.download.ua'),
      icon: <BiCloudDownload/>,
      download: 'Resume UA | Demchenko Andrii',
    },
  ];

  return (
    <section className="resume">
      <div className="resume__aside">
        <ResumeTile
          className={'tile animate__animated  animate__slideInLeft'}
          image={PhotoHome}
          alt={'author avatar'}
          title={t('footer.author')}
          subtitle={t('aboutPage.greeting.subtitle')}
          buttons={buttons}
        />
      </div>
      <div className="resume__info animate__animated  animate__slideInDown">
        <h3 className="resume__info-title">About me</h3>
        <p className="resume__info-descr">{t('resume.about')}</p>

        <h3 className="resume__info-title">Experience</h3>

        <h4 className="resume__info-subtitle"><span>@royalfasade.ua</span> Multi role specialist</h4>
        <p className="resume__info-descr">Feb. 2021 - Dec. 2022 | 1y. 9m.</p>

        <h3 className="resume__info-title">Education</h3>

        <h4 className="resume__info-subtitle"><span>@SSU</span> {t('education.diploma.elit.title')}</h4>
        <p className="resume__info-descr">Jun. 30, 2021, {t('education.diploma.elit.subtitle')}</p>

        <h4 className="resume__info-subtitle"><span>@Udemy</span> {t('education.certificate.web.title')}</h4>
        <p className="resume__info-descr">Dec. 18, 2022</p>

        <h4 className="resume__info-subtitle"><span>@SNAU</span> {t('education.diploma.marketing.title')}</h4>
        <p className="resume__info-descr">Dec. 30, 2022, {t('education.diploma.marketing.subtitle')}</p>

        <h4 className="resume__info-subtitle"><span>@Udemy</span> {t('education.certificate.react.title')}</h4>
        <p className="resume__info-descr">Aug. 21, 2023</p>

        <h4 className="resume__info-subtitle"><span>@Udemy</span> {t('education.certificate.javascriptAdvanced.title')}
        </h4>
        <p className="resume__info-descr">{t('education.description')}</p>

        <h4 className="resume__info-subtitle"><span>@SNAU</span> {t('education.diploma.adm.title')}</h4>
        <p className="resume__info-descr">{t('education.description')}</p>

        <h3 className="resume__info-title">Skills</h3>
        <div className="resume__info-descr">
          <ul className="two-column-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>Responsive Web Design</li>
            <li>CSS Preprocessors - Sass</li>
            <li>React</li>
            <li>Version Control - Git</li>
            <li>Package Managers - npm, Yarn</li>
            <li>AJAX and Fetch API</li>
            <li>Web Performance Optimization</li>
            <li>Cross-Browser Compatibility</li>
            <li>Redux</li>
            <li>Single Page Applications (SPAs)</li>
            <li>Progressive Web Apps (PWAs)</li>
            <li>Web Accessibility (WCAG)</li>
            <li>CSS Grid and Flexbox Layouts</li>
            <li>CSS Animation and Transitions</li>
            <li>Responsive Images and Lazy Loading</li>
            <li>Mobile-First Development</li>
          </ul>
        </div>

        <h3 className="resume__info-title">Hobbies</h3>
        <p className="resume__info-subtitle"><span>@uiverse.io</span></p>
        <ProjectTile className={'tile'}
                     linkTo={'https://uiverse.io/profile/andrew-demchenk0'}
                     image={HobbieIMG}
                     alt={'uiverse.io'}
                     title={t('resume.hobbie')}
                     target={'_blank'}
                     linkIcon={<TbCircleArrowRight className="tile__link-icon"/>}/>
      </div>
    </section>
  );
};

export default Resume;

