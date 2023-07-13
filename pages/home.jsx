import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';
import TestimonialsListPage from './TestimonialsListPage';
import AddTestimonialPage from './AddTestimonialPage';
import ContactPage from './ContactPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/temoignages" component={TestimonialsListPage} />
        <Route path="/ajouter-temoignage" component={AddTestimonialPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
