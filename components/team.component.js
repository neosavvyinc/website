import MemberCard from './member_card.component';

export default () => (
  <section>
    <h1 className="title is-1">Core Team</h1>
    <div className="columns">
      <div className="column">
        <MemberCard
          name="Adam Parrish"
          twitterHandle="wparrish"
          imageURL="static/images/headshots-portrait/adam.jpg"
          description="Managing Partner & Software Engineer"
        />
      </div>
      <div className="column">
        <MemberCard
          name="Trevor Ewen"
          twitterHandle="tewen"
          imageURL="static/images/headshots-portrait/trevor.jpg"
          description="Partner & Software Engineer"
        />
      </div>
      <div className="column">
        <MemberCard
          name="Pablo Alonso"
          twitterHandle="pabloalonsos"
          imageURL="static/images/headshots-portrait/pablo.jpg"
          description="Partner & Software Engineer"
        />
      </div>
    </div>
    <div className="columns">
      <div className="column">
        <MemberCard
          name="Sushindhran Harikrishnan"
          twitterHandle="sushindhran"
          imageURL="static/images/headshots-portrait/sushi.jpg"
          description="Partner & Software Engineer"
        />
      </div>
      <div className="column">
        <MemberCard
          name="Dana Parrish"
          twitterHandle="neosavvy"
          imageURL="static/images/assets/logo.png"
          description="HR Generalist"
        />
      </div>
      <div className="column"/>
  </div>
  </section>
)
