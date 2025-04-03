export default function Button({ cor = "blue", className = "", children }) {
    return (
        <button className={`custom-button ${cor} ${className}`}>
            {children}
        </button>
    );
}
