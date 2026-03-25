import * as React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Publications } from './archived/Publications';
import { Projects } from './pages/Projects/Projects';
import { Research } from './archived/Research';
import { People } from './pages/People/People';
import { Presentations } from './archived/Presentations';
import { Navigate } from 'react-router-dom';
import { Join } from './pages/Join';
import { SiteLayout } from './components/SiteLayout';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/presentations" element={<Presentations />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/join" element={<Join />} />
          <Route
            path="/technicalstaff"
            element={<Navigate to="/join" replace />}
          />
          <Route path="/interns" element={<Navigate to="/join" replace />} />
          <Route
            path="/contact"
            element={<Navigate to="/#contact" replace />}
          />
        </Route>
      </Routes>
    </Router>
  );
};
