import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'animate.css';
import 'styles/styles.scss';

import Header from 'components/header/Header.jsx';
import Footer from 'components/footer/Footer.jsx';

import Home from 'pages/home/Home.jsx';
import About from 'pages/about/About.jsx';
import Projects from 'pages/projects/Projects.jsx';
import Project from 'pages/single project/Project.jsx';
import Resume from 'pages/resume/Resume.jsx';
import Skills from 'pages/skills/Skills.jsx';
import Page404 from 'pages/404/404.jsx';


function App() {

  return (
    <Router>
      <div className='app'>
        <Header />
        <main>
          <Suspense>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/projects/:id" element={<Project />} />
              <Route exact path="/resume" element={<Resume />} />
              <Route exact path="/tech-skills" element={<Skills />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
