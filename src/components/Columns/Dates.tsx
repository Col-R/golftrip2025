import {dates} from '../../data.ts'

const Dates = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col justify-between'>
        <h1 className='bg-transparent'>Dates</h1>
      </div>
      <div className='overflow-auto max-h-[600px]'> 

        <img className='bg-gray-100 bg-opacity-90 rounded-lg max-w-full items-center mb-4 border border-slate-600 mx-auto' src='https://png.pngtree.com/png-vector/20231228/ourmid/pngtree-2025-february-monthly-calendar-vector-png-image_11384767.png'></img>

        {dates.map((date) => (
          <div key={date.id} className="border border-slate-600 rounded-md mb-4 bg-gray-50 bg-opacity-15">
        
            <div className="p-4 flex flex-col space-y-2">
              <div className="flex flex-col">
                <h2 className="text-2xl font-semibold">
                  {Math.floor((new Date(date.endDate).getTime() - new Date(date.startDate).getTime()) / (1000 * 60 * 60 * 24))} nights
                </h2>
                <p className="text-md font-medium">{date.startDate.toDateString()} - {date.endDate.toDateString()}</p>
                
              </div>
              
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Dates