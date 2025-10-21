import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-50 to-rose-100 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-gray-700">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-rose-600">AllyShop</h3>
          <p className="text-gray-600">
            Your destination for premium beauty products. Skincare, makeup, and self-care essentials delivered with love.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-rose-600">Contact Us</h4>
          <p>Email: support@allyshop.com</p>
          <p>Phone: +250 123 456 789</p>
          <p>Address: Kigali, Rwanda</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-4 text-rose-600">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-rose-500 transition"> Instagram</a>
            <a href="#" className="hover:text-rose-500 transition">Facebook</a>
            <a href="#" className="hover:text-rose-500 transition"> Twitter</a>
          </div>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} AllyShop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
