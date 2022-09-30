import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xyyvjyzv");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div>
      <h3>NEWSLETTER</h3>
      <h1>SUSCRIBETE</h1>
      <p>Y enterate de todas las novedades</p>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Ingresa tu email
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}