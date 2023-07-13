import React from 'react';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center mt-10">
        <img
          src="/path/to/your/photo.jpg"
          alt="Votre nom"
          className="rounded-full h-32 w-32 mb-4"
        />
        <h1 className="text-2xl font-bold">Votre nom</h1>
        <p className="text-lg text-gray-600 mb-8">Brève présentation de vous et de vos compétences</p>
      </div>
    </div>
  );
};

export default HomePage;
