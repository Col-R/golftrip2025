// import {Course} from './../data.ts'
import {courses} from '../../data.ts'



const Courses = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='bg-transparent'>Courses</h1>
        <div className=''>
          {courses.map((course) => (
            <div key={course.id} className="border border-slate-600 rounded-md mb-4 bg-gray-50 bg-opacity-15">
                <img src = {course.image} className="max-w-full h-auto object-center 
                transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30
                rounded"></img>
              {/* Card content */}
              <div className='p-4 flex flex-col space-y-2'>

                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">{course.name}</h2>
                  <span className="bg-green-700 text-white text-sm font-semibold py-1 px-3 rounded-full">{course.awesomeLevel} ★</span>
                </div>

                <p className="text-md mx-1 italic border-x-2 p-2">{course.description}</p>
                <p className="text-lg font-bold">Price - ${course.price}</p>
                <p className='text-sm font-medium'>{course.reservationInfo}</p>
                <a
                  href={course.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-700 text-white font-bold 
                  py-2 px-4 rounded max-w-fit mx-auto
                   hover:bg-green-600 transition-colors duration-300"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Courses