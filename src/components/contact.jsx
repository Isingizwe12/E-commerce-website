import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-100 py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-rose-600 mb-12">
        Get In Touch!
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-rose-200">
          <h2 className="text-2xl font-semibold mb-6 text-rose-600">Contact Info</h2>
          <p className="mb-3"><span className="font-semibold">Email:</span> isingizwe@gmail.com</p>
          <p className="mb-3"><span className="font-semibold">Phone:</span> +250 788 123 456</p>
          <p className="mb-3"><span className="font-semibold">Address:</span> Kigali, Rwanda</p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md border border-rose-200">
          <h2 className="text-2xl font-semibold mb-6 text-rose-600">Send a Message</h2>
          <form className="space-y-4">

            <div>
              <label className="block mb-1 font-medium">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                placeholder="Type your message here"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 h-32 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-rose-600 w-full py-3 rounded-lg text-white font-semibold hover:bg-rose-500 transition"
            >
              Submit
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
