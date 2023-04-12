import React from 'react';
import PokemonEvolutionCard from './PokemonEvolutionCard';

function Modal(props) {
  const { open, setOpen, evolutions } = props;

  const handleCloseModal = () => {
    setOpen(false);
  }

  const renderEvolutions = () => {
    if (evolutions === null)
    {
      return (
        <div className="flex justify-center items-center h-32">
          <svg
            viewBox="0 0 24 24"
            fill="red"
            className=' w-10 h-10 animate-spin '
          >
            <path d="M12 4V2A10 10 0 002 12h2a8 8 0 018-8z" />
          </svg>
        </div>
      );
    } else if (evolutions.evolutions?.length > 0)
    {
      return (
        <div className='flex flex-row'>
          <PokemonEvolutionCard pokemon={evolutions} />
          {evolutions.evolutions.map((evolution, index) => (
            <React.Fragment key={evolution.id}>
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="red"
                  className="w-14 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
              <PokemonEvolutionCard pokemon={evolution} />
              {index < evolutions.evolutions.length - 1 &&
                evolutions.evolutions[index + 1].number - evolution.number > 1 && (
                  <div className="flex items-center justify-center">
                    <span className="text-gray-300 text-sm">No Evolution</span>
                  </div>
                )}
            </React.Fragment>
          ))}
        </div>
      );
    } else
    {
      return (
        <div className="flex items-center justify-center py-4">
          <span className="text-lg font-medium text-gray-500">No Evolutions Found</span>
        </div>
      );
    }
  }

  return (
    <>
      {open && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div className="fixed inset-0 backdrop-blur-sm bg-black/20"></div>
            <div className="inline-block p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
              <div className="flex justify-between gap-20 items-center mb-4">
                <h2 className="text-xl font-bold">Evolutions</h2>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                >
                  <svg
                    viewBox="0 0 512 512"
                    fill="red"
                    className='w-10 h-10'
                  >
                    <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col space-y-2">
                {renderEvolutions()}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Modal;





