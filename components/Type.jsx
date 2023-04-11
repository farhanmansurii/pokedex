import React from 'react'

export default function Type({ text }) {

  return (
    <div className={`px-4 text-xs  py-1 rounded-md w-fit text-white ${text === 'Grass' ? 'bg-green-500' : text === 'Fire' ? 'bg-red-500' : text === 'Water' ? 'bg-blue-500' : text === 'Ice' ? 'bg-blue-200 text-black' : text === "Fighting" ? 'bg-orange-400' : text === "Poison" ? 'bg-purple-500' : text === "Psychic" ? 'bg-black' : text === "Flying" ? 'bg-blue-200' : text === "Ground" ? 'bg-amber-900' : text === "Electric" ? 'bg-yellow-500' : text === "Fairy" ? 'bg-pink-500' : text === "Bug" ? 'bg-green-800' : 'bg-gray-500'}`}>
      {text}
    </div>
  )
}
