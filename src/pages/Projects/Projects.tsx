import * as React from 'react';
import './Projects.css';
import data from '../../utils/data/data.json';

interface Project {
  featured?: boolean;
  title: string;
  titleDescription: string;
  description: string;
  href: string;
  projectType: string;
  pi: string[] | null;
  metaDataPresentation: Array<{ name: string; href: string }>;
  metaDataPublication: Array<{ name: string; href: string }>;
}

const TYPE_COLORS: Record<string, string> = {
  'Privacy and Security': '#0C2340',
  'Data Science': '#E8392A',
  'Digital Health': '#2E7D32',
  'Ed Tech': '#7B5EA7',
};

export const Projects: React.FC = () => {
  const projects: Project[] = data['projects'];
  const [activeType, setActiveType] = React.useState<string>('All');

  const types = [
    'All',
    ...Array.from(new Set(projects.map((p) => p.projectType))),
  ];
  const filtered =
    activeType === 'All'
      ? projects
      : projects.filter((p) => p.projectType === activeType);

  return (
    <main className="projectsPage">
      {/* Hero */}
      <section className="projectsHero">
        <img
          src="/img/cds-building.svg"
          alt=""
          className="projectsHeroBg"
          aria-hidden="true"
        />
        <div className="projectsHeroInner">
          <span className="projectsEyebrow">Our Work</span>
          <h1 className="projectsTitle">Research Projects</h1>
          <p className="projectsSubtitle">
            From privacy-preserving analytics to accessibility tools, explore
            the software we build in partnership with researchers, faculty, and
            institutions.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="projectsFilterSection">
        <div className="projectsSectionInner">
          <div className="projectsFilterBar">
            {types.map((type) => (
              <button
                key={type}
                className={`projectsFilterBtn${
                  activeType === type ? ' active' : ''
                }`}
                onClick={() => setActiveType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project cards */}
      <section className="projectsSection">
        <div className="projectsSectionInner">
          <div className="projectsGrid">
            {filtered.map((project, i) => {
              const accent = TYPE_COLORS[project.projectType] || '#E8392A';
              return (
                <article
                  className="projectCard"
                  key={i}
                  style={{ borderTopColor: accent }}
                >
                  <div className="projectCardBody">
                    <span
                      className="projectTypeTag"
                      style={{
                        color: accent,
                        borderColor: accent + '33',
                        background: accent + '0d',
                      }}
                    >
                      {project.projectType}
                    </span>
                    <h2 className="projectCardTitle">{project.title}</h2>
                    <p className="projectCardSubtitle">
                      {project.titleDescription}
                    </p>
                    <p className="projectCardDesc">{project.description}</p>
                    {project.pi && project.pi.length > 0 && (
                      <div className="projectCardPi">
                        <span className="projectPiLabel">PI:</span>{' '}
                        {project.pi.join(', ')}
                      </div>
                    )}
                    {project.metaDataPublication?.some((p) => p.name) && (
                      <div className="projectCardLinks">
                        {project.metaDataPublication
                          .filter((p) => p.name)
                          .map((pub, j) => (
                            <a
                              key={j}
                              href={pub.href}
                              target="_blank"
                              rel="noreferrer"
                              className="projectCardLink"
                            >
                              Publication
                            </a>
                          ))}
                        {project.metaDataPresentation
                          ?.filter((p) => p.name)
                          .map((pres, j) => (
                            <a
                              key={j}
                              href={pres.href}
                              target="_blank"
                              rel="noreferrer"
                              className="projectCardLink"
                            >
                              Presentation
                            </a>
                          ))}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};
