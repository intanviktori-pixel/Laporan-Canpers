export function Input({ placeholder, name, onChange }) {
  return (
    <input
      className="border rounded-xl p-2 w-full"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
}
