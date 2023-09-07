import './home.scss';
import { FaLinkedin } from 'react-icons/fa';
import { TbCircleArrowRight } from 'react-icons/tb';
import IconTaleLink from 'components/tiles/components/IconTaleLink.jsx';
import TextTileLink from 'components/tiles/components/TextTileLink.jsx';
import { useTranslation } from 'react-i18next';
import { BsPersonVcard } from 'react-icons/bs';
import IconTextTileLink from 'components/tiles/components/IconTextTileLink.jsx';
import ImageTextTileLink from 'components/tiles/components/ImageTextTileLink.jsx';
import PhotoHome from 'assets/images/photo-home.jpeg';
import WhatIDo from 'components/tiles/components/WhatIDo.jsx';
import { projects } from 'pages/projects/helper/projectsList.js';
import ProjectTile from 'components/tiles/components/ProjectTile.jsx';
const Home = () => {
  const { t } =useTranslation('global');
  const marvel = projects[1],
        movie = projects[3],
        travel = projects[2];

  return (
    <main>
      <section className='home'>
        <ImageTextTileLink className={'tile home-1 animate__animated  animate__slideInLeft'}
                           image={PhotoHome}
                           alt={'author avatar'}
                           title={t('aboutPage.greeting.title')}
                           subtitle={t('aboutPage.greeting.subtitle')}
                           linkIcon={<TbCircleArrowRight className='tile__link-icon'/>}
                           linkTo={'/about'}/>
        <IconTextTileLink className={'tile home-2 animate__animated  animate__slideInRight'}
                          icon={<BsPersonVcard/>}
                          title={t('aboutPage.resume.title')}
                          subtitle={t('aboutPage.resume.subtitle')}
                          linkIcon={<TbCircleArrowRight className='tile__link-icon'/>}
                          linkTo={'/resume'}/>
        <ProjectTile key={movie.id}
                     className={`tile animate__animated home-3 animate__slideInRight`}
                     image={movie.preview}
                     alt={t(movie.title)}
                     title={t(movie.title)}
                     subtitle={t(movie.subtitle)}
                     linkIcon={<TbCircleArrowRight className="tile__link-icon"/>}
                     linkTo={'/projects/' + movie.id}/>

        <ProjectTile key={travel.id}
                     className={`tile animate__animated home-4 animate__slideInLeft`}
                     image={travel.preview}
                     alt={t(travel.title)}
                     title={t(travel.title)}
                     subtitle={t(travel.subtitle)}
                     linkIcon={<TbCircleArrowRight className="tile__link-icon"/>}
                     linkTo={'/projects/' + travel.id}/>

        <IconTaleLink className={'tile tile-icon__tile home-5 animate__animated  animate__slideInLeft'}
                      icon={<FaLinkedin/>}
                      linkIcon={<TbCircleArrowRight className='tile__link-icon tile__link-icon__absolute'/>}
                      link={'https://www.linkedin.com/in/andrii-demchenko-21334125a/'}/>

        <ProjectTile key={marvel.id}
                     className={`tile animate__animated home-6 animate__slideInRight`}
                     image={marvel.preview}
                     alt={t(marvel.title)}
                     title={t(marvel.title)}
                     subtitle={t(marvel.subtitle)}
                     linkIcon={<TbCircleArrowRight className="tile__link-icon"/>}
                     linkTo={'/projects/' + marvel.id}/>

        <TextTileLink className={'tile home-7 animate__animated  animate__slideInLeft'}
                      title={t('aboutPage.contact.title')}
                      subtitle={t('aboutPage.contact.subtitle')}
                      linkIcon={<TbCircleArrowRight className='tile__link-icon'/>}
                      linkTo={'mailto: 2andrew.demchenko@gmail.com'}/>
        <WhatIDo className={'tile home-8 animate__animated  animate__slideInRight'}/>
      </section>
    </main>
  );
};

export default Home;
