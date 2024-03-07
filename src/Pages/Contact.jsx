import React from 'react';
import FormContact from '../Components/Formcontact';


const Contact = () => {
  return (
    <div>
      <h1>Me contacter</h1>
      <p>Pour toute information, ou prise de rendez-vous, n'hésitez pas à me contacter !</p>
      <h3>Téléphone</h3>
      <p>06 20 08 53 20</p>
      <h3>Adresse mail</h3>
      <p>myriam.baptiste@gmail.com</p>
      <h3>Formulaire de contact</h3>
      <FormContact></FormContact>
      <h3>Venir au cabinet</h3>
      <p>12 avenue Marie Reynoard</p>
      <p>38100 GRENOBLE</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.0465183119595!2d5.7256713761433975!3d45.16590787107059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af4c7f75aa223%3A0xb1c5ddd5a4a5b567!2s12%20Av.%20Marie%20Reynoard%2C%2038100%20Grenoble!5e0!3m2!1sfr!2sfr!4v1709830782799!5m2!1sfr!2sfr" width="400" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

  )
}

export default Contact;
