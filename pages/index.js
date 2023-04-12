
import client from '@/apollo/apollo-client';
import Navbar from '@/components/Navbar';
import Pagination from '@/components/Pagination';
import PokemonCard from '@/components/PokemonCard';
import { gql } from '@apollo/client';
import Link from 'next/link';
import { useState } from 'react';



export default function Home(props) {
  const { pokemons } = props
  const [currentPage, setcurrentPage] = useState(1)
  const offset = 20
  const noOfPages = Math.ceil(pokemons.length / 20)
  const getPagePokemons = (i) => {

    const startIndex = (currentPage - 1) * 20
    const endIndex = startIndex + offset
    return pokemons.slice(startIndex, endIndex)
  }
  return (<>

    <Navbar />

    <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-10/12 mx-auto'>
      {
        getPagePokemons().map((pokemon) =>
          <Link href={`/${pokemon.name}`}>
            <PokemonCard pokemon={pokemon} />
          </Link>
        )
      }

    </div>


    <Pagination currentPage={currentPage} setcurrentPage={setcurrentPage} pokemons={pokemons} noOfPages={noOfPages} />

  </>
  )
}

export async function getStaticProps() {

  const limit = 151;


  const { data } = await client.query({
    query: gql`
      query Pokemons($first: Int!) {
        pokemons(first: $first) {
          id
          number
          name
          types
          image
        }
      }
    `,
    variables: {
      first: limit,
    },
  });

  return {
    props: {
      pokemons: data.pokemons,
    },
  };
}


