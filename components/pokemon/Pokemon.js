import React from 'react';
import styles from './style.module.scss';
import NextLink from 'next/link';

const Link = ({ index, children }) => {
  return (
    <NextLink href={`/pokemon/${index + 1}`}>
      <a>{children}</a>
    </NextLink>
  );
};

const Pokemon = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div className={styles.container}>
      <h1>Escolha seu pokemon</h1>
      <div className={styles.main}>
        {pokemon.map((item, index) => (
          <Link index={index} key={index}>
            <div className={styles.card} key={index + 1}>
              <img className={styles.image} src={item.image} alt={item.name} />
              <div className={styles.body}>
                <p>{item.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
