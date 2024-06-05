// src/email/EmailTemplate.tsx
import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
}) => (
  <div>
    <h1>New Message from {firstName}</h1>
    <p>Email: {email}</p>
    <p>Message:</p>
    <p>{message}</p>
  </div>
);
