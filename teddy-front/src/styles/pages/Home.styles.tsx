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
