// import {Course} from './../data.ts'
import {courses} from '../../data.ts'

interface Course {
  id: number;
  name: string
  image: string;
  price: number;
  reservationInfo: string;
  awesomeLevel: number;
  address: string;
}

const Courses = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='bg-transparent'>Courses</h1>
        <div className='bg-slate-100 bg-opacity-10'>
          {courses.map((course) => (
            <div key={course.id} className="border p-4 rounded-md mb-4">
              
              <img src = {course.image} className="w-full h-auto rounded"></img>
              <h3 className="text-lg font-bold">{course.name}</h3>
              <p className="text-sm">{course.price}</p>
              <p className="text-sm">{course.reservationInfo}</p>
              <p className="text-sm">{course.awesomeLevel}</p>
              <p className="text-sm">{course.address}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Courses