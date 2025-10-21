import React from 'react'
import ProductCard from './productCard'
import cleanserImage from '../assets/images/cerave.jpg'
import tonerImage from '../assets/images/toner.jpg'
import moisturizerImage from '../assets/images/cream.jpg'
import serumImage from '../assets/images/serum.jpg'
import sunscreenImage from '../assets/images/sunscreen.jpg'
import lipstickImage from '../assets/images/lipstick.jpg'
import lipcareImage from '../assets/images/lipcare.jpg'
import foundationImage from '../assets/images/foundation.jpg'

function Products({onAddToCart}) {
    const products=[
        {id:1, name:"Cleanser", price: 29.99, image:cleanserImage},
        {id:2, name:"Toner", price:39.99, image:tonerImage},
        {id:3, name:"Moisturizer", price:49.99, image:moisturizerImage},  
        {id:4, name:"Serum", price:59.99, image:serumImage},
        {id:5, name:"SunScreen", price:69.99, image:sunscreenImage},
        {id:6, name:"Lipstick", price:79.99, image:lipstickImage},
        {id:7, name:"Lip care", price:89.99, image:lipcareImage},
        {id:8, name:"Foundation", price:99.99, image:foundationImage},
    ]
  return (
     <div
      className="bg-gradient-to-b from-pink-50 to-rose-100 min-h-screen py-16 px-6 md:px-20"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <h1 className="text-4xl font-bold text-center text-rose-700 mb-10">
        Our Products
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore our curated collection of premium beauty essentials. Designed to
        make you feel confident, radiant, and effortlessly beautiful.
      </p>

      {/* Product Grid */}
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            addToCart={() => onAddToCart(product)}
          />
        ))}
      </div>
    </div>
  )
}

export default Products
