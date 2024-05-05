
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListContainer/ItemListConteiner'
import CountControler from './components/CountControler'
import ItemDetailContainer from './components/ItemDatailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {CartProvider} from "./context/CartContext"
import Cart from './components/Cart/Cart'


function App() {



  
  
  return (
    <>
      <BrowserRouter>
      <CartProvider>
     
        
        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListConteiner/>}/>
          <Route path="/category/:idCategory" element={<ItemListConteiner/>}/>
          <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
          <Route path='/cart' element ={<Cart/>} />
        </Routes>
        </CartProvider>
      
    
       
      
      </BrowserRouter>
    </>
  );
}

export default App

