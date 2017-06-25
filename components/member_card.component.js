import React from 'react';

export default function({ imageURL, name, twitterHandle, description }) {
  return (
    <div className="card" style={styles.card.container}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imageURL} alt="Image"/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
            {/*
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image"/>
            </figure>
          </div>
            */}
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">
              <a href={`https://twitter.com/${twitterHandle}`}>@{twitterHandle}</a>
            </p>
          </div>
        </div>

        <div className="content">
          {description}
        </div>
      </div>
    </div>
  )
}

const styles = {
  card: {
    container: {
      maxWidth: '25rem',
      minWidth: '20rem'
    }
  }
}
