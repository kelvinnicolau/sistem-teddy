import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Title, FilterContainer, Button, Form, Input } from "../styles/pages/Clientes.styles";
import ClientCard from "../components/ClientCard";
import Modal from "../components/Modal";
import Pagination from "../components/Pagination";

interface Client {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
}

interface ApiResponse {
  clients: Client[];
  totalPages: number;
  currentPage: number;
}

const ClientPage: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [clientsPerPage, setClientsPerPage] = useState(4);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [formData, setFormData] = useState({ name: "", salary: "", companyValuation: "" });

  const fetchClients = async (page: number, limit: number) => {
    try {
      const response = await axios.get<ApiResponse>(`/api/users?page=${page + 1}&limit=${limit}`);
      setClients(response.data.clients);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.currentPage - 1);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  useEffect(() => {
    fetchClients(currentPage, clientsPerPage);
  }, [currentPage, clientsPerPage]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const openEditModal = (client: Client) => {
    setEditingClient(client);
    setFormData({
      name: client.name,
      salary: client.salary.toString(),
      companyValuation: client.companyValuation.toString(),
    });
    setIsModalOpen(true);
  };

  const handleAddOrEditClient = async () => {
    try {
      if (editingClient) {
        // Editar cliente
        await axios.patch(`/api/users/${editingClient.id}`, {
          name: formData.name,
          salary: Number(formData.salary),
          companyValuation: Number(formData.companyValuation),
        });
      } else {
        // Adicionar cliente
        await axios.post("/api/users", {
          name: formData.name,
          salary: Number(formData.salary),
          companyValuation: Number(formData.companyValuation),
        });
      }
      
      // Resetando o estado
      resetForm();
      fetchClients(currentPage, clientsPerPage);
    } catch (error) {
      console.error("Erro ao adicionar ou editar cliente:", error);
    }
  };

  const resetForm = () => {
    setEditingClient(null);
    setFormData({ name: "", salary: "", companyValuation: "" });
    setIsModalOpen(false);
  };

  const handleDeleteClient = async () => {
    if (selectedClient) {
      try {
        await axios.delete(`/api/users/${selectedClient.id}`);
        setDeleteModalOpen(false);
        fetchClients(currentPage, clientsPerPage);
      } catch (error) {
        console.error("Erro ao deletar cliente:", error);
      }
    }
  };

  return (
    <Container>
      <div className="header">
        <Title>{clients.length} clientes encontrados</Title>
        <Button onClick={() => setIsModalOpen(true)}>Adicionar Cliente</Button>
      </div>

      <FilterContainer>
        <label>Clientes por página:</label>
        <select
          value={clientsPerPage}
          onChange={(e) => {
            setClientsPerPage(Number(e.target.value));
            setCurrentPage(0);
          }}
        >
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
        </select>
      </FilterContainer>

      <div className="client-cards">
        {clients.map((client) => (
          <ClientCard
            key={client.id}
            client={client}
            onEdit={openEditModal}
            onDelete={(client) => {
              setSelectedClient(client);
              setDeleteModalOpen(true);
            }}
          />
        ))}
      </div>

      <Pagination pageCount={totalPages} onPageChange={handlePageChange} />

      <Modal
        title={editingClient ? "Editar Cliente" : "Adicionar Cliente"}
        isOpen={isModalOpen}
        onClose={resetForm}
        confirmLabel={editingClient ? "Editar" : "Adicionar"}
        onConfirm={handleAddOrEditClient}
      >
        <Form onSubmit={handleAddOrEditClient}>
          <label>
            Nome:
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </label>
          <label>
            Salário:
            <Input
              type="number"
              value={formData.salary}
              onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
              required
            />
          </label>
          <label>
            Avaliação da Empresa:
            <Input
              type="number"
              value={formData.companyValuation}
              onChange={(e) => setFormData({ ...formData, companyValuation: e.target.value })}
              required
            />
          </label>
        </Form>
      </Modal>

      <Modal
        title="Excluir Cliente"
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        confirmLabel="Excluir"
        onConfirm={handleDeleteClient}
      >
        <p>
          Você está prestes a excluir o cliente: <strong>{selectedClient?.name}</strong>
        </p>
      </Modal>
    </Container>
  );
};

export default ClientPage;
