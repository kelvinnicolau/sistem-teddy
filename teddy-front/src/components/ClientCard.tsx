import React from "react";
import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";
import { Card, CardBody, CardFooter } from "../styles/pages/Clientes.styles";

interface Client {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
}

interface ClientCardProps {
  client: Client;
  onEdit: (client: Client) => void;
  onDelete: (client: Client) => void;
}

const ClientCard: React.FC<ClientCardProps> = ({ client, onEdit, onDelete }) => {
  return (
    <Card>
      <CardBody>
        <h3>{client.name}</h3>
        <p>Salário: R${client.salary.toLocaleString()}</p>
        <p>Avaliação da empresa: R${client.companyValuation.toLocaleString()}</p>
      </CardBody>
      <CardFooter>
        <button>
          <FaPlus />
        </button>
        <button onClick={() => onEdit(client)}>
          <FaPencilAlt />
        </button>
        <button onClick={() => onDelete(client)}>
          <FaTrash />
        </button>
      </CardFooter>
    </Card>
  );
};

export default ClientCard;
