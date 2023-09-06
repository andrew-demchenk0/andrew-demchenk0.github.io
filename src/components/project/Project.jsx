import './project.scss';
import { NavLink } from 'react-router-dom';
import { HiChevronDoubleDown, HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { FaReact, FaSass } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import bg from 'assets/images/projects/project-7-marvel-info-portal/marvel-bg.jpg'
import img1 from 'assets/images/projects/project-7-marvel-info-portal/marvel-img-1.png'
import img2 from 'assets/images/projects/project-7-marvel-info-portal/marvel-img-2.png'
import img3 from 'assets/images/projects/project-7-marvel-info-portal/marvel-img-3.png'
import Button from 'components/button/Button.jsx';
const Project = () => {
  return (
    <main>
     <section className='project'>
       <div className='project__info'>
         <div className='project__info-bg'>
           <img className='project__' src={bg} alt="lalal"/>
         </div>
         <div className='project__info-content'>
           <NavLink to='/projects' className='project__back'>
             <HiOutlineArrowNarrowLeft className='project__back-arrow'/>
             <p>Go back</p>
           </NavLink>
           <div>
             <p className='project__subtitle'>subtitle</p>
             <h1 className='project__title'>Title</h1>
             <p className='project__description'>description</p>
             <ul className='project__skills'>
               <p>Skills:</p>
               <li>
                 <FaSass/>
               </li>
               <li>
                 <FaReact/>
               </li>
               <li>
                 <SiRedux/>
               </li>
             </ul>
             <hr className='project__divider'/>
             <div className='project__buttons'>
               <Button className={'button button__view'} link={'###'}/>

               <Button className={'button button__github'} link={'###'}/>
             </div>
             <HiChevronDoubleDown className='project__scroll'/>
           </div>
         </div>
       </div>
       <div className='project__images'>
         <img src={img1} alt="123"/>
         <img src={img2} alt="123"/>
         <img src={img3} alt="132"/>
       </div>
     </section>
    </main>
  );
};

export default Project;
