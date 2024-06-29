import PropTypes from "prop-types";

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default function TextInput({ id, label, value, setValue }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xl font-semibold text-zinc-100" htmlFor={id}>
        {label}
      </label>
      <input
        className="text-zinc-50 rounded-xl p-2 w-96 bg-opacity-25 bg-zinc-500"
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
