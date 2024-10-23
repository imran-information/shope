import './App.css'
import Carts from './components/Carts/Carts'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import { useState } from "react";

function App() {
  const [toggleComponent, setToggleComponent] = useState({
    isActive: 'cart',
    active: true
  })

  const [carts, setCarts] = useState([])

  const handleAddToCats = () => {
    console.log('btn clicked');

  }

  const handleComponent = component => {
    if (component == 'cart') {
      setToggleComponent({
        isActive: 'cart',
        active: true
      })
    }
    else {
      setToggleComponent({
        isActive: 'about',
        active: false
      })
    }

  }


  return (
    <>

      <Header></Header>
      <main className='flex w-10/12 mx-auto my-5'>
        <Products handleAddToCats={handleAddToCats}></Products>
        <Carts handleComponent={handleComponent} toggleComponent={toggleComponent}> </Carts>
      </main>
    </>
  )

}


export default App
