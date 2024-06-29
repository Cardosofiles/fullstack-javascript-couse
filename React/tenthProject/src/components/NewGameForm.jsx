import PropTypes from "prop-types";
import { useState } from "react";
import TextInput from "./TextInput";

NewGameForm.prototypes = {
  addGame: PropTypes.func,
};

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form
      className="flex flex-row gap-4 items-center mt-6"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-row gap-4">
        <TextInput
          id="title"
          label="Título:"
          value={title}
          setValue={setTitle}
        />
        <TextInput id="cover" label="Capa:" value={cover} setValue={setCover} />
        <div className="flex items-end">
          <button
            type="submit"
            className="bg-gradient-to-br from-blue-900 to-zinc-950 text-transparent text-xl text-zinc-200 rounded-xl py-1.5 px-4"
          >
            Adicionar a biblioteca
          </button>
        </div>
      </div>
    </form>
  );
}
