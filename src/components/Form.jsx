import Input from "./Input";

export default function Form() {
  return (
    <div className="form-container">
      <h2>Cadastro</h2>
      <Input label="Nome" type="text" />
      <Input label="Idade" type="number" />
      <button>Salvar</button>
    </div>
  );
}
