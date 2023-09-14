import * as React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Publications } from './pages/Publications';
import { Projects } from './pages/Projects';
import { Research } from './pages/Research';
import { Alumni } from './pages/Alumni';
import { People } from './pages/People';
import { Presentations } from './pages/Presentations';
import { Contact } from './pages/Contact';
import { Engineer } from './pages/Engineer';
import { Intern } from './pages/Intern';
import { SiteLayout } from './components/SiteLayout';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/presentations" element={<Presentations />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/technicalstaff" element={<Engineer />} />
          <Route path="/interns" element={<Intern />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};
