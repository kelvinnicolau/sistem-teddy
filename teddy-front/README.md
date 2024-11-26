
# Sistem Teddy

Este é um projeto de front-end. O objetivo é implementar um sistema para cadastro, listagem, atualização e visualização de clientes. A aplicação é responsiva, utiliza TypeScript e foi desenvolvida com React + Vite.

## **Características**
- Tela inicial para entrada do nome do usuário e redirecionamento para a lista de clientes.
- Funcionalidades de CRUD (Cadastrar, Ler, Atualizar e Excluir) para clientes.
- Estrutura modular utilizando micro-frontends.
- Responsividade garantida para dispositivos móveis.
- Containerização com Docker.
- Deploy automatizado na Vercel.

---

## **Tecnologias Utilizadas**
- **Framework:** React + Vite
- **Linguagem:** TypeScript
- **Gerenciamento de Estado:** Zustand
- **Estilização:** Styled-components
- **Comunicação com API:** Axios
- **Testes:** React Testing Library, Cypress
- **Containerização:** Docker

---

## **Instalação e Execução Local**
### **1. Pré-requisitos**
- Node.js (v16 ou superior)
- Docker
- Gerenciador de pacotes `npm` ou `yarn`

### **2. Clonar o repositório**
```bash
git clone https://github.com/seu-usuario/sistem-teddy.git
cd sistem-teddy
```

### **3. Instalar as dependências**
```bash
npm install
```

### **4. Rodar a aplicação em ambiente de desenvolvimento**
```bash
npm run dev
```

A aplicação estará disponível em: [http://localhost:5173](http://localhost:5173).

---

## **Containerização com Docker**
### **1. Build da imagem Docker**
Certifique-se de que o Docker está instalado e em execução.

```bash
docker build -t sistem-teddy .
```

### **2. Executar o container**
```bash
docker run -d -p 3000:80 sistem-teddy
```

A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000).

---

## **Scripts Disponíveis**
- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera a build de produção.
- `npm run preview`: Visualiza a build de produção.
- `npm run test`: Executa os testes unitários.
- `npm run e2e`: Executa os testes end-to-end.

---

## **Testes**
### **1. Testes Unitários**
Os testes unitários foram desenvolvidos utilizando a biblioteca `@testing-library/react`. Para rodar os testes:
```bash
npm run test
```

### **2. Testes End-to-End**
Os testes e2e foram desenvolvidos utilizando Cypress. Para rodar:
```bash
npm run e2e
```

---

## **Deploy**
A aplicação está configurada para ser implantada automaticamente na Vercel. Certifique-se de que o repositório está conectado ao painel da Vercel e que o comando `npm run build` funciona corretamente.

---

## **Contato**
- **Desenvolvedor:** Kelvin Nicolau
- **LinkedIn:** [Seu LinkedIn](https://www.linkedin.com/in/kelvin-nicolau-9269891bb/)
- **GitHub:** [Seu GitHub](https://github.com/kelvinnicolau)
