import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "../core/Client"; 

export default function Home() {
  const clientes = [
    new Client("Marcos", 34, "2"),
    new Client("Mano", 23, "1"),
  ];

  return (
    <div>
      <br /><br /><br /><br />
      <Layout title="Clientes" />
      <div className="p-6">
        <Table clients={clientes} />
      </div>
    </div>
  );
}
