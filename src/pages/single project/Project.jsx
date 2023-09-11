import { NavLink, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from 'pages/projects/helper/projectsList.js';
import Button from 'components/button/Button.jsx';
import Page404 from 'pages/404/404.jsx';
import { HiChevronDoubleDown, HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { FaCss3Alt, FaHtml5, FaPhp, FaReact, FaSass } from 'react-icons/fa';
import { BiLogoJavascript, BiLogoRedux, BiLogoTypescript } from 'react-icons/bi';
import './project.scss';

const Project = () => {
  const { t } = useTranslation('global');
  const { id } = useParams();

  const project = projects.find(project => project.id === id);

  if (!project) {
    return <Page404/>;
  }

  return (
    <section className="project">
      <div className="project__info">
        <div className="project__info-bg">
          <img src={project.background} alt={t(project.title)}/>
        </div>
        <div className="project__info-content">
          <NavLink to="/projects" className="project__back">
            <HiOutlineArrowNarrowLeft className="project__back-arrow"/>
            <p>{t('goback')}</p>
          </NavLink>
          <div>
            <p className="project__subtitle">{t(project.subtitle)}</p>
            <h1 className="project__title">{t(project.title)}</h1>
            <p className="project__description">{t(project.description)}</p>
            <ul className="project__skills">
              <p>{t('project.skills')}</p>
              {project.skills.map((skill, index) => (
                <li key={index}>
                  {skill === 'react' ? <FaReact/> : null}
                  {skill === 'redux' ? <BiLogoRedux/> : null}
                  {skill === 'js' ? <BiLogoJavascript/> : null}
                  {skill === 'ts' ? <BiLogoTypescript/> : null}
                  {skill === 'html' ? <FaHtml5/> : null}
                  {skill === 'css' ? <FaCss3Alt/> : null}
                  {skill === 'sass' ? <FaSass/> : null}
                  {skill === 'php' ? <FaPhp/> : null}
                  {skill === 'api' ? 'API' : null}
                </li>
              ))}
            </ul>
            <hr className="project__divider"/>
            <div className="project__buttons">
              <Button className={'button button__view'} link={project.view}/>
              <Button className={'button button__github'} link={project.github}/>
            </div>
            <HiChevronDoubleDown className="project__scroll"/>
          </div>
        </div>
      </div>
      <div className="project__images">
        {project.images.map((image, index) => (
          <img key={index} src={image} alt={`site image ${index + 1}`}/>
        ))}
      </div>
    </section>
  );
};

export default Project;
