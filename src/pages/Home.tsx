import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import styles from './home.module.css';

export const Home: React.FC = () => {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* ══ HERO ══ */}
      <section className={styles.hero}>
        {/* Compass rose watermark */}
        <svg
          className={styles.heroPlus}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Outer compass ring */}
          <circle
            cx="100"
            cy="100"
            r="93"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <circle
            cx="100"
            cy="100"
            r="87"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.3"
          />
          {/* North — red */}
          <path d="M100 4 L111 96 L100 109 L89 96 Z" fill="#E8392A" />
          {/* South — white */}
          <path d="M100 196 L111 104 L100 91 L89 104 Z" fill="white" />
          {/* NE diagonal — small */}
          <path
            d="M163 37 L108 97 L103 92 L97 103 Z"
            fill="white"
            opacity="0.5"
          />
          {/* NW diagonal */}
          <path
            d="M37 37 L92 97 L97 92 L103 103 Z"
            fill="white"
            opacity="0.5"
          />
          {/* SE diagonal */}
          <path
            d="M163 163 L108 103 L103 108 L97 97 Z"
            fill="white"
            opacity="0.5"
          />
          {/* SW diagonal */}
          <path
            d="M37 163 L92 103 L97 108 L103 97 Z"
            fill="white"
            opacity="0.5"
          />
          {/* Centre hub */}
          <circle cx="100" cy="100" r="5" fill="white" />
          <circle cx="100" cy="100" r="2.5" fill="#E8392A" />
        </svg>

        <div className={styles.heroGrid}>
          <div>
            <span className={styles.heroTag}>
              Based at Hariri Institute for Computing
            </span>
            <h1 className={styles.heroTitle}>
              Empowering Research with <em>AI &amp; Modern Software</em>
            </h1>
            <p className={styles.heroSubtitle}>
              Boston University's research software lab. We build the tools,
              systems, and AI infrastructure that let researchers focus on their
              science, not their software.
            </p>
            <div className={styles.heroBadges}>
              <div className={styles.heroBadge}>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)' }}
                >
                  rocket_launch
                </span>
                Builder First: We ship working software
              </div>
              <div className={styles.heroBadge}>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)' }}
                >
                  translate
                </span>
                Bilingual: We speak research &amp; software
              </div>
              <div className={styles.heroBadge}>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)' }}
                >
                  diversity_3
                </span>
                Long-term partners: We stay after launch
              </div>
            </div>
            <div className={styles.heroButtons}>
              <ReactRouterLink to="/#contact" className={styles.btnPrimary}>
                Get Started
              </ReactRouterLink>
              <ReactRouterLink to="/projects" className={styles.btnSecondary}>
                See What We Build
              </ReactRouterLink>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className={styles.heroStatsRow}>
          {[
            { num: '40+', label: 'Projects Since 2022' },
            { num: '10+', label: 'Partner Institutions' },
            { num: '$6M+', label: 'Research Supported' },
            { num: '10+', label: 'Years at BU' },
          ].map((s) => (
            <div key={s.label} className={styles.heroStatItem}>
              <div className={styles.heroStatNum}>{s.num}</div>
              <div className={styles.heroStatLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ WHAT WE BUILD ══ */}
      <section className={`${styles.section} ${styles.buildSection}`}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>Specializations</span>
          <h2 className={styles.sectionTitle}>
            Everything Your Research Needs
          </h2>
          <p className={styles.sectionSubtitle}>
            No technical background needed. Just describe your research problem
            and here's the full range of what we build.
          </p>
          <div className={styles.buildGrid}>
            {/* Data */}
            <div className={styles.buildCard}>
              <div
                className={styles.buildCardBorder}
                style={{ background: '#9e0000' }}
              />
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: '2.5rem',
                  color: '#9e0000',
                  marginBottom: '1.25rem',
                  display: 'block',
                }}
              >
                database
              </span>
              <h3 className={styles.buildCardTitle}>Data</h3>
              <p className={styles.buildCardDesc}>
                High-performance pipelines, structured storage, and real-time
                visualization for complex research datasets.
              </p>
              <ul className={styles.buildCardList}>
                {[
                  'Databases & Secure Access',
                  'Data Analysis & Statistical Processing',
                  'Interactive Dashboards & Charts',
                  'Data Collection Apps',
                ].map((item) => (
                  <li key={item} className={styles.buildCardListItem}>
                    <span
                      className={styles.buildCardBullet}
                      style={{ background: '#9e0000' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* AI */}
            <div className={styles.buildCard}>
              <div
                className={styles.buildCardBorder}
                style={{ background: '#2E7D32' }}
              />
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: '2.5rem',
                  color: '#2E7D32',
                  marginBottom: '1.25rem',
                  display: 'block',
                }}
              >
                psychology
              </span>
              <h3 className={styles.buildCardTitle}>AI</h3>
              <p className={styles.buildCardDesc}>
                Custom LLM integrations, predictive modeling, and computer
                vision tools tailored for scholarly inquiry.
              </p>
              <ul className={styles.buildCardList}>
                {[
                  'Chatbots & LLM Applications',
                  'Document Q&A & Conversational Interfaces',
                  'ML Pipelines & Model Training',
                  'AI-powered Workflow Automation',
                ].map((item) => (
                  <li key={item} className={styles.buildCardListItem}>
                    <span
                      className={styles.buildCardBullet}
                      style={{ background: '#2E7D32' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Software */}
            <div className={styles.buildCard}>
              <div
                className={styles.buildCardBorder}
                style={{ background: '#0C2340' }}
              />
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: '2.5rem',
                  color: '#0C2340',
                  marginBottom: '1.25rem',
                  display: 'block',
                }}
              >
                web
              </span>
              <h3 className={styles.buildCardTitle}>Software</h3>
              <p className={styles.buildCardDesc}>
                Scalable web applications, mobile tools, and robust system
                architectures built for long-term sustainability.
              </p>
              <ul className={styles.buildCardList}>
                {[
                  'Web & Mobile Apps',
                  'Multi-cloud APIs & Integrations',
                  'Research Platforms & Collaboration Tools',
                  'Custom Workflows & Decision Support',
                ].map((item) => (
                  <li key={item} className={styles.buildCardListItem}>
                    <span
                      className={styles.buildCardBullet}
                      style={{ background: '#0C2340' }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section className={`${styles.section} ${styles.testimonialsSection}`}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>What Researchers Say</span>
          <h2 className={styles.sectionTitle}>
            Trusted by Researchers Across BU
          </h2>
          <div className={styles.testimonialsGrid}>
            {[
              {
                quote:
                  'The SAIL team took our complex neurological data and turned it into a dashboard that our participants actually enjoy using. Their technical rigor is matched only by their understanding of the research process.',
                name: 'Dr. Sarah Chen',
                title: 'Lead Researcher, BU Neurosciences',
              },
              {
                quote:
                  'Working with SAIL was like having a dedicated CTO for our grant project. They understood the constraints of NIH funding and delivered a secure, HIPAA-compliant platform ahead of schedule.',
                name: 'Prof. James Wilson',
                title: 'Director, Population Health Initiative',
              },
              {
                quote:
                  "We came to SAIL with a rough idea and they helped us scope, build, and launch a tool that's now used by over 200 researchers internationally. I can't imagine having done this with an outside agency.",
                name: 'Dr. Priya Nair',
                title: 'Principal Investigator, BU School of Public Health',
              },
            ].map(({ quote, name, title }) => (
              <div key={name} className={styles.testimonialCard}>
                <span className={styles.testimonialQuoteMark}>&ldquo;</span>
                <p className={styles.testimonialQuote}>{quote}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    {name.split(' ').pop()![0]}
                  </div>
                  <div>
                    <div className={styles.testimonialName}>{name}</div>
                    <div className={styles.testimonialTitle}>{title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BU ADVANTAGE ══ */}
      <section className={`${styles.section} ${styles.advantageSection}`}>
        <div className={styles.advantageWatermark}>
          <svg viewBox="0 0 100 100">
            <path d="M50 10 L50 50 L10 50 Z" fill="white" />
            <path d="M90 50 L50 50 L50 10 Z" fill="white" />
            <path d="M50 90 L50 50 L90 50 Z" fill="white" />
            <path d="M10 50 L50 50 L50 90 Z" fill="white" />
          </svg>
        </div>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow} style={{ color: '#E8392A' }}>
            The BU Advantage
          </span>
          <h2 className={styles.advantageTitle}>Inside BU. No Friction.</h2>
          <p className={styles.advantageSubtitle}>
            Because SAIL is inside Boston University, you skip layers of
            friction that outside vendors can't avoid.
          </p>
          <div className={styles.advantageGrid}>
            <div
              className={`${styles.advantageCard} ${styles.advantageCardHighlight}`}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: '2rem',
                  marginBottom: '1.25rem',
                  display: 'block',
                }}
              >
                gavel
              </span>
              <h3 className={styles.advantageCardTitle}>
                No Procurement or Legal Required
              </h3>
              <p className={styles.advantageCardBody}>
                Internal collaboration means no vendor contracts, no procurement
                process, and no legal review cycles to slow you down.
              </p>
            </div>
            <div className={styles.advantageCard}>
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: '2rem',
                  marginBottom: '1.25rem',
                  display: 'block',
                  color: '#E8392A',
                }}
              >
                bolt
              </span>
              <h3 className={styles.advantageCardTitle}>
                Get Started in Days, Not Months
              </h3>
              <p className={styles.advantageCardBody}>
                An email and a project agreement is all it takes. Outside
                vendors can take 3–6 months to get through BU contracts.
              </p>
            </div>
            <div className={styles.advantageCard}>
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: '2rem',
                  marginBottom: '1.25rem',
                  display: 'block',
                  color: '#E8392A',
                }}
              >
                sync_alt
              </span>
              <h3 className={styles.advantageCardTitle}>
                Modify Research Plans Freely
              </h3>
              <p className={styles.advantageCardBody}>
                No change orders. No extra billing. As your research evolves, so
                does your product. That's how science works.
              </p>
            </div>
            <div className={styles.advantageCard}>
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: '2rem',
                  marginBottom: '1.25rem',
                  display: 'block',
                  color: '#E8392A',
                }}
              >
                description
              </span>
              <h3 className={styles.advantageCardTitle}>
                Grant Support &amp; Assistance
              </h3>
              <p className={styles.advantageCardBody}>
                SAIL strengthens grant proposals through letters of support,
                technical consultation, and participation as co-PIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ AFFORDABLE ══ */}
      <section className={`${styles.section} ${styles.affordableSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.affordableGrid}>
            <div>
              <span className={styles.eyebrow}>Software Strategy</span>
              <h2 className={styles.affordableTitle}>
                How We Make Software <em>Affordable</em>
              </h2>
              <p className={styles.affordableDesc}>
                Enabling high-impact research with cost-efficient, scalable
                software development. By leveraging shared services and
                automation, we reduce costs compared to outside agencies.
              </p>
              <ul className={styles.affordableList}>
                {[
                  { icon: 'code', label: 'Open-source technologies' },
                  { icon: 'cloud', label: 'Scalable cloud architecture' },
                  { icon: 'groups', label: 'Shared services model' },
                  { icon: 'auto_awesome', label: 'Accelerated with AI tools' },
                  { icon: 'widgets', label: 'Reusable system components' },
                  { icon: 'receipt_long', label: 'Fixed rate development' },
                ].map(({ icon, label }) => (
                  <li key={label} className={styles.affordableListItem}>
                    <div className={styles.affordableListIcon}>
                      <span
                        className={`material-symbols-outlined ${styles.affordableListIconInner}`}
                      >
                        {icon}
                      </span>
                    </div>
                    <span className={styles.affordableListLabel}>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.affordableCards}>
              <div className={styles.affordableCardGrey}>
                <h4 className={styles.affordableCardTitle}>Fixed Rate</h4>
                <p className={styles.affordableCardBody}>
                  Scoped projects with predictable pricing aligned to your grant
                  and research budgets.
                </p>
              </div>
              <div className={styles.affordableCardRed}>
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: '2.5rem',
                    color: 'rgba(255,255,255,0.7)',
                    marginBottom: '1rem',
                    display: 'block',
                  }}
                >
                  trending_down
                </span>
                <h4 className={styles.affordableCardTitle}>Zero Markup</h4>
                <p className={styles.affordableCardBody}>
                  Staffing and infrastructure at internal BU cost rates to
                  investigators.
                </p>
              </div>
              <div className={styles.affordableCardWide}>
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: '2.5rem',
                    color: '#E8392A',
                    flexShrink: 0,
                  }}
                >
                  speed
                </span>
                <div>
                  <h4 className={styles.affordableCardTitle}>
                    Accelerated with AI
                  </h4>
                  <p className={styles.affordableCardBody}>
                    AI-assisted development speeds up coding and testing,
                    reducing overall time and cost per project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SHARED INFRASTRUCTURE ══ */}
      <section className={`${styles.section} ${styles.infraSection}`}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>Shared Services</span>
          <h2 className={styles.sectionTitle}>
            Shared Infrastructure, Already Built
          </h2>
          <div className={styles.infraRedLine} />
          <p className={styles.sectionSubtitle}>
            Every SAIL project has a shared services layer we've already built,
            so you don't pay to rebuild from scratch.
          </p>
          <div className={styles.infraGrid}>
            <div className={styles.infraCard}>
              <div
                className={styles.infraCardBorder}
                style={{ background: '#9e0000' }}
              />
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: '2.25rem',
                  color: '#9e0000',
                  marginBottom: '1.25rem',
                  display: 'block',
                }}
              >
                cloud_done
              </span>
              <h3 className={styles.infraCardTitle}>Managed Hosting</h3>
              <p className={styles.infraCardBody}>
                Deploy on multiple cloud providers. We handle the DevOps so you
                focus on the research.
              </p>
            </div>
            <div className={styles.infraCard}>
              <div
                className={styles.infraCardBorder}
                style={{ background: '#0C2340' }}
              />
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: '2.25rem',
                  color: '#0C2340',
                  marginBottom: '1.25rem',
                  display: 'block',
                }}
              >
                fingerprint
              </span>
              <h3 className={styles.infraCardTitle}>Authentication</h3>
              <p className={styles.infraCardBody}>
                BU SSO integration with role-based access control for seamless,
                secure university access.
              </p>
            </div>
            <div className={styles.infraCard}>
              <div
                className={styles.infraCardBorder}
                style={{ background: '#2E7D32' }}
              />
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: '2.25rem',
                  color: '#2E7D32',
                  marginBottom: '1.25rem',
                  display: 'block',
                }}
              >
                verified_user
              </span>
              <h3 className={styles.infraCardTitle}>Compliance</h3>
              <p className={styles.infraCardBody}>
                HIPAA-ready environments designed for sensitive medical and
                research data.
              </p>
            </div>
          </div>
          <div className={styles.infraGrid} style={{ marginTop: '1.5rem' }}>
            <div className={styles.infraSmallCard}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '1.75rem', color: '#9e0000', flexShrink: 0 }}
              >
                mail
              </span>
              <div>
                <p className={styles.infraSmallTitle}>Emails &amp; Alerts</p>
                <p className={styles.infraSmallBody}>
                  Transactional email, participant alerts, and automated
                  reports.
                </p>
              </div>
            </div>
            <div className={styles.infraSmallCard}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '1.75rem', color: '#9e0000', flexShrink: 0 }}
              >
                security
              </span>
              <div>
                <p className={styles.infraSmallTitle}>
                  Security &amp; Maintenance
                </p>
                <p className={styles.infraSmallBody}>
                  Continuous vulnerability scanning, patches, and security
                  reviews, all handled.
                </p>
              </div>
            </div>
            <div className={styles.infraSmallCard}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '1.75rem', color: '#9e0000', flexShrink: 0 }}
              >
                monitoring
              </span>
              <div>
                <p className={styles.infraSmallTitle}>24/7 Monitoring</p>
                <p className={styles.infraSmallBody}>
                  Uptime checks, error tracking, and incident response around
                  the clock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className={`${styles.section} ${styles.processSection}`}>
        <div className={styles.sectionInner}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className={styles.eyebrow}>Process</span>
            <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>
              How We Work Together
            </h2>
            <p className={styles.processSubtitle}>
              Never worked with software developers before? Here's exactly what
              to expect. No technical background required.
            </p>
          </div>
          <div className={styles.processTrack}>
            <div className={styles.processLine} />
            {[
              {
                num: '1',
                color: '#9e0000',
                title: 'Discovery',
                body: 'We listen to your research goals. No spec sheet needed. Just tell us your challenges.',
              },
              {
                num: '2',
                color: '#5e5c71',
                title: 'Proposal',
                body: "We draft a plan: what we'll build, a timeline, and how it fits your grant.",
              },
              {
                num: '3',
                color: '#9e0000',
                title: 'Build & Iterate',
                body: 'We build in short cycles. You see real software early, and your feedback shapes every sprint.',
              },
              {
                num: '4',
                color: '#5e5c71',
                title: 'Launch',
                body: 'We deploy, train your team, and document everything. Your tool goes live.',
              },
              {
                num: '5',
                color: '#9e0000',
                title: 'Ongoing Support',
                body: 'We stay engaged after handoff, fixing bugs, adding features, and keeping your project running.',
              },
            ].map(({ num, color, title, body }) => (
              <div
                key={num}
                className={styles.processStep}
                style={{ borderTop: `4px solid ${color}` }}
              >
                <div
                  className={styles.processStepNum}
                  style={{ background: color }}
                >
                  {num}
                </div>
                <p className={styles.processStepTitle}>{title}</p>
                <p className={styles.processStepBody}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMPARISON TABLE ══ */}
      <section className={`${styles.section} ${styles.tableSection}`}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>Why SAIL</span>
          <h2 className={styles.sectionTitle}>SAIL vs. The Alternatives</h2>
          <p className={styles.tableSubtitle}>
            How we compare to outside consultants and other internal teams.
          </p>
          <div className={styles.tableWrapper}>
            <table className={styles.compTable}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Outside Consultants</th>
                  <th>Other Internal Teams</th>
                  <th>SAIL</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    'BU Legal / Contracting',
                    '✗ Yes, months',
                    '✓ No, internal',
                    '✓ No, internal',
                  ],
                  ['Understands Research', '✗ Rarely', 'Sometimes', '✓ Always'],
                  [
                    'Adapts to Research Changes',
                    '✗ Change Orders $$$',
                    'Varies',
                    '✓ Included',
                  ],
                  ['Grant Assistance', '✗ Payment First', 'Limited', '✓ Yes'],
                  [
                    'Stays after Handoff',
                    '✗ Additional Funds',
                    'Varies',
                    '✓ Yes, ongoing',
                  ],
                  ['Shared Services', '✗ Not Included', 'None', '✓ Full Stack'],
                  [
                    'AI Infrastructure',
                    'Varies',
                    'Limited',
                    '✓ Core Experience',
                  ],
                ].map(([feature, col1, col2, col3]) => (
                  <tr key={feature}>
                    <td>{feature}</td>
                    <td>
                      {col1.startsWith('✗') ? (
                        <>
                          <span className={styles.xMark}>✗</span>
                          {col1.slice(2)}
                        </>
                      ) : (
                        col1
                      )}
                    </td>
                    <td>
                      {col2.startsWith('✓') ? (
                        <>
                          <span className={styles.checkMark}>✓</span>
                          {col2.slice(2)}
                        </>
                      ) : (
                        col2
                      )}
                    </td>
                    <td>{col3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section
        id="contact"
        className={`${styles.section} ${styles.contactSection}`}
      >
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>Get Started</span>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          <div className={styles.infraRedLine} />
          <div className={styles.contactGrid}>
            {/* Info */}
            <div>
              <h3 className={styles.contactInfoTitle}>Contact Information</h3>
              <ul className={styles.contactInfoList}>
                <li className={styles.contactInfoItem}>
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: '1.25rem',
                      color: '#9e0000',
                      flexShrink: 0,
                      marginTop: '1px',
                    }}
                  >
                    location_on
                  </span>
                  <span>
                    665 Commonwealth Ave., 12th Floor
                    <br />
                    Boston, MA 02215
                  </span>
                </li>
                <li className={styles.contactInfoItem}>
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: '1.25rem',
                      color: '#9e0000',
                      flexShrink: 0,
                    }}
                  >
                    mail
                  </span>
                  <a href="mailto:sail@bu.edu">sail@bu.edu</a>
                </li>
                <li className={styles.contactInfoItem}>
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: '1.25rem',
                      color: '#9e0000',
                      flexShrink: 0,
                    }}
                  >
                    language
                  </span>
                  <a href="https://sail.bu.edu">sail.bu.edu</a>
                </li>
              </ul>
              <h3
                className={styles.contactInfoTitle}
                style={{ marginTop: '2.5rem' }}
              >
                Why Reach Out?
              </h3>
              <ul className={styles.checkList}>
                {[
                  'No procurement required. Start in days, not months.',
                  'Free initial consultation to scope your project',
                  'We help write the technical sections of NSF, NIH, and foundation grant proposals',
                  'Flexible billing aligned to your grant cycles',
                ].map((item) => (
                  <li key={item} className={styles.checkListItem}>
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: '1.1rem',
                        color: '#9e0000',
                        flexShrink: 0,
                        marginTop: '1px',
                      }}
                    >
                      check_circle
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* CTA */}
            <div className={styles.contactCta}>
              <div className={styles.contactCtaInner}>
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: '2.5rem',
                    color: '#E8392A',
                    marginBottom: '1rem',
                  }}
                >
                  rocket_launch
                </span>
                <h3 className={styles.contactCtaTitle}>
                  Ready to Start a Project?
                </h3>
                <p className={styles.contactCtaText}>
                  Fill out our project intake form and a member of the SAIL team
                  will follow up within two business days for a free
                  consultation.
                </p>
                <div className={styles.contactCtaBtns}>
                  <a
                    href="https://forms.clickup.com/14225407/f/dj3zz-19191/O5PXWT7BHU30PBMMZP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactCtaBtn}
                  >
                    <span>Start a Project</span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: '1.1rem' }}
                    >
                      arrow_forward
                    </span>
                  </a>
                  {/* Uncomment when meeting link is ready:
                  <a
                    href="https://calendly.com/placeholder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactCtaBtnOutline}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: '1.1rem' }}
                    >
                      calendar_month
                    </span>
                    <span>Meet with SAIL</span>
                  </a>
                  */}
                </div>
                <p className={styles.contactCtaNote}>
                  No commitment required. Free initial consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
