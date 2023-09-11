import { NavLink } from 'react-router-dom';
import './404.scss';
import { TbCircleArrowRight } from 'react-icons/tb';
const Page404 = () => {
  return (
    <section className='page404'>
      <div className='page404__tile'>
        <h1 className='page404__title'>Oops, this page doesn't exist</h1>
      </div>
      <p className='page404__subtitle'>How'd you even get here? Let's get you back home</p>
      <NavLink to='/' className='page404__link'>Go back Home<TbCircleArrowRight className='page404__link-arrow'/></NavLink>
    </section>
  );
};

export default Page404;
