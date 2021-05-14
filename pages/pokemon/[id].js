import React from 'react';
import Layout from '../../components/Layout';
import styles from './pokemon.module.scss';
const PokemonDetails = ({ result }) => {
  console.log('detalhes: ', result);
  const { name, base_experience, height, weight, image, types } = result;
  return (
    <div className={styles.container}>
      <Layout title={`Pokémon: ${name}`}>
        <h1 className={styles.title}>Detalhes: </h1>
        <div className={styles.cardInfo}>
          <div className={styles.head}>
            <img className={styles.image} src={image} alt={name} />
            <h2>
              <strong>{name}</strong>
            </h2>
          </div>
          <div className={styles.body}>
            <div className={styles.row}>
              <div className={styles.col}>
                <p>
                  <strong>Altura:</strong>
                  {height}
                </p>
                <p>
                  <strong>Largura:</strong> {weight}
                </p>
                <p>
                  <strong>XP básico:</strong> {base_experience}
                </p>
              </div>
              <br />
              <div className={styles.col}>
                <h5 className={styles.types}>Tipos:</h5>
                {types &&
                  types.map((item, index) => (
                    <p className={styles.type} key={index}>
                      {item.type.name}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PokemonDetails;

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const result = await response.json();
    const imageID = ('00' + id).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageID}.png`;
    result.image = image;
    return {
      props: { result },
    };
  } catch (error) {
    console.log(error);
  }
}
