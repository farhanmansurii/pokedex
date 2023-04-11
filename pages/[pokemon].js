// import { useState } from 'react';
// import { gql } from '@apollo/client';
// import client from '@/apollo/apollo-client';


// // function EvolutionPopup({ pokemon }) {
// //   const [evolutions, setEvolutions] = useState(null);

// //   const handleShowEvolutions = async () => {
// //     if (!evolutions)
// //     {
// //       const { data } = await client.query({
// //         query: gql`
// //           query PokemonEvolutions($id: String!) {
// //             pokemon(id: $id) {
// //               evolutions {
// //                 id
// //                 name
// //                 image
// //               }
// //             }
// //           }
// //         `,
// //         variables: {
// //           id: pokemon.id,
// //         },
// //       });
// //       setEvolutions(data.pokemon.evolutions);
// //     }
// //   };

// //   return (
// //     <div>
// //       <button onClick={handleShowEvolutions}>Show Evolutions</button>
// //       {evolutions &&
// //         <div>
// //           <h3>Evolutions:</h3>
// //           {evolutions.map((evolution) => (
// //             <div key={evolution.id}>
// //               <img src={evolution.image} alt={evolution.name} />
// //               <p>{evolution.name}</p>
// //             </div>
// //           ))}
// //         </div>
// //       }
// //     </div>
// //   );
// // }



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

import client from '@/apollo/apollo-client';
import Modal from '@/components/Modal';
import Navbar from '@/components/Navbar';
import PokemonDetails from '@/components/PokemonDetails';
import { gql } from '@apollo/client';
// function PokemonDetailPage({ pokemon }) {
//   return (
//     <div>
//       <h1>{pokemon.name}</h1>
//       <img src={pokemon.image} alt={pokemon.name} />
//       <p>Height: {pokemon.height.minimum} - {pokemon.height.maximum}</p>
//       <p>Weight: {pokemon.weight.minimum} - {pokemon.weight.maximum}</p>
//       <p>Classification: {pokemon.classification}</p>
//       <p>Type: {pokemon.types.join(', ')}</p>
//       <p>Weakness: {pokemon.weaknesses.join(', ')}</p>
//       <p>Resistance: {pokemon.resistant.join(', ')}</p>
//       <EvolutionPopup pokemon={pokemon} />
//     </div>
//   );
// }

// export default PokemonDetailPage;

import React, { useState } from 'react'

export default function PokemonDetailPage(props) {
  const [open, setOpen] = useState()
  const pokemon = props.data.pokemon
  console.log(pokemon)
  return (
    <div>

      <PokemonDetails pokemon={pokemon} />

    </div>
  )
}


