import React, { useState } from 'react';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';
import linkedin from "../public/images/linkedin.png";
import GitHub from "../public/images/GitHub.png";
const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici votre logique d'envoi du formulaire

    // Réinitialisez le formulaire après soumission
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto">
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        {submitted ? (
          <p className="text-green-600 mb-4">
            Votre message a été envoyé avec succès !
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Envoyer
            </button>
          </form>
        )}

<Info>
        <p>
          Vous pouvez me contacter via mon Linkedin ou bien mon GitHub voici leur liens
        </p>
      </Info>

      </div>

      <div className={styles.socialNetworks}>
            <Image className={styles.imgSocial} src={linkedin} alt="linkedin" />
          </div>

          <div className={styles.socialNetworks}>
            <Image className={styles.imgSocial} src={linkedin} alt="GitHub" />
          </div>
    </div>
    
  );
};


      

export default ContactPage;
