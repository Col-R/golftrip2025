import { useState } from 'react'
import { cars } from '../../data.ts'
import { ChevronDown , ChevronUp } from 'lucide-react';



// sort cars by price


const Cars = () => {
  const [collapsed, setCollapsed] = useState(true)

  const clickHandler = () => {
    setCollapsed((prev) => !prev)
  }

  const [displayAscending, setDisplayAscending] = useState(true);

  const sortChanger = () => {
    setDisplayAscending((prev) => !prev);
  };

  const sortedCars = [...cars].sort((a, b) =>
    displayAscending ? a.price - b.price : b.price - a.price
  );

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-between'>
        <h1 className='bg-transparent'>Cars</h1>
        {!collapsed && <button className='font-bold' onClick={sortChanger}>Sort by Price</button>}
        {collapsed ? <ChevronDown onClick={clickHandler} className='cursor-pointer w-12 h-auto'/> : <ChevronUp onClick={clickHandler} className='cursor-pointer w-12 h-auto'/>}
      </div>
      <div className= {`overflow-auto transition-all duration-300 ease-in-out transform ${collapsed ? 'max-h-0 opacity-0' : 'max-h-[600px]'}`}> 

        {sortedCars.map((car) => (
          <div key={car.id} className="border border-slate-600 rounded-md mb-4 bg-gray-50 bg-opacity-15">
            <img src={car.image} className="max-w-full h-auto object-center mx-auto" alt={`${car.make} ${car.model}`} />
            <div className="p-4 flex flex-col space-y-2">
              <div className="flex items-center justify-between flex-row">
                <h2 className="text-2xl font-semibold">{car.make} {car.model}</h2>
                <span className="bg-green-700 text-nowrap text-white text-sm font-semibold py-1 px-3 rounded-full">{car.type}</span>
              </div>
              <p className="text-lg font-bold">Price - ${car.price} / day + gas</p>
            </div>
          </div>
        ))}

      </div>
    </div> 
  )
}

export default Cars