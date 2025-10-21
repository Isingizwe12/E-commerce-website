import './App.css'
import Navbar from './components/navbar'
import Homepage from './components/homepage'
import About from './components/about'
import Products from './components/products'
import Cart from './components/cart'
import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
 const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState("");
   // Add to Cart Function
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
     showNotification(`${product.name} added to cart`);
  };

    // Remove from Cart
  const handleRemoveFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  // Notification logic
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification("");
    }, 2500); // hides after 2.5 seconds
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />
        {/* Notification Toast */}
      {notification && (
        <div className="fixed top-6 right-6 bg-rose-600 text-white px-5 py-3 rounded-lg shadow-lg animate-fade-in-out z-50">
          {notification}
        </div>
      )}
      <Routes>
        <Route path='/'  element={<Homepage onAddToCart={handleAddToCart}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='products' element={<Products onAddToCart={handleAddToCart}/>}/>
        <Route path='/cart' element={<Cart cartItems={cartItems} onRemove={handleRemoveFromCart} />}/>


      </Routes>
      
    </Router>
  )
}

export default App
