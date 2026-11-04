import * as React from 'react';
import './Services.css';
import data from '../../utils/data/data.json';

interface Service {
  title: string;
  subtitle: string;
  description: string;
  href: string;
}

export const Services: React.FC = () => {
  const services: Service[] = data['services'];

  return (
    <main className="servicesPage">
      {/* Hero */}
      <section className="servicesHero">
        <img
          src="/img/cds-building.svg"
          alt=""
          className="servicesHeroBg"
          aria-hidden="true"
        />
        <div className="servicesHeroInner">
          <span className="servicesEyebrow">What We Offer</span>
          <h1 className="servicesTitle">Services</h1>
          <p className="servicesSubtitle">
            Tools and platforms built by SAIL to support research, data access,
            and collaboration across Boston University and its partners.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="servicesSection">
        <div className="servicesSectionInner">
          <div className="servicesGrid">
            {services.map((service, i) => (
              <article className="serviceCard" key={i}>
                <div className="serviceCardBody">
                  <h2 className="serviceCardTitle">{service.title}</h2>
                  <p className="serviceCardSubtitle">{service.subtitle}</p>
                  <p className="serviceCardDesc">{service.description}</p>
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noreferrer"
                    className="serviceCardLink"
                  >
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
