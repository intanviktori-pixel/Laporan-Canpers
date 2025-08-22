export function Textarea({ placeholder, name, onChange }) {
  return (
    <textarea
      className="border rounded-xl p-2 w-full"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
}
