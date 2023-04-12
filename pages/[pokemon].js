



import client from '@/apollo/apollo-client';
import Modal from '@/components/Modal';
import Navbar from '@/components/Navbar';
import PokemonDetails from '@/components/PokemonDetails';
import { gql } from '@apollo/client';
import React, { useState } from 'react'

export default function PokemonDetailPage(props) {
  const [open, setOpen] = useState()
  const pokemon = props.data.pokemon

  return (
    <div>

      <PokemonDetails pokemon={pokemon} />

    </div>
  )
}


export async function getStaticProps(context) {
  const { pokemon } = context.params
  console.log(pokemon)
  const { data } = await client.query({
    query: gql`
      query pokemon($name: String){
  pokemon(name: $name){
    id
    number
    name
    weight{
      minimum
      maximum
    }
    height{
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
}`,
    variables: {
      name: pokemon,
    },
  });
  return {
    props: {
      data
    },
  };
}
export async function getStaticPaths() {
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
