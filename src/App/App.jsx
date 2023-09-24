import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from 'components/header/Header.jsx';
import Footer from 'components/footer/Footer.jsx';

import ScrollToTop from 'utils/scrollToTop.js';
import CursorEffect from 'components/CursorEffect/CursorEffect.jsx';

const Home = lazy(() => import('pages/home/Home.jsx')) ;
const Projects = lazy(() => import('pages/projects/Projects.jsx'));
const Project = lazy(() => import('pages/single project/Project.jsx'));
const About = lazy(() => import('pages/about/About.jsx'));
const Education = lazy(() => import('pages/education/Education.jsx'));
const Resume = lazy(() => import('pages/resume/Resume.jsx'));
const Page404 = lazy(() => import('pages/404/404.jsx'));

import 'animate.css';
import 'styles/styles.scss';

function App() {

  return (
    <Router>
      <div className="app">
        <CursorEffect/>
        <ScrollToTop/>
        <Header/>
        <main>
          <Suspense>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/projects" element={<Projects/>}/>
              <Route exact path="/projects/:id" element={<Project/>}/>
              <Route exact path="/education" element={<Education/>}/>
              <Route exact path="/resume" element={<Resume/>}/>
              <Route path="*" element={<Page404/>}/>
            </Routes>
          </Suspense>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
