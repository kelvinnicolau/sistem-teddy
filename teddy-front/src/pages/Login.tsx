import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Form, Input, Button } from "../styles/pages/Login.styles";

const Login: React.FC = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (name.trim()) {
      localStorage.setItem("userName", name);
      navigate("/clientes");
    } else {
      alert("Por favor, digite o seu nome.");
    }
  };

  return (
    <Container>
      <Title>Olá, seja bem-vindo!</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Digite o seu nome:"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};

export default Login;
