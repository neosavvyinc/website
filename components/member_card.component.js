import React from 'react';
import Link from 'next/link';

export default function({ imageURL, name, twitterHandle, description, link, children }) {
  const styles = compStyles(imageURL);
  const card = (
    <div style={styles.container}>
      <p style={styles.name}>{name}</p>
      {/* twitterHandle ? <p>@{twitterHandle}</p> : null */}
    </div>
  );

  return link ? (
    <Link href={link}>
      <div style={{cursor: 'pointer'}}>
        {card}
      </div>
    </Link>
  ) : card;
  // return (
  //   <div className="card" style={styles.card.container}>
  //     <div className="card-image">
  //       <figure className="image">
  //         <img src={imageURL} alt="Image"/>
  //       </figure>
  //     </div>
  //     <div className="card-content">
  //       <div className="media">
  //           {/*
  //         <div className="media-left">
  //           <figure className="image is-48x48">
  //             <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image"/>
  //           </figure>
  //         </div>
  //           */}
  //         <div className="media-content">
  //           <p className="title is-4">{name}</p>
  //           <p className="subtitle is-6">
  //             <a href={`https://twitter.com/${twitterHandle}`}>@{twitterHandle}</a>
  //           </p>
  //         </div>
  //       </div>

  //       <div className="content">
  //         {description}
  //       </div>
  //     </div>
  //   </div>
  // )
}

function compStyles(url) {
  return {
    container: {
      backgroundImage: `url('${url}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '200px',
      width: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    name: {
      color: 'white',
      fontSize: '18px',
      fontWeight: '600',
      textTransform: 'uppercase',
      marginBottom: '35px',
    }
  };
};

// const styles = {
//   card: {
//     container: {
//       width: '20rem',
//       height: '20rem'
//     }
//   }
// }
