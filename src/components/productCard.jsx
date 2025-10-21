import React from 'react'

function ProductCard({ image, name, price,onAddToCart}) {
  return (
     <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-5 text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-rose-600 font-medium mb-4">${price}</p>
        <button  onClick={onAddToCart} className="bg-rose-600 text-white px-5 py-2 rounded-full hover:bg-rose-500 transition">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
