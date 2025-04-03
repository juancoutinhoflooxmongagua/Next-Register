export default function Table({ clients }) {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client) => (
                    <tr key={client.id}>
                        <td>{client.id}</td><td>{client.nome}</td><td>{client.idade}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
