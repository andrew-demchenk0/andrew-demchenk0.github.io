import { useTranslation } from 'react-i18next';
import { projects } from 'pages/projects/helper/projectsList.js';
import PageTitle from 'components/pageTitle/PageTitle.jsx';
import ProjectTile from 'components/tiles/components/ProjectTile.jsx';
import { TbCircleArrowRight } from 'react-icons/tb';

import './projects.scss';

const Projects = () => {
  const { t } = useTranslation('global');

  return (
    <main>
      <PageTitle text={t('pageTitle.projects')} className="page-title animate__animated animate__fadeInDown"/>
      <section className="projects">
        {projects.map(project => {
          return <ProjectTile key={project.id}
                              className={'tile animate__animated  animate__slideInLeft'}
                              image={project.preview}
                              alt={t(project.title)}
                              title={t(project.title)}
                              subtitle={t(project.subtitle)}
                              linkIcon={<TbCircleArrowRight className="tile__link-icon"/>}
                              linkTo={'/projects/' + project.id}/>;
        })}
      </section>
    </main>
  );
};

export default Projects;
