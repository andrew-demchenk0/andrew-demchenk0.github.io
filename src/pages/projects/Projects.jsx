import { useTranslation } from 'react-i18next';
import PageTitle from 'components/pageTitle/PageTitle.jsx';
import ProjectTile from 'components/tiles/components/ProjectTile.jsx';
import MarvelPr from 'assets/images/projects/project-7-marvel-info-portal/marvel-preview.webp';
import MoviePr from 'assets/images/projects/movie-db.jpg';
import TravelPr from 'assets/images/projects/travel-project.webp';
import SmartRunPr from 'assets/images/projects/smartrun-project.jpg';
import { TbCircleArrowRight } from 'react-icons/tb';

import './projects.scss';
const Projects = () => {
  const { t } = useTranslation('global');

  return (
    <main>
      <PageTitle text={t('pageTitle.projects')} className="page-title animate__animated animate__fadeInDown"/>
      <section className='projects'>
        <ProjectTile className={'tile projects__tile1 animate__animated  animate__slideInLeft'}
                     image={MarvelPr}
                     alt={'Marvel project image'}
                     title={'marvel'}
                     subtitle={'api'}
                     linkIcon={<TbCircleArrowRight className='tile__link-icon'/>}
                     linkTo={'/projects/marvel'} />

        <ProjectTile className={'tile projects__tile5 animate__animated  animate__slideInRight'}
                     image={MoviePr}
                     alt={'Movie project image'}
                     title={'Movie'}
                     subtitle={'api'}
                     linkIcon={<TbCircleArrowRight className='tile__link-icon'/>}
                     linkTo={'/projects/movie-db'} />

        <ProjectTile className={'tile projects__tile3 animate__animated  animate__slideInRight'}
                     image={TravelPr}
                     alt={'travel project image'}
                     title={'Travel'}
                     subtitle={'api'}
                     linkIcon={<TbCircleArrowRight className='tile__link-icon'/>}
                     linkTo={'/projects/travel'} />

        <ProjectTile className={'tile projects__tile2 animate__animated  animate__slideInLeft'}
                     image={SmartRunPr}
                     alt={'Smart Run project image'}
                     title={'Smart Run'}
                     subtitle={'api'}
                     linkIcon={<TbCircleArrowRight className='tile__link-icon'/>}
                     linkTo={'/projects/marvel'} />

      </section>
    </main>
  );
};

export default Projects;
