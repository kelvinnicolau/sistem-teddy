import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h2 {
      font-size: 18px;
      font-weight: 500;
    }
  }

  .client-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    margin-top: 20px;
    padding: 0;

    li {
      margin: 0 5px;
      cursor: pointer;

      a {
        padding: 8px 12px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        text-decoration: none;
        color: #333;

        &:hover {
          background-color: #f4f4f4;
        }
      }

      &.active a {
        background-color: #ec6724;
        color: #fff;
        font-weight: bold;
      }
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardBody = styled.div`
  padding: 16px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    color: #555;
    margin-bottom: 4px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 12px;
  background-color: #f9f9f9;

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 18px;

    &:hover {
      color: #ec6724;
    }
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  label {
    font-size: 14px;
    margin-right: 10px;
  }

  select {
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;

    &:focus {
      border-color: #ec6724;
    }
  }
`;

export const Button = styled.button`
  background-color: #ec6724;
  color: #fff;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d65b1f;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 12px;
    font-size: 14px;

    input {
      width: 100%;
      padding: 10px;
      margin-top: 4px;
      border: 1px solid #ddd;
      border-radius: 4px;

      &:focus {
        border-color: #ec6724;
      }
    }
  }
`;

export const Input = styled.input`
  font-size: 14px;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    width: 48%;
  }
`;
