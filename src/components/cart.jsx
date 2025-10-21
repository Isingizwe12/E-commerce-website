import React from "react";

function Cart({ cartItems, removeFromCart }) {
  // Calculate total
  const total = cartItems.reduce((sum, item) => sum + Number(item.price || 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-100 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-rose-600 mb-8">
          Your Shopping Cart
        </h1>

        {/* If cart is empty */}
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">Your cart is empty 🛒</p>
        ) : (
          <>
            {/* Table Header */}
            <div className="grid grid-cols-3 font-semibold border-b pb-2 mb-3 text-gray-700">
              <span>Item</span>
              <span className="text-center">Price</span>
              <span className="text-right">Action</span>
            </div>

            {/* Cart Items */}
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 items-center border-b py-3 text-gray-700"
              >
                <span>{item.name}</span>
                <span className="text-center">${Number(item.price).toFixed(2)}</span>
                <div className="text-right">
                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-rose-600 text-white px-3 py-1 rounded hover:bg-rose-500 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Total */}
            <div className="flex justify-end items-center mt-6 text-lg font-semibold text-gray-800">
              Total: <span className="ml-2 text-rose-600">${total.toFixed(2)}</span>
            </div>

           
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
