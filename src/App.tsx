import './App.css'

import Header from './components/Header'
import Summary from './components/Summary'
import Body from './components/Body'
{/* <Background />
<Courses />
<Hotels />
<Cars />
<Dates />  */}

function App() {

  return (
    <div className='relative h-screen overflow-hidden'>
      <div id='background'>
        <div className='fixed inset-0 bg-black opacity-50'></div>
        <div className="relative z-10 h-full overflow-y-scroll p-8">
        <Header />
        <Summary />
        <Body />
        </div>
      </div>
    </div>
  )
}

export default App
