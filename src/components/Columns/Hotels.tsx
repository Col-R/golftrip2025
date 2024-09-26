import {hotels} from '../../data.ts'

const Hotels = () => {
  return (
    <div className='flex flex-col'>
    <h1 className='bg-transparent'>Hotels</h1>
      <div className=''> 
        {hotels.map((hotel) => (
          <div key={hotel.id} className="border border-slate-600 rounded-md mb-4 bg-gray-50 bg-opacity-15">
              <img src = {hotel.image} className="max-w-full h-auto object-center"></img>
              {/* Card Content */}
              <div className="p-4 flex flex-col space-y-2">
               <div className="flex items-center justify-between flex-row">
                  <h2 className="text-2xl font-semibold">{hotel.name}</h2>
                  <span className="bg-green-700 text-nowrap text-white text-sm font-semibold py-1 px-3 rounded-full">{hotel.rating} ★</span>
                </div>

                <div className='border-x-2 p-2 mx-1'>
                  <p className='font-bold'>Cole's Thoughts:</p>
                  <p className="text-md  italic ">{hotel.thoughts}</p>
                </div>
              

                <p className="text-lg font-bold">Price - ${hotel.price} / night</p>
                <p className='text-sm font-medium'>{hotel.address}</p>
                <a
                  href={hotel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-700 text-white font-bold 
                  py-2 px-4 rounded max-w-fit mx-auto
                   hover:bg-green-600 transition-colors duration-300">View</a>

              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hotels