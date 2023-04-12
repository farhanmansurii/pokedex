import client from '@/apollo/apollo-client';
import PokemonDetails from '@/components/PokemonDetails';
import { gql } from '@apollo/client';
import React from 'react';

export default function PokemonDetailPage(props) {
  const pokemon = props.pokemon;
  console.log('pokemon:', pokemon);
  return (
    <div>{pokemon &&
      <PokemonDetails pokemon={pokemon || pokemon?.pokemon} />
    }
    </div>
  );
}


export async function getStaticProps(context) {
  const { pokemon } = context.params;
  console.log('getStaticProps:', pokemon);
  try
  {
    const { data } = await client.query({
      query: gql`
        query pokemon($name: String) {
          pokemon(name: $name) {
            id
            number
            name
            weight {
              minimum
              maximum
            }
            height {
              minimum
              maximum
            }
            classification
            types
            resistant
            weaknesses
            fleeRate
            maxCP
            maxHP
            image
          }
        }
      `,
      variables: {
        name: pokemon,
      },
    });

    return {
      props: {
        pokemon: data.pokemon,
      },
    };
  } catch (error)
  {
    console.error(error);
    return {
      notFound: true,
    };
  }
}
export async function getStaticPaths({ pokemon }) {
  const limit = 20;

  const { data } = await client.query({
    query: gql`
      query Pokemons($first: Int!) {
        pokemons(first: $first) {
          name
        }
      }
    `,
    variables: {
      first: limit,
    },
  });

  const paths = data.pokemons.map((pokemon) => ({
    params: { pokemon: pokemon.name },
  }));

  return {
    paths,
    fallback: true,
  };
}
