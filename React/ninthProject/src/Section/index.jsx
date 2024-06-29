import { useState } from "react";
import Input from "../Input";

export default function Section() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");
  const [customSize, setcustomSize] = useState(8);
  const [showInput, setShowInput] = useState(false);

  const passwordSize = showInput ? customSize : 8;

  function generate() {
    const characters =
      // "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
      "1234567890";

    let newPassword = "";
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword);
    setCopyText("Copiar");
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado!");
  }

  return (
    <div className="h-82m m-3 p-5 flex flex-col justify-center items-center gap-5 bg-zinc-800 text-zinc-200 rounded-lg">
      <h1 className="text-3xl">Gerador de Senha</h1>
      <div className="flex flex-row items-center gap-2">
        <label htmlFor="showInput">Customiza o tamanho:</label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput((currentState) => !currentState)}
        />
      </div>

      {showInput ? (
        <div className="flex flex-col items-center gap-2">
          <label className="text-2xl" htmlFor="passwordSize">
            Tamanho:{" "}
          </label>
          <Input passwordSize={customSize} setPasswordSize={setcustomSize} />
        </div>
      ) : null}

      <div className="flex flex-col gap-4 items-center">
        <button
          onClick={generate}
          className="border rounded-lg py-2 px-5 group hover:bg-zinc-400 hover:text-zinc-950"
        >
          Gerar senha de {passwordSize} caracteres
        </button>
        <button
          onClick={copyToClipboard}
          className="border rounded-lg py-2 px-5 group hover:bg-zinc-400 hover:text-zinc-950"
        >
          {copyText}
        </button>
      </div>
      <div className="text-3xl">{password}</div>
    </div>
  );
}
