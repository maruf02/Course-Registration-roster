import './App.css'
import Header from './components/header/Header'

import Cards from './components/Cards/Cards'

function App() {
  

  return (
    <>
      
      <div className='bg-white h-[3000px]'>
        <div className='container mx-auto'>
          <Header></Header>
          <hr className='w-11/12 mx-auto my-5' />
          <Cards></Cards>
        </div>
      </div>
      
      
    </>
  )
}

export default App
