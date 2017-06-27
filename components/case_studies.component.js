import _ from 'lodash';

const companies = [
  {
    name: 'Bloomberg L.P.',
    logo: '/static/images/case-studies/bloomberg.png',
    url: 'google.com'
  },
  {
    name: 'HBO',
    logo: '/static/images/case-studies/hbo.png',
    url: 'google.com'
  },
  {
    name: 'Honest Buildings',
    logo: '/static/images/case-studies/honest-buildings.png',
    url: 'google.com'
  },
  {
    name: 'Morgan Stanley',
    logo: '/static/images/case-studies/morgan-stanley.png',
    url: 'google.com'
  },
  {
    name: 'Lockheed Martin',
    logo: '/static/images/case-studies/lockheed-martin.png',
    url: 'google.com'
  },
  {
    name: 'Bionic Labs',
    logo: '/static/images/case-studies/bionic-Labs.png',
    url: 'google.com'
  },
];

export default () => (
  <div style={styles.container}>
    <div className="card" style={{ maxWidth: '80vh' }}>
      <div className="card-content" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <p className="title is-4">
          Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.
        </p>
        <p className="subtitle">- Albert Einstein</p>
      </div>
    </div>
    {
      _.map(companies, company => (
        <div
          key={company.name}
          className="card"
          style={styles.card}
        >
          <div className="card-content" style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <p/>
            <p className="title">
              <img
                src={company.logo}
                alt={company.name}
              />
            </p>
            <p className="subtitle">
              {company.name}
            </p>
          </div>
        </div>
      ))
    }
  </div>
);

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    width: '300px'
  },
  caseContainer: {
    width: '240px',
  },
  caseImage: {
    //    height: '240px',
    //    margin: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}
