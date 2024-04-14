
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListContainer/ItemListConteiner'
import CountControler from './components/CountControler'
import ItemDetailContainer from './components/ItemDatailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  
  return (
    <>
      <BrowserRouter>
     
        
        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListConteiner/>}/>
          <Route path="/category/:idCategory" element={<ItemListConteiner/>}/>
          
          
        </Routes>
        
      
    
      
      
      </BrowserRouter>
    </>
  )
}

export default App

