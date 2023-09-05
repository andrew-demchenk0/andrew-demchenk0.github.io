import './project.scss';
import { NavLink } from 'react-router-dom';
import { HiChevronDoubleDown, HiOutlineArrowNarrowLeft } from 'react-icons/hi';

const Project = () => {
  return (
    <main>
     <section className='project'>
       <div className='project__info'>
         <div className='project__info-content'>
           <NavLink to='/projects' className='project__back'>
             <HiOutlineArrowNarrowLeft className='project__back-arrow'/>
             <p>Go back</p>
           </NavLink>
           <div>
             <p className='project__subtitle'>subtitle</p>
             <h1 className='project__title'>Title</h1>
             <p className='project__description'>description</p>
             <div className='project__skils'>
               1, 2, 3, 4
             </div>
             <hr className='project__divider'/>
             <div className='project__buttons'>
               <button>1</button>

               <button>2</button>
             </div>
             <HiChevronDoubleDown className='project__scroll'/>
           </div>
         </div>
       </div>
       <div className='project__images'>

       </div>
     </section>
    </main>
  );
};

export default Project;
