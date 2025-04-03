import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "../core/Client"; 
import Button from "@/components/Button";

export default function Home() {
  const clientes = [
    new Client("Marcos", 34, "2"),
    new Client("Mano", 23, "1"),
  ];

  return (
    <div>
      <br /><br /><br /><br />
      <center>
      <Layout title="Clientes" />
      <br></br>
      <Button>Novo Cliente</Button>
      <div className="p-6">
        <Table clients={clientes} />
      </div>
      </center>
    </div>
  );
}
