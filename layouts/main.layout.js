import React, { Component } from 'react';
import Head from 'next/head';
import * as analytics from '../utils/analytics.util';
import Header from '../components/header.component';
import Footer from '../components/footer.component';

export default class Main extends Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      analytics.initGA();
      window.GA_INITIALIZED = true;
    }
    analytics.logPageView();
  }

  render() {
    const { children, headerTransparent } = this.props;
    return (
      <div>
        <Head>
          <meta name="description" content="Neosavvy: Your Development Solution"/>
          <title>Neosavvy, Inc.</title>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta property="fb:app_id" content="308479216162137"/>
          <meta property="og:url" content="http://www.neosavvy.com"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Neosavvy: your development solution."/>
          <meta property="og:description" content="delivering software development, professional training, and project delivery solutions to suit your business needs"/>
          <meta property="og:image" content="http://www.neosavvy.com/images/assets/logo_200x200.png"/>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" type="text/css"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.css"/>
          <link rel="shortcut icon" href="static/images/assets/favicon.ico" type="image/x-icon"/>
          <link rel="icon" href="static/images/assets/favicon.ico" type="image/x-icon"/>
        </Head>

        <Header transparent={headerTransparent}/>

        <div style={styles.mainContent}>
          {children}
        </div>

        <Footer />

      </div>
    )
  }
}

const styles = {
  mainContent: {
    marginBottom: '230px',
    backgroundColor: 'white',
    boxShadow: '0 0 30px 0 rgba(54,69,79,.86)',
    //color: '#70808D',
    //backgroundColor: '#EEF2F5',
    minHeight: '50.05em',
    zIndex: 2
  }
};
