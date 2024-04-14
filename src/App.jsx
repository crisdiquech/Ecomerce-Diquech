
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListContainer/ItemListConteiner'
import CountControler from './components/CountControler'
import ItemDetailContainer from './components/ItemDatailContainer/ItemDetailContainer'


function App() {
  
  return (
    <>
      <div>
        
        <NavBar/>
      
      </div>
      <div>
        <ItemDetailContainer/>
        <ItemListConteiner saludo = "Bienvenido a la tienda de ropa Online"/>
    
      </div>
      

    </>
  )
}

export default App

