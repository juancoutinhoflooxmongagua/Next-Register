export default function Button({ onClick, className = "", children }) {
    return (
        <button onClick={onClick} className={`custom-button ${className}`}>
            {children}
        </button>
    );
}
