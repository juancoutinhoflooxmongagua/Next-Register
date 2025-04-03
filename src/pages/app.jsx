import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "../core/Client"; 
import Button from "@/components/Button";
import Form from "@/components/Form";
import { db } from "@/backend/config"; 
import { doc, getDoc, getDocs, collection, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
export default function Home() {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchClients();
  }, []);

  async function fetchClients() {
    const querySnapshot = await getDocs(collection(db, "clientes"));
    const clientsData = querySnapshot.docs.map(doc => new Client(doc.data().nome, doc.data().idade, doc.id));
    setClients(clientsData);
  }

  async function handleSaveClient(client) {
    if (client.id) {
      try {
        const clientRef = doc(db, "clientes", client.id);
        const clientSnap = await getDoc(clientRef);
  
        if (clientSnap.exists()) {
          await updateDoc(clientRef, { nome: client.nome, idade: client.idade });
        } else {
          console.warn("Tentando atualizar um cliente que não existe. Criando um novo...");
          const docRef = await addDoc(collection(db, "clientes"), {
            nome: client.nome,
            idade: client.idade,
          });
          client = new Client(client.nome, client.idade, docRef.id);
        }
      } catch (error) {
        console.error("Erro ao salvar cliente:", error);
      }
    } else {
      try {
        const docRef = await addDoc(collection(db, "clientes"), {
          nome: client.nome,
          idade: client.idade,
        });
        client = new Client(client.nome, client.idade, docRef.id);
      } catch (error) {
        console.error("Erro ao adicionar cliente:", error);
      }
    }
    fetchClients(); 
    setShowForm(false);
  }
  

  async function handleDeleteClient(clientId) {
    await deleteDoc(doc(db, "clientes", clientId));
    fetchClients();
  }

  function handleEditClient(client) {
    setSelectedClient(client);
    setShowForm(true);
  }

  function handleNewClient() {
    setSelectedClient(null);
    setShowForm(true);
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <Layout title="Clientes" />
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-4">
        {showForm ? (
          <Form
            client={selectedClient || new Client("", 0, "")}
            clientChange={handleSaveClient}
            cancel={() => setShowForm(false)}
          />
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Clientes</h2>
              <Button cor="blue" onClick={handleNewClient}>Novo Cliente</Button>
            </div>
            <Table clients={clients} onEdit={handleEditClient} onDelete={handleDeleteClient} />
          </>
        )}
      </div>
    </div>
  );
}
