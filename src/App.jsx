import { useState } from 'react'
import Data from './components/Data'

function App() {
  
  const [categories, setCategories ] = useState([])

  return (
    <>
    <div className="ms-5 mt-5 me-5">
      <h1 className='fw-lighter'>
      Sheikah Slate	
      </h1>
      <p className='fw-lighter'>Available Categories: monsters, equipment, materials, treasure</p>
      <Data 
      categories={categories}
      setCategories={setCategories}/>
    </div> 
    </>
  )
}

export default App
