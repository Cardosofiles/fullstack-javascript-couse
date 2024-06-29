import PropTypes from "prop-types";

Input.propTypes = {
  passwordSize: PropTypes.number.isRequired,
  setPasswordSize: PropTypes.func,
};

export default function Input(props) {
  return (
    <input
      className="border rounded items-center bg-zinc-800 group hover:bg-zinc-200 hover:text-zinc-950 py-2 px-8"
      type="number"
      id="passwordSize"
      min={1}
      value={props.passwordSize}
      onChange={(ev) => props.setPasswordSize(+ev.target.value)}
    />
  );
}
