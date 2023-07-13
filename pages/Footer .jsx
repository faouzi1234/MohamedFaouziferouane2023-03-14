import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <div className="container mx-auto flex items-center justify-center">
        <a
          href="https://github.com/faouzi1234?tab=projects"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 mr-4"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-faouzi-ferouane-69b017235/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
