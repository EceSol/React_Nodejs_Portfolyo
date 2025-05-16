import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FormContainer = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(79, 195, 247, 0.2);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1rem;
  }
`;

const InputGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #81d4fa;
  font-size: 1rem;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(79, 195, 247, 0.2);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #81d4fa;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  resize: vertical;
  min-height: 120px;
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(45deg, #0d47a1, #4fc3f7);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: linear-gradient(45deg, #1565c0, #81d4fa);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Burada form gönderme işlemi yapılacak
    // Örnek: API çağrısı, email servisi vb.
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simüle edilmiş API çağrısı
      alert('Mesajınız başarıyla gönderildi!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <FormContainer
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <Form onSubmit={handleSubmit}>
        <InputGroup variants={inputVariants}>
          <Label htmlFor="name">İsim</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Adınız Soyadınız"
            required
          />
        </InputGroup>

        <InputGroup variants={inputVariants}>
          <Label htmlFor="email">E-posta</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ornek@email.com"
            required
          />
        </InputGroup>

        <InputGroup variants={inputVariants}>
          <Label htmlFor="subject">Konu</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Mesajınızın konusu"
            required
          />
        </InputGroup>

        <InputGroup variants={inputVariants}>
          <Label htmlFor="message">Mesaj</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mesajınızı buraya yazın..."
            required
          />
        </InputGroup>

        <SubmitButton
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm; 