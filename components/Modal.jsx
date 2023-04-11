import React from 'react'

import PokemonEvolutionCard from './PokemonEvolutionCard'

export default function Modal(props) {

  const { open, setOpen, evolutions } = props
  console.log(evolutions)
  return (

    <div class="fixed z-10 inset-0 h-screen overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen px-4 pt-6 pb-20 text-center sm:block sm:p-0">


        <div class="fixed inset-0 transition-opacity backdrop-blur-sm bg-black/20"></div>

        <div class="inline-block w-fit p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">Evolutions</h2>
            <button onClick={() => setOpen(false)} class="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700" type="button" onclick="closeModal()">
              <span class="sr-only">Close modal</span>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div className='mb-6 pb-10 flex w-full'>
            {evolutions !== null && evolutions.evolutions?.length > 0 && <PokemonEvolutionCard pokemon={evolutions} />
            }
            {evolutions !== null ? (evolutions.evolutions ?
              evolutions.evolutions.map((evolution, index) => (

                <React.Fragment key={evolution.id}>
                  <div className="flex items-center justify-center w-10">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="red" className="w-14 h-14">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                  <PokemonEvolutionCard pokemon={evolution} />
                  {index < evolutions.evolutions.length - 1 &&
                    evolutions.evolutions[index + 1].number - evolution.number > 1 && (
                      <div className="flex items-center justify-center w-10">
                        <span className="text-gray-300 text-sm">No Evolution</span>
                      </div>
                    )}

                </React.Fragment>
              ))
              : <div className="flex items-center justify-center  w-full">
                <div className="flex items-center justify-center  rounded-md  px-4">
                  <span className="text-2xl font-medium text-gray-500">
                    No Evolution
                  </span>
                </div>
              </div>) : (
              <div>Loading</div>
            )}
          </div>

          <button class="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md focus:outline-none focus:ring-2 justify-center w-full" onClick={() => setOpen(false)}>Close</button>
        </div>
      </div>
    </div>
  )
}
