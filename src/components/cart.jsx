import React from "react";

function Cart({ cartItems, onRemove }) {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-rose-100 min-h-screen py-16 px-6 md:px-20" style={{ fontFamily: "Poppins, sans-serif" }}>
      <h1 className="text-4xl font-bold text-center text-rose-700 mb-10">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-5 text-center">
              <img src={item.image} alt={item.name} className="w-full h-56 object-cover rounded-lg mb-3" />
              <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
              <p className="text-rose-600 mb-3">{item.price}</p>
              <button
                onClick={() => onRemove(index)}
                className="bg-rose-600 text-white px-5 py-2 rounded-full hover:bg-rose-500 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
