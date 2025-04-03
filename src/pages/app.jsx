import { useState } from "react";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "../core/Client"; 
import Button from "@/components/Button";
import Form from "@/components/Form";

export default function Home() {
  const [clients, setClients] = useState([
    new Client("Marcos", 34, "2"),
    new Client("Mano", 23, "1"),
  ]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSaveClient = (client) => {
    setClients((prevClients) => {
      const existingIndex = prevClients.findIndex((c) => c.id === client.id);
      if (existingIndex !== -1) {
        const updatedClients = [...prevClients];
        updatedClients[existingIndex] = client;
        return updatedClients;
      }
      return [...prevClients, { ...client, id: (clients.length + 1).toString() }];
    });
    setShowForm(false);
  };

  const handleEditClient = (client) => {
    setSelectedClient(client);
    setShowForm(true);
  };

  const handleDeleteClient = (clientId) => {
    setClients((prevClients) => prevClients.filter((c) => c.id !== clientId));
  };

  const handleNewClient = () => {
    setSelectedClient(null);
    setShowForm(true);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      
      <Layout title="Clientes" />

      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-4">
        {showForm ? (
          <Form
            client={selectedClient || { name: "", age: "" }}
            onClientChange={handleSaveClient}
            onCancel={() => setShowForm(false)}
          />
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Clientes</h2>
              <Button cor="blue" onClick={handleNewClient}>Novo Cliente</Button><br></br><br></br>
            </div>
            <Table clients={clients} onEdit={handleEditClient} onDelete={handleDeleteClient} />
          </>
        )}
      </div>
    </div>
  );
}