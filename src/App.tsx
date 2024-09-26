import './App.css'

import Header from './components/Header'
import Summary from './components/Summary'
{/* <Background />
<Courses />
<Hotels />
<Cars />
<Dates />  */}

function App() {

  return (
    <div className='h-screen relative bg-cover bg-center bg-fixed' style={{ backgroundImage: 'url(/bg.webp)' }}>
      <div className='absolute inset-0 bg-black/70'>
      <Header />
      <Summary />
      </div>
    </div>
  )
}

export default App
