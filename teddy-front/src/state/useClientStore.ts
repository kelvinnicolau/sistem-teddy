import { create } from "zustand";

interface Client {
  id: string;
  name: string;
}

interface ClientState {
  clients: Client[];
  addClient: (client: Client) => void;
}

export const useClientStore = create<ClientState>((set) => ({
  clients: [],
  addClient: (client) => set((state) => ({ clients: [...state.clients, client] })),
}));
