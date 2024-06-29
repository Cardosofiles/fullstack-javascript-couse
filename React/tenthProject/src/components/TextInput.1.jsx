export default function TextInput({ id, label, value, setValue }) {
  return (
    <div className="flex flex-row items-center gap-1">
      <label className="text-xl font-semibold text-zinc-100" htmlFor={label}>
        {label}
      </label>
      <input
        className="text-zinc-50 rounded-2xl p-2 w-96 bg-opacity-25 bg-zinc-500"
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
