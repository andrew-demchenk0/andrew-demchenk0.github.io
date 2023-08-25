import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <>
      <div>
        <h1>Oops, this page doesn't exist</h1>
      </div>
      <p>How'd you even get here? Let's get you back home</p>
      <Link to='/'>Go back Home</Link>
    </>
  );
};

export default Page404;
