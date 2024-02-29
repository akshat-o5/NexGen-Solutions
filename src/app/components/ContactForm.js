'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xbjnolon");

  if (state.succeeded) {
    return <p className="text-green-600">Thanks for Contacing! Our team will revert back soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email Address</label>
        <input
          id="email"
          type="email" 
          name="email"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm"
        />
      </div>
      <button 
        type="submit" 
        disabled={state.submitting}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        {state.submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

export default ContactForm;
