import React from 'react'
import Type from './Type'

export default function PokemonCard(props) {

  const { name, image, number, types } = props.pokemon

  return (
    <div className="pokemon-card hover:bg-neutral-200 transform hover:-translate-y-2 transition-all duration-100 rounded-lg p-2">
      <div style={{ width: "100%", paddingTop: "70%", position: "relative" }}>
        <img src={image} className="absolute top-0 left-0 h-full w-full object-contain" alt={name} />
      </div>
      <div className="pt-3">
        <div className="text-sm font-bold text-gray-500">#0{number}</div>
        <div className="text-xl mt-3">{name}</div>
        {types && <div className="flex gap-1 mt-2">
          {types?.map((typ) => <Type text={typ} />)}
        </div>}
      </div>
    </div>
  )
}
