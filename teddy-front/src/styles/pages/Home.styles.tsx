import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #000000;
  margin-bottom: 20px;
  font-weight: 400;
  text-align: center; 

  @media (max-width: 768px) {
    font-size: 28px; 
  }

  @media (max-width: 480px) {
    font-size: 24px; 
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 521px; 

  @media (max-width: 480px) {
    gap: 15px; 
  }
`;

export const Input = styled.input`
  padding: 16px 20px;
  font-size: 24px; 
  border: 2px solid #d9d9d9;
  border-radius: 4px;
  background-color: transparent;
  font-weight: 400;
  color: #000000;

  &::placeholder {
    color: #aaa;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 12px 15px;
  }
`;

export const Button = styled.button`
  padding: 15px;
  font-size: 24px;
  color: white;
  background-color: #ec6724;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d55a1e;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 12px; 
  }
`;
