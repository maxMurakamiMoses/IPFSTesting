// src/components/ContactForm.tsx
"use client"
import { useState } from 'react';

interface FormData {
  firstName: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label className="text-black">
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="text-black"
        />
      </label>
      <label className="text-black">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="text-black"
        />
      </label>
      <label className="text-black">
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="text-black"
        />
      </label>
      <button type="submit" className="text-black">Send</button>
    </form>
  );
};

export default ContactForm;
