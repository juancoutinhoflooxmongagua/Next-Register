export default function Input({ tipo = "text", texto, valor, somenteLeitura, valorMudou }) {
    return (
        <div>
            <label>{texto}</label>
            <input
                type={tipo}
                value={valor}
                readOnly={somenteLeitura}
                onChange={(e) => valorMudou?.(e.target.value)}
            />
        </div>
    );
}
