import Button from "../Button";

export default function Card({ title, posterImg, paragraph }) {
  return (
    <div className="bg-zinc-400 flex gap-5 rounded h- ml-48 mr-48 mt-12 mb-12 p-10 w-auto ">
      <img
        className="border-blue-950 rounded"
        src={posterImg}
        alt="Posters"
        width={200}
        height={50}
      />
      <div className="w-auto">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="mt-3 text-lg leading-relaxed">{paragraph}</p>
        <Button text="Compar Agora" />
      </div>
    </div>
  );
}
