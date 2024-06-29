import PropTypes from "prop-types";

Game.prototype = {
  title: PropTypes.string,
  cover: PropTypes.string,
  onRemove: PropTypes.func,
};

export default function Game({ title, cover, onRemove }) {
  return (
    <div className="flex flex-row gap-2 border rounded-2xl p-5">
      <div className="overflow-hidden h-40 w-32">
        <img
          src={cover}
          alt="capa game"
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>
      <div className="overflow-hidden">
        <div className="h-20 w-full object-cover">
          <h2 className="text-base text-zinc-100">{title}</h2>
        </div>

        <button
          className="rounded-md bg-zinc-200 p-1 text-zinc-950"
          onClick={onRemove}
        >
          Remover Game
        </button>
      </div>
    </div>
  );
}
