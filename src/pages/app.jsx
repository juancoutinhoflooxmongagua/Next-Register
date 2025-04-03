import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "../core/Client"; 
import Button from "@/components/Button";
import Form from "@/components/Form";

export default function Home() {
  const clientes = [
    new Client("Marcos", 34, "2"),
    new Client("Mano", 23, "1"),
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <Layout title="Clientes" />

      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Clientes</h2>
          <Button cor="blue">Novo Cliente</Button>
        </div>

        <Table clients={clientes} />
      </div>

      <div className="mt-6 w-full max-w-sm">
        <Form />
      </div>
    </div>
  );
}
