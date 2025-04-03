export default function Table({ clients, onEdit, onDelete }) {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.nome}</td>
              <td>{client.idade}</td>
              <td>
                <button onClick={() => onEdit(client)}>✏️ Editar</button>
                <button onClick={() => onDelete(client.id)}>🗑️ Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  