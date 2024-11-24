import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;

  label {
    margin-right: 10px;
  }

  select {
    padding: 5px;
    font-size: 14px;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 23%;
  margin: 10px;
  display: inline-block;
  vertical-align: top;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardBody = styled.div`
  padding: 20px;

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #f8f8f8;
  border-top: 1px solid #ddd;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      color: #ec6724;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .pagination {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    .active {
      font-weight: bold;
      color: #ec6724;
    }

    li {
      margin: 0 5px;
      cursor: pointer;
    }
  }
`;
