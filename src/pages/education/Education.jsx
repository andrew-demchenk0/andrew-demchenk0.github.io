import { useTranslation } from 'react-i18next';
import { diplomas } from 'pages/education/helper/diplomasList.js';
import { certificates } from 'pages/education/helper/certificatesList.js';

import PageTitle from 'components/pageTitle/PageTitle.jsx';
import EducationTile from 'components/tiles/components/EducationTile.jsx';

import { TbCircleArrowRight } from 'react-icons/tb';

import './education.scss';

const Education = () => {
  const { t } = useTranslation('global');
  return (
    <>
      <PageTitle text={t('pageTitle.education')} className="page-title animate__animated animate__fadeInDown"/>
      <section className="education">
        <h2 className="education__title">{t('education.diplomas')}</h2>
        <div className="education__grid">
          {diplomas.map(diploma => {
            return <EducationTile key={diploma.id}
                                  className={`tile animate__animated ${diploma.animationClass}`}
                                  image={diploma.icon}
                                  alt={t(diploma.title)}
                                  title={t(diploma.title)}
                                  subtitle={t(diploma.subtitle)}
                                  description={t(diploma.description)}
                                  linkIcon={<TbCircleArrowRight className="tile__link-icon"/>}
                                  linkTo={diploma.link}/>;
          })}
        </div>
        <h2 className="education__title">{t('education.certificates')}</h2>
        <div className="education__grid">
          {certificates.map(certificate => {
            return <EducationTile key={certificate.id}
                                  className={`tile animate__animated ${certificate.animationClass}`}
                                  image={certificate.icon}
                                  alt={t(certificate.title)}
                                  title={t(certificate.title)}
                                  subtitle={t(certificate.subtitle)}
                                  description={t(certificate.description)}
                                  linkIcon={<TbCircleArrowRight className="tile__link-icon"/>}
                                  linkTo={certificate.link}/>;
          })}
        </div>
      </section>
    </>

  );
};

export default Education;
