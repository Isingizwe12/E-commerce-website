import './App.css'
import Navbar from './components/navbar'
import Homepage from './components/homepage'
import About from './components/about'
import Products from './components/products'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='products' element={<Products/>}/>


      </Routes>
      
    </Router>
  )
}

export default App
