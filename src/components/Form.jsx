import Input from "./Input";

export default function Form() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-md font-semibold mb-2">Novo Cliente</h3>
      <Input texto="Nome" />
      <Input texto="Idade" tipo="number" />
      <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
        Salvar
      </button>
    </div>
  );
}
