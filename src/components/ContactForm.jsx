import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailjs';

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.9rem;
  margin-left: 0.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.95rem;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: #81d4fa;
    background: rgba(255, 255, 255, 0.2);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.95rem;
    min-height: 120px;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: #81d4fa;
    background: rgba(255, 255, 255, 0.2);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  background: #81d4fa;
  color: #1a237e;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  font-weight: 600;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
  }

  &:hover {
    background: #b3e5fc;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: rgba(129, 212, 250, 0.5);
    cursor: not-allowed;
    transform: none;
  }

  ${props => props.$isLoading && `
    color: transparent;
    &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      border: 2px solid #1a237e;
      border-radius: 50%;
      border-top-color: transparent;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `}
`;

const Notification = styled.div`
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  animation: slideIn 0.3s ease;
  
  ${props => props.type === 'success' && `
    background: rgba(76, 175, 80, 0.2);
    border: 1px solid #4CAF50;
    color: #A5D6A7;
  `}
  
  ${props => props.type === 'error' && `
    background: rgba(244, 67, 54, 0.2);
    border: 1px solid #F44336;
    color: #EF9A9A;
  `}

  @keyframes slideIn {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification(null);
    
    try {
      // Log the form data and configuration
      console.log('Form submission attempt with:', {
        config: {
          serviceId: emailConfig.serviceId,
          templateId: emailConfig.templateId,
          publicKey: emailConfig.publicKey.substring(0, 5) + '...' // Only log first 5 chars for security
        },
        formData: {
          name: formData.name,
          email: formData.email,
          message: formData.message.substring(0, 20) + '...' // Only log start of message
        }
      });

      const result = await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        form.current,
        emailConfig.publicKey
      );

      console.log('Email sent successfully:', result);
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      setNotification({
        type: 'success',
        message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.'
      });
    } catch (error) {
      console.error('Error details:', {
        message: error.message,
        text: error.text,
        status: error.status,
        name: error.name,
        fullError: error
      });
      
      let errorMessage = 'Mesajınız gönderilemedi. ';
      
      // Add specific error information
      if (error.text) {
        if (error.text.includes('template ID not found')) {
          errorMessage += 'E-posta şablonu bulunamadı. ';
        } else if (error.text.includes('service ID not found')) {
          errorMessage += 'E-posta servisi bulunamadı. ';
        } else if (error.text.includes('public key is invalid')) {
          errorMessage += 'API anahtarı geçersiz. ';
        }
      }
      
      errorMessage += 'Lütfen daha sonra tekrar deneyin.';
      
      setNotification({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <FormContainer>
      {notification && (
        <Notification type={notification.type}>
          {notification.message}
        </Notification>
      )}
      <Form ref={form} onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="name">Ad Soyad</Label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Adınız ve soyadınız"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="email">E-posta</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="E-posta adresiniz"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="message">Mesaj</Label>
          <TextArea
            id="message"
            name="message"
            placeholder="Mesajınızı buraya yazın..."
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </InputGroup>

        <Button type="submit" disabled={isSubmitting} $isLoading={isSubmitting}>
          {isSubmitting ? '' : 'Gönder'}
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm; 