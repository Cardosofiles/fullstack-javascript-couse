export default function Button({ text }) {
  return (
    <>
      <button className="bg-zinc-800 text-white rounded-full p-3 mt-8 hover:bg-blue-950">
        {text}
      </button>
    </>
  );
}
