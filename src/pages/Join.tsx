import * as React from 'react';
import './Join.css';
import { INTERNTESTIMONIALS_LIST } from '../archived/peopleInformation';

export const Join: React.FC = () => {
  return (
    <main className="joinPage">
      {/* Hero */}
      <section className="joinHero">
        <img
          src="/img/cds-building.svg"
          alt=""
          className="joinHeroBg"
          aria-hidden="true"
        />
        <div className="joinHeroInner">
          <span className="joinEyebrow">Careers</span>
          <h1 className="joinTitle">Join the SAIL Team</h1>
          <p className="joinSubtitle">
            Work alongside research engineers, faculty, and innovators building
            software that matters at Boston University.
          </p>
        </div>
      </section>

      {/* Internships section */}
      <section className="joinSection" id="internships">
        <div className="joinSectionInner">
          <span className="joinEyebrowDark">Opportunities</span>
          <h2 className="joinSectionTitle">Software Engineer Internships</h2>
          <div className="joinTwoCol">
            <div className="joinColText">
              <p className="joinBody">
                Interns at the Software &amp; Application Innovation Lab (SAIL)
                have the opportunity to gain experience working with a team of
                research software engineers, applying modern software
                development techniques while following industry best practices.
                They are not deterred by ambiguity and have a strong desire to
                explore alternatives and identify solutions.
              </p>
              <p className="joinBody">
                Interns gain expertise in critical and analytical work, design
                thinking, and cutting-edge technologies, all while collaborating
                with faculty, graduate students, and industry partners on
                research efforts in domains such as digital health, security and
                privacy, data science, synthetic biology and more.
              </p>
              {/* <a
                href="https://forms.clickup.com/14225407/f/dj3zz-4800/IHJZ83PECPURVQH6H2"
                target="_blank"
                rel="noreferrer"
                className="joinApplyBtn"
              >
                Apply for an Internship
              </a> */}
              <p className="joinNoOpenings">
                There are no active internship opportunities at this time. Check
                back soon.
              </p>
            </div>
            <div className="joinColHighlight">
              <div className="joinHighlightCard">
                <div className="joinHighlightIcon">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <div className="joinHighlightText">
                  Real-world research projects
                </div>
              </div>
              <div className="joinHighlightCard">
                <div className="joinHighlightIcon">
                  <span className="material-symbols-outlined">group</span>
                </div>
                <div className="joinHighlightText">
                  Collaborative team environment
                </div>
              </div>
              <div className="joinHighlightCard">
                <div className="joinHighlightIcon">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div className="joinHighlightText">
                  Modern dev practices and tech stacks
                </div>
              </div>
              <div className="joinHighlightCard">
                <div className="joinHighlightIcon">
                  <span className="material-symbols-outlined">public</span>
                </div>
                <div className="joinHighlightText">
                  Domains: health, security, data science
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — hidden until content is ready */}
      {false && (
        <section className="joinTestimonialsSection">
          <div className="joinSectionInner">
            <span className="joinEyebrowDark">Intern Voices</span>
            <h2 className="joinSectionTitle">What Our Interns Say</h2>
            <div className="joinTestimonialsGrid">
              {INTERNTESTIMONIALS_LIST.map((intern, i) => (
                <div className="joinTestimonialCard" key={i}>
                  <p className="joinTestimonialQuote">"{intern.quote}"</p>
                  <div className="joinTestimonialAuthor">
                    <div>
                      <div className="joinTestimonialName">{intern.name}</div>
                      {intern.season && (
                        <div className="joinTestimonialSeason">
                          {intern.season}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technical Staff */}
      <section className="joinSection joinStaffSection" id="technical-staff">
        <div className="joinSectionInner">
          <span className="joinEyebrowDark">Full-Time Roles</span>
          <h2 className="joinSectionTitle">Technical Staff</h2>

          {/* Director listing */}
          <div className="joinJobCard">
            <div className="joinJobCardHeader">
              <div>
                <h3 className="joinJobTitle">Director, SAIL</h3>
                <p className="joinJobMeta">
                  Hariri Institute for Computing &nbsp;·&nbsp; Boston, MA
                  &nbsp;·&nbsp; Full-Time
                </p>
              </div>
              <span className="joinJobBadge">Now Hiring</span>
            </div>
            <p className="joinJobDesc">
              The SAIL Director oversees overall operations of the Software
              &amp; Application Innovation Lab, provides code review and
              technical project management for major projects, and works closely
              with Institute leadership to integrate SAIL capacity across the
              spectrum of research at Hariri. The Director will shape long-term
              plans for SAIL, manage a team of research software engineers, and
              serve as a key bridge between SAIL, faculty researchers, and
              computing efforts across Boston University.
            </p>
            <a
              href="https://jobs.silkroad.com/BU/External/jobs/316478"
              target="_blank"
              rel="noreferrer"
              className="joinApplyBtn"
            >
              Apply on BU Careers
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '1rem' }}
              >
                open_in_new
              </span>
            </a>
          </div>

          <p className="joinStaffFootnote">
            For all other Boston University opportunities, visit{' '}
            <a
              href="https://www.bu.edu/hr/careers/"
              target="_blank"
              rel="noreferrer"
              className="joinInlineLink"
            >
              BU Careers
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
};
