import * as React from 'react';
import './People.css';
import data from '../../utils/data/data.json';

interface PersonData {
  picture: string;
  name: string;
  role: string;
  bio?: string;
  email: string;
}

export const People: React.FC = () => {
  const people: PersonData[] = data['people'];

  return (
    <main className="peoplePage">
      {/* Page header */}
      <section className="peopleHero">
        <img
          src="/img/cds-building.svg"
          alt=""
          className="peopleHeroBg"
          aria-hidden="true"
        />
        <div className="peopleHeroInner">
          <span className="peopleEyebrow">Our Team</span>
          <h1 className="peopleTitle">The People Behind the Work</h1>
          <p className="peopleSubtitle">
            A team of research software engineers, product specialists, and
            innovators building technology at the intersection of computing and
            research.
          </p>
        </div>
      </section>

      {/* People grid */}
      <section className="peopleSection">
        <div className="peopleSectionInner">
          <div className="peopleGrid">
            {people.map((person, i) => (
              <div className="personCard" key={i}>
                <div className="personPhotoWrap">
                  <img
                    src={person.picture}
                    alt={person.name}
                    className="personPhoto"
                    loading="lazy"
                  />
                </div>
                <div className="personInfo">
                  <div className="personName">{person.name}</div>
                  <div className="personRole">{person.role}</div>
                  <a href={`mailto:${person.email}`} className="personEmail">
                    {person.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
