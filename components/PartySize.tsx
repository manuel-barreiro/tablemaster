

export default function PartySize() {

  const partyNumbers = [1,2,3,4]

  return(
    <div className="flex flex-col items-center mb-10">
      <h1 className="text-red-600 text-xl font-normal">Select the number of</h1>
      <h1 className="text-red-600 text-xl font-semibold mb-10">diners</h1>

      <div className="flex flex-col gap-3 items-center w-full">

        <div className="flex gap-2">
          {partyNumbers.map((number) => {
            return (
              <button 
                key={number} 
                className='bg-red-500 hover:bg-red-700 ease-in-out duration-300 text-white text-center w-16 h-16 rounded-full font-semibold text-2xl'>
                {number}
              </button>
            )
          })}
        </div>

        <div className="flex gap-2 justify-between w-full">
          <button 
            className='bg-white hover:bg-gray-300 ease-in-out duration-300 text-red-700 border-[1px] border-red-700 text-center w-16 h-16 rounded-full font-semibold text-2xl'>
              -
          </button>

          <button 
            className='bg-red-500 hover:bg-red-700 ease-in-out duration-300 text-white flex justify-center items-center w-16 h-16 px-16 rounded-full font-semibold text-2xl'>
            5
          </button>

          <button 
            className='bg-white hover:bg-gray-300 ease-in-out duration-300 text-red-700 border-[1px] border-red-700 text-center w-16 h-16 rounded-full font-semibold text-2xl'>
              +
          </button>

        </div>
      </div>

      

    </div>
  )
}