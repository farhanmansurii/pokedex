import React from 'react'

export default function PokemonEvolutionCard(props) {
  const { name, image, number } = props.pokemon

  return (
    <div className="pokemon-card  rounded-lg p-5">
      <img src={image} className=" w-[200px]  p-7 aspect-square  object-contain" alt={name} />
      <div className="pt-3">
        <div className="text-sm font-bold text-gray-500">#0{number}</div>
        <div className="text-xl mt-3">{name}</div>

      </div>
    </div>)
}
