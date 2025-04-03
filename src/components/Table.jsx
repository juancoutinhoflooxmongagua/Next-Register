export default function Table({ clients }) {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Idade</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client, index) => (
                        <tr key={client.id || index}>
                            <td>{client.id}</td>
                            <td>{client.nome}</td>
                            <td>{client.idade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
