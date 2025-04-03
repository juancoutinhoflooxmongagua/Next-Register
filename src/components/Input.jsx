export default function Input(props) {
    return (
      <div className="mb-2">
        <label className="block text-sm font-medium mb-1">{props.texto}</label>
        <input
          type={props.tipo ?? "text"}
          className="w-full border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    );
  }
  