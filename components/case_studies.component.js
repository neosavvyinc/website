import _ from 'lodash';
import sizeMe from 'react-sizeme';

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
    logo: '/static/images/case-studies/bionic-labs.png',
    url: 'google.com'
  },
];

const CaseStudies = ({ size }) => {
  const isMobileSmall = size.width < 480;
  const isMobile = size.width < 768;
  const isTablet = size.width < 1430;
  const styles = createStyles(isMobile, isTablet);

  let chunksize = 6;
  if (isMobileSmall) {
    chunksize = 1;
  } else if (isMobile) {
    chunksize = 2;
  } else if (isTablet) {
    chunksize = 3;
  }

  return (
    <div style={styles.container}>
      {
        _.chain(companies).chunk(chunksize).map(companySegment => (
          <div style={styles.cardSegment}>{_.map(companySegment, company => (
            <div
              key={company.name}
              className="card"
              style={styles.card}
            >
              <div className="card-content"
                   style={styles.cardContent}>
                <p/>
                <p className="title" style={{ textAlign: 'center' }}>
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
          ))}</div>
        )).value()
      }
    </div>
  );
};

export default sizeMe()(CaseStudies);

const createStyles = (isMobile, isTablet) => {
  const defaults = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    },
    quoteContainer: {},
    quoteContent: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    cardSegment: {
      display: 'flex'
    },
    primaryCard: {
      width: '100%',
    },
    card: {
      width: '100%',
      minWidth: '200px'
    },
    cardContent: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    caseContainer: {
      width: '240px',
    },
    caseImage: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cases: {
      display: 'flex',
    }
  };

  const tablet = isTablet && !isMobile ? {
    container: {
      display: 'block',
      width: '100%'
    },
    quoteContainer: {
      width: '100%',
      maxWidth: 'auto'
    },
    cases: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%'
    }
  } : {};

  const mobile = isMobile ? {
    container: {
      display: 'block',
      width: '100%'
    },
    quoteContainer: {
      width: '100%',
      maxWidth: 'auto'
    },
    cases: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      flexWrap: 'wrap'
    }
  } : {};

  return _.merge(defaults, tablet, mobile);
};
