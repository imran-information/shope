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

  const [product, setProduct] = useState([])
  const [removeProduct, setRemoveProduct] = useState([])
  const [addPrice, setAddPrice] = useState(0);


  const handleAddToCats = (p) => {
    const exist = product.find(newP => newP.id == p.id)
    if (exist) {
      alert('already added ')
    }
    else {
      const newProduct = [...product, p]
      setProduct(newProduct)
      setAddPrice(addPrice + p.price)
    }
  }


  const handleRemoveToCats = (prouct) => {
    const remove = product.filter(mId => mId.id !== prouct.id)
    setProduct(remove)
    setRemoveProduct(prouct)
    setAddPrice(addPrice - prouct.price)

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

      <Header addPrice={addPrice} product={product}></Header>
      <main className='flex w-10/12 mx-auto my-5'>
        <Products handleAddToCats={handleAddToCats}></Products>
        <Carts removeProduct={removeProduct} handleRemoveToCats={handleRemoveToCats} product={product} handleComponent={handleComponent} toggleComponent={toggleComponent}> </Carts>
      </main>
    </>
  )

}


export default App
