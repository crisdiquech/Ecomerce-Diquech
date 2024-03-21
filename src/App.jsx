
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListConteiner'
import CountControler from './components/CountControler'



function App() {
  
  return (
    <>
      <div>
        
        <NavBar/>
      
      </div>
      <div>
        <ItemListConteiner saludo = "Bienvenido a la tienda de ropa Online"/>
    
      </div>
      

    </>
  )
}

export default App

