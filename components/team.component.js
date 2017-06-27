import MemberCard from './member_card.component';

export default () => (
  <section className="container" style={{ marginTop: '80px', marginBottom: '80px' }}>
    <h1 className="title is-1" style={{ textAlign: 'center'}}>Core Team</h1>
    <div className="columns is-centered">
      <MemberCard
        name="Adam Parrish"
        twitterHandle="wparrish"
        imageURL="static/images/headshots-portrait/adam.jpg"
        description="Managing Partner & Software Engineer"
      />
      <MemberCard
        name="Trevor Ewen"
        twitterHandle="tewen"
        imageURL="static/images/headshots-portrait/trevor.jpg"
        description="Partner & Software Engineer"
      />
      <MemberCard
        name="Pablo Alonso"
        twitterHandle="pabloalonsos"
        imageURL="static/images/headshots-portrait/pablo.jpg"
        description="Partner & Software Engineer"
      />
    </div>
    <div className="columns is-centered">
      <MemberCard
        name="Sushindhran Harikrishnan"
        twitterHandle="sushindhran"
        imageURL="static/images/headshots-portrait/sushi.jpg"
        description="Partner & Software Engineer"
      />
      <MemberCard
        name="Dana Parrish"
        twitterHandle="neosavvy"
        imageURL="static/images/assets/logo.png"
        description="HR Generalist"
      />
      <MemberCard
        name="CAREERS"
        imageURL="static/images/stock-adjusted/careers.jpg"
        link="/careers"
      />
    </div>
  </section>
)
