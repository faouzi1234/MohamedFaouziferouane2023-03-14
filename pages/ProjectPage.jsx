import React from 'react';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';

const ProjectPage = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Nom du Projet</h2>
        <p className="text-lg text-gray-600 mb-8">
          Description claire du projet.
        </p>
        <h3 className="text-lg font-bold mb-2">Technologies utilisées :</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>React</li>
          <li>Bootstrap</li>
          <li>Sass</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;
