import React, { useState } from 'react';
import styled from 'styled-components';

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
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  margin-left: 0.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
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
    border-color: #4fc3f7;
    background: rgba(255, 255, 255, 0.15);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
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
    border-color: #4fc3f7;
    background: rgba(255, 255, 255, 0.15);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  background: #4fc3f7;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  font-weight: 600;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
  }

  &:hover {
    background: #29b6f6;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: rgba(79, 195, 247, 0.5);
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
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
      <Form onSubmit={handleSubmit}>
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
          />
        </InputGroup>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm; 