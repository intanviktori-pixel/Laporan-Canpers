export function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white rounded-xl p-2 ${className}`}
    >
      {children}
    </button>
  );
}
