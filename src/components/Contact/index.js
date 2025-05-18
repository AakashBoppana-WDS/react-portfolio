import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Snackbar } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactSelect = styled.select`
  flex: 1;
  background-color: #1b2336; /* Dark background */
  border: 1px solid #4a4e69; /* Subtle border */
  outline: none;
  font-size: 18px;
  color: #ffffff; /* Light text */
  border-radius: 12px;
  padding: 12px 16px;
  appearance: none;
  cursor: pointer;

  /* Custom dropdown arrow */
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><polygon points="0,0 20,0 10,10" fill="%23ffffff"/></svg>') no-repeat right 12px center;
  background-size: 12px;

  &:hover {
    border-color: #845ef7;
  }

  &:focus {
    border-color: #a29bfe;
  }

  /* Style the dropdown options */
  option {
    background-color: #1b2336;
    color: #ffffff;
    padding: 12px;
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const NewContactForm = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    formData.append("access_key", "31074573-c5a6-461a-b8c8-e7e787d5a7f1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setMessage('Thank You! We will contact you soon.');
      setOpen(true);
      form.current.reset();
    } else {
      setMessage('There was an error submitting the form.');
      setOpen(true);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact Us</Title>
        <Desc>We'd love to hear from you! Please fill out the form below.</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Get in Touch 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Mobile Number" name="mobile_number" required />
          <ContactSelect name="service" required>
            <option value="" disabled selected>Select Service</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Website Development">Website Development</option>
            <option value="Website Design">Website Design</option>
            <option value="Logo Design">Logo Design</option>
            <option value="Graphic Designing">Graphic Designing</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="SEO">Search Engine Optimization</option>
          </ContactSelect>
          <ContactInputMessage placeholder="Message" rows="4" name="message" required />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message={message}
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default NewContactForm;
