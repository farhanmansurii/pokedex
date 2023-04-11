import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
export default function Pagination(props) {
  const { currentPage, setcurrentPage, pokemons, noOfPages } = props
  const offset = 20
  const startIndex = (currentPage - 1) * 20
  const endIndex = startIndex + offset
  return (
    <div className="flex items-center justify-between  bg-white px-4 w-10/12 mx-auto py-10  sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{startIndex + 1}</span> to <span className="font-medium">{endIndex < pokemons.length ? endIndex + 1 : pokemons.length}</span> of{' '}
            <span className="font-medium">{pokemons.length}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md " aria-label="Pagination">
            {<div onClick={() => { currentPage !== 1 && setcurrentPage(currentPage - 1) }}
              className={` ${currentPage === 1 && "opacity-10 "} relative inline-flex items-center rounded-full px-2 py-2 text-gray-500  hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </div>}
            {
              Array.from({ length: noOfPages }).map((e, i) =>
                <button
                  onClick={() => setcurrentPage(i + 1)}
                  aria-current="page"
                  className={`relative z-10 inline-flex  items-center rounded-full ${i + 1 === currentPage ? `bg-red-600` : ' text-gray-500'} h-9 w-9 mx-2 flex justify-center text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  {i + 1}
                </button>)}


            <div
              onClick={() => { currentPage !== noOfPages && setcurrentPage(currentPage + 1) }}
              className={` ${currentPage === noOfPages && "opacity-10 border-0"} relative inline-flex items-center rounded-full px-2 py-2 text-gray-400  hover:bg-gray-200 focus:z-20 focus:outline-offset-0`}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
