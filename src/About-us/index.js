import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 20px;
  background-color: #1b2336; /* Dark Theme Background */
  color: #ffffff; /* Light Text */
`;

const Wrapper = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 600;
  color: #ffffff; /* White Text */
  text-transform: uppercase;
  letter-spacing: 2px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: #a29bfe; /* Soft Purple Highlight */
`;

const Description = styled.p`
  font-size: 18px;
  color: #dcdde1; /* Lighter Gray for Readability */
  line-height: 1.6;
  margin-bottom: 20px;
`;

const HighlightText = styled.span`
  color: #845ef7; /* Accent Color */
  font-weight: 600;
`;

const AboutButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  color: #ffffff;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  border-radius: 12px;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(225deg, hsla(271, 90%, 60%, 1) 0%, hsla(294, 90%, 60%, 1) 100%);
    transform: translateY(-3px);
  }
`;

const AboutUs = () => {
  return (
    <Container>
      <Wrapper>
        <Title>About-us</Title>
        <Subtitle>Empowering Brands with Digital Excellence 🚀</Subtitle>
        <Description>
          At <HighlightText>Our Company</HighlightText>, we are passionate about helping businesses thrive in the digital world.
          From **SEO-powered** strategies to **cutting-edge mobile app development**, we bring innovative solutions that drive real results.
        </Description>
        <Description>
          Our services include <HighlightText>Digital Marketing</HighlightText>, 
          <HighlightText> SEO Optimization</HighlightText>, 
          <HighlightText> Android & iOS App Development</HighlightText>, and 
          <HighlightText> Custom Web Solutions</HighlightText>. 
          We ensure that **your brand stands out** in the digital landscape.
        </Description>
        <Description>
          Whether you're looking to rank higher on search engines, build a dynamic **mobile app**, or launch a powerful **marketing campaign**, 
          we have the expertise to make it happen.
        </Description>
        <AboutButton href="/contact">Let's Get Started</AboutButton>
      </Wrapper>
    </Container>
  );
};

export default About-us;
