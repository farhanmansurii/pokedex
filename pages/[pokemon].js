



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


export async function getServerSideProps(context) {

  const pokemonId = (context.query.pokemon)
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
      name: pokemonId,
    },
  });
  return {
    props: {
      data
    },
  };
}
