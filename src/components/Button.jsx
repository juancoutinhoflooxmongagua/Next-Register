export default function Button({ cor = "blue", className = "", children, onClick }) {
    return (
        <button onClick={onClick} className={`custom-button ${cor} ${className}`}>
            {children}
        </button>
    );
}
