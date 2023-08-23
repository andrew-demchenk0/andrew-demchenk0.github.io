import { useTranslation } from 'react-i18next';
import PageTitle from 'components/pageTitle/PageTitle.jsx';

const Projects = () => {
  const { t } = useTranslation('global');

  return (
    <>
      <PageTitle text={t('pageTitle.projects')}/>
      <section className='projects'>
        <div></div>
      </section>
    </>
  );
};

export default Projects;
