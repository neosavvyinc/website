import React, { Component } from 'react';
import Link from 'next/link';

export default class MemberCard extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false
    };
  }

  toggleDetails = () => {
    if (this.props.link) return;
    this.setState({ showDetails: !this.state.showDetails });
  }

  render() {
    const {
      imageURL,
      name,
      description,
      bio,
      link,
      twitter,
      linkedin,
      medium
    } = this.props;
    const styles = compStyles(imageURL);
    const card = (
      <div onClick={this.toggleDetails} style={styles.container}>
        <p style={styles.title}>{name}</p>
        <p style={styles.subtitle}>{description}</p>
      </div>
    );

    if (link) {
      return (
        <Link href={link}>
          {card}
        </Link>
      )
    } else {
      const modal = (
        <div className={`modal ${this.state.showDetails ? 'is-active' : ''}`}>
          <div className="modal-background" onClick={this.toggleDetails} />
          <div className="modal-content">
            <div className="box" style={{ borderRadius: 0 }}>
              <div className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={imageURL} alt="Image"/>
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{name}</strong>
                      <small style={{paddingLeft: '5px'}}><a href={`https://twitter.com/${twitter}`}>@{twitter}</a></small>
                      <br/>
                      {bio}
                    </p>
                  </div>
                  <nav className="level">
                    <div className="level-left">
                      {
                        linkedin ? (
                          <a className="level-item" style={styles.levelItem} href={`https://linkedin.com/in/${linkedin}`}>
                            <i className="fa fa-linkedin"/>
                          </a>
                        ): null
                      }
                      {
                        twitter ? (
                          <a className="level-item" style={styles.levelItem} href={`https://twitter.com/${twitter}`}>
                            <i className="fa fa-twitter"/>
                          </a>
                        ) : null
                      }
                      {
                        medium ? (
                          <a className="level-item" style={styles.levelItem} href={`https://medium.com/@${medium}`}>
                            <i className="fa fa-medium"/>
                          </a>
                        ) : null
                      }
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <button className="modal-close" onClick={this.toggleDetails}></button>
        </div>
      );
      return (
        <div>
          {card}
          {modal}
        </div>
      );
    }
  }
}

function compStyles(url) {
  return {
    container: {
      backgroundImage: `url('${url}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '300px',
      height: '242px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      cursor: 'pointer'
    },
    name: {
      color: 'white',
      fontSize: '18px',
      fontWeight: '600',
      textTransform: 'uppercase',
      marginBottom: '35px',
    },
    title: {
      fontSize: '20px',
      color: 'white',
      fontWeight: '600',
      marginLeft: '10px'
    },
    subtitle: {
      fontSize: '14px',
      fontWeight: '200',
      color: 'white',
      marginBottom: '10px',
      marginLeft: '10px'
    },
    levelItem: {
      float: 'left'
    }
  };
};

