// @flow strict
import React from 'react';
import Copyright from '../../Sidebar/Copyright';

// import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author, copyright } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {author.bio}
        {/* <a
          className={styles['author__bio-twitter']}
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> on Twitter
        </a> */}
        <Copyright copyright={copyright}/>
      </p>
    </div>
  );
};

export default Author;
