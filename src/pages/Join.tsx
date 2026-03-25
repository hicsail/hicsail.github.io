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

      {/* Testimonials */}
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

      {/* Technical Staff */}
      <section className="joinSection joinStaffSection" id="technical-staff">
        <div className="joinSectionInner">
          <span className="joinEyebrowDark">Full-Time Roles</span>
          <h2 className="joinSectionTitle">Technical Staff</h2>
          <div className="joinStaffNotice">
            <div className="joinStaffNoticeIcon">
              <span className="material-symbols-outlined">info</span>
            </div>
            <div>
              <p className="joinBody" style={{ margin: 0 }}>
                There are currently no openings for full-time staff. For
                additional opportunities at Boston University, visit{' '}
                <a
                  href="https://www.bu.edu/hr/careers/"
                  target="_blank"
                  rel="noreferrer"
                  className="joinInlineLink"
                >
                  Boston University Careers
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
