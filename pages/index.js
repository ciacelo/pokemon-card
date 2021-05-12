import Layout from '../components/Layout';
import Pokemon from '../components/pokemon/Pokemon';
import styles from './index.module.scss';

const Home = ({ pokemon }) => {
  console.log('Dados: ', pokemon);
  return (
    <div className={styles.container}>
      <Layout title="Pokemon Cards">
        <Pokemon pokemon={pokemon} />
      </Layout>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  try {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/?limit=200'
    );
    const { results } = await response.json();
    const pokemon = results.map((item, index) => {
      const imageIndex = ('00' + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageIndex}.png`;
      return {
        ...item,
        image,
      };
    });
    return { props: { pokemon } };
  } catch (error) {
    console.log(error);
  }
}
