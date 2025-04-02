import Layout from "@/components/Layout";

export default function Home() {
  return (
    <div>
        <br></br>
    <Layout title="Página Inicialkk">
    </Layout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-blue-500">
          Tailwind está funcionando!
        </h1>
        <p className="mt-4 text-gray-700">
          Esta é a página inicial do seu aplicativo.
        </p>
      </div>
    </div>
  );
}