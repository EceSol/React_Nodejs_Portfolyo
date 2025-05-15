import { init } from '@emailjs/browser';

// EmailJS configuration
export const emailConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,      // Your Email Service ID
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,    // Your Email Template ID
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,   // Your Public Key
};

// Initialize EmailJS with your public key
try {
  init(emailConfig.publicKey);
  console.log('EmailJS initialized successfully');
} catch (error) {
  console.error("Failed to initialize EmailJS:", error);
} 