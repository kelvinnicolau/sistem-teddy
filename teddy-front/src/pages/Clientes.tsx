import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { Card, CardBody, CardFooter, Container, Title, FilterContainer } from "../styles/pages/Clientes.styles"; // Adapte conforme seu estilo

interface Client {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
}

const ClientPage: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [clientsPerPage, setClientsPerPage] = useState(4); // Número de clientes por página

  // Função para obter os clientes da API
  const fetchClients = async () => {
    try {
      const response = await axios.get("https://boasorte.teddybackoffice.com.br/users?page=2&limit=16");
      setClients(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes", error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  // Função para gerenciar a mudança de página
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  // Calcular os clientes a serem exibidos na página atual
  const indexOfLastClient = (currentPage + 1) * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);

  return (
    <Container>
      <Title>{clients.length} clientes encontrados</Title>

      {/* Filtro de número de clientes por página */}
      <FilterContainer>
        <label>Clientes por página:</label>
        <select
          value={clientsPerPage}
          onChange={(e) => setClientsPerPage(Number(e.target.value))}
        >
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
        </select>
      </FilterContainer>

      <div className="client-cards">
        {currentClients.map((client) => (
          <Card key={client.id}>
            <CardBody>
              <h3>{client.name}</h3>
              <p>Salário: R${client.salary.toLocaleString()}</p>
              <p>Avaliação da empresa: R${client.companyValuation.toLocaleString()}</p>
            </CardBody>
            <CardFooter>
              <Button>+</Button>
              <Button>✏️</Button>
              <Button>🗑️</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Paginação */}
      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Próximo"}
        breakLabel={"..."}
        pageCount={Math.ceil(clients.length / clientsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </Container>
  );
};

export default ClientPage;
