import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Publications } from './pages/Publications';
import { Projects } from './pages/Projects';
import { Alumni } from './pages/Alumni';
import { People } from './pages/People';
import { Presentations } from './pages/Presentations';
import Footer from './components/Footer';
import { Contact } from './pages/Contact';
import { Engineer } from './pages/Engineer';
import { Intern } from './pages/Intern';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/presentations" element={<Presentations />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/technicalstaff" element={<Engineer />} />
        <Route path="/interns" element={<Intern />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
