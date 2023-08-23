import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'animate.css';
import 'styles/styles.scss';

import AppHeader from 'components/appHeader/AppHeader.jsx';
import AppFooter from 'components/appFooter/AppFooter.jsx';

import Home from 'pages/home/Home.jsx';
import About from 'pages/about/About.jsx';
import Projects from 'pages/projects/Projects.jsx';
import Resume from 'pages/resume/Resume.jsx';
import Skills from 'pages/skills/Skills.jsx';


function App() {

  return (
    <Router>
      <div className='app'>
        <AppHeader />
        <main>
          <Suspense>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/resume" element={<Resume />} />
              <Route exact path="/skils" element={<Skills />} />
            </Routes>
          </Suspense>
        </main>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
