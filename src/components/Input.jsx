export default function Input({ label, type }) {
    return (
      <div>
        <label>{label}</label>
        <input type={type} />
      </div>
    );
  }
  