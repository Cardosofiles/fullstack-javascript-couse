import { MoonStars } from "phosphor-react";

export default function Nav() {
  return (
    <>
      <div className="flex flex-row gap-8 mt-5">
        <a
          className="bg-zinc-900 rounded-lg w-40 p-4 items-center justify-center flex transition duration-150 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
          href=""
        >
          Home
        </a>
        <a
          className="bg-zinc-900 rounded-lg w-40 p-4 items-center justify-center flex transition duration-150 ease-in-out "
          href=""
        >
          Works
        </a>
        <a
          className="bg-zinc-900 rounded-lg w-40 p-4 items-center justify-center flex transition duration-150 ease-in-out "
          href=""
        >
          Skills
        </a>
        <a
          className="bg-zinc-900 rounded-lg w-40 p-4 items-center justify-center flex transition duration-150 ease-in-out "
          href=""
        >
          Contact
        </a>

        <button className="bg-zinc-900 rounded-lg w-10 p-4 items-center justify-center flex transition duration-150 ease-in-out">
          <MoonStars />
        </button>
        <button className="bg-zinc-900 rounded-lg w-40 p-4 items-center justify-center flex transition duration-150 ease-in-out">
          Vamos conversar
        </button>
      </div>
    </>
  );
}
