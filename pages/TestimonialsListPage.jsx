import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';

const TestimonialsListPage = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Fonction pour récupérer les témoignages depuis une source de données (par ex. API)
  const fetchTestimonials = () => {
    // Logique pour récupérer les témoignages depuis une source de données
    const fetchedTestimonials = []; // Remplacez ceci par vos témoignages réels
    setTestimonials(fetchedTestimonials);
  };

  // Utilisez useEffect pour récupérer les témoignages au chargement de la page
  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Liste des témoignages</h2>
        {testimonials.length > 0 ? (
          <ul>
            {testimonials.map((testimonial) => (
              <li key={testimonial.id}>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.message}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun témoignage disponible pour le moment.</p>
        )}
        <Link to="/ajouter-temoignage" className="btn btn-primary mt-4">
          Ajouter un témoignage
        </Link>
      </div>
    </div>
  );
};

export default TestimonialsListPage;
