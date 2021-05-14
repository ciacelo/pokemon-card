import React from 'react';
import styles from './style.module.scss';
import NextLink from 'next/link';

const Link = ({ index, children, ...props }) => {
  return (
    <NextLink href={`/pokemon/${index + 1}`}>
      <a data-testid={props.dataTestid}>{children}</a>
    </NextLink>
  );
};

const Pokemon = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div className={styles.container}>
      <h1>Escolha seu pokemon</h1>
      <div className={styles.main}>
        {pokemon.length > 0 ? (
          pokemon.map((item, index) => (
            <Link dataTestid={`link-${index}`} index={index} key={index}>
              <div className={styles.card} key={index + 1}>
                <img
                  className={styles.image}
                  src={item.image}
                  alt={item.name}
                />
                <div className={styles.body}>
                  <p>{item.name}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <h3 data-testid="empty-list-pokemon" className={styles.emptyList}>
            Não existe Pokémon nesta arena.
          </h3>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
