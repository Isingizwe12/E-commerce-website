import React from 'react';
import beautyImage from '../assets/images/beauty.jpg';
import Products from './products';

function Homepage({onAddToCart}) {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-rose-100 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center md:justify-between">
        
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide text-rose-800">
            Glow & Glam
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            Discover the finest beauty products to pamper yourself. Skincare, makeup, and self-care essentials delivered to your door.
          </p>
          <button className="bg-rose-600 text-white px-6 py-3 rounded-xl shadow-lg font-semibold hover:bg-rose-500 transition">
            Shop Now
          </button>
        </div>

        {/* Hero Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          <div className="relative">
            {/* Optional overlay for soft glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent rounded-xl"></div>

            <img
              src={beautyImage}
              alt="Beauty Hero"
              className="rounded-2xl shadow-2xl w-full max-w-sm object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
 
      </section>
       {/* Core Values / Why Choose Us */}
            <section className="container bg-white mx-auto px-4 py-20 text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-rose-800 mb-12">Why Choose Us</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
                  <h3 className="text-2xl font-semibold text-rose-700 mb-4">Premium Quality</h3>
                  <p className="text-rose-600 text-lg">
                    We curate only the finest beauty products to ensure maximum satisfaction and care.
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
                  <h3 className="text-2xl font-semibold text-rose-700 mb-4">Trusted Brand</h3>
                  <p className="text-rose-600 text-lg">
                    Years of experience and happy customers make us a beauty brand you can rely on.
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
                  <h3 className="text-2xl font-semibold text-rose-700 mb-4">Self-Care Focused</h3>
                  <p className="text-rose-600 text-lg">
                    We promote self-love and wellness through our products and beauty tips.
                  </p>
                </div>
              </div>
            </section>
      {/* Featured Products Section */}
      <Products onAddToCart={onAddToCart} />
    </div>
  );
}

export default Homepage;
