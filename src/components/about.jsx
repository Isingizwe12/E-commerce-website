import React from 'react';
import aboutHero from '../assets/images/aboutI.jpg';
import teamImage from '../assets/images/team.jpg';
import skincareImage from '../assets/images/about.jpg';

function About() {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-rose-100 min-h-screen style={{ fontFamily: 'Poppins, sans-serif' ">

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-rose-800 mb-6">
            About Glow & Glam
          </h1>
          <p className="text-rose-700 text-lg md:text-xl mb-6">
            At AllyShop, we believe in empowering every individual to embrace their beauty. 
            From skincare to makeup, our products are curated to enhance confidence and self-care.
          </p>
          <button className="bg-rose-600 text-white px-6 py-3 rounded-xl shadow-lg font-semibold hover:bg-rose-500 transition">
            Discover More
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={aboutHero}
            alt="About Glow & Glam"
            className="rounded-2xl shadow-2xl w-full max-w-sm object-cover transform hover:scale-105 transition duration-500"
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src={skincareImage}
            alt="Our Story"
            className="rounded-2xl shadow-2xl w-full max-w-sm object-cover transform hover:scale-105 transition duration-500"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-rose-800 mb-4">Our Story</h2>
          <p className="text-rose-700 text-lg md:text-xl">
            Founded with a passion for beauty and wellness, AllyShop started as a small collection 
            of skincare essentials. Today, we are a trusted beauty brand delivering premium products 
            that help people feel confident and radiant every day.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-rose-800 mb-12">Our Mission & Vision</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div className="md:w-1/2 bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-rose-700 mb-4">Our Mission</h3>
            <p className="text-rose-600 text-lg">
              Empower individuals to feel confident and radiant by providing luxurious beauty 
              products and promoting self-love and wellness.
            </p>
          </div>
          <div className="md:w-1/2 bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-rose-700 mb-4">Our Vision</h3>
            <p className="text-rose-600 text-lg">
              To be a leading global beauty brand recognized for innovation, elegance, and a 
              commitment to helping everyone embrace their unique beauty.
            </p>
          </div>
        </div>
      </section>

     

      {/* Team / Optional */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-rose-800 mb-4">Meet Our Team</h2>
          <p className="text-rose-700 text-lg md:text-xl">
            Our team of beauty experts and skincare enthusiasts are passionate about helping you 
            discover your glow. Together, we create products and experiences that elevate your self-care routine.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={teamImage}
            alt="Our Team"
            className="rounded-2xl shadow-2xl w-full max-w-sm object-cover transform hover:scale-105 transition duration-500"
          />
        </div>
      </section>

    </div>
  );
}

export default About;
