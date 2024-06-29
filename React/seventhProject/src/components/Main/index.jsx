import { Airplay, Kanban, FileArrowDown } from "phosphor-react";

export default function Main() {
  return (
    <>
      <div className="mt-80">
        <div className="flex flex-row gap-1 items-center justify-center border rounded w-20 h-10 ">
          <Airplay className="" />
          <a className="" href="#">
            Home
          </a>
        </div>

        <h1 className="mt-10 text-7xl font-bold">
          Desenvolvedor <br /> Full Stack
        </h1>

        <div className="flex flex-row gap-5 mt-10">
          <div className="flex flex-row gap-1 items-center justify-center border rounded w-28 h-10">
            <button className="transition duration-150 ease-in-out">
              My Works
            </button>
            <Kanban className="" />
          </div>
          <div className="flex flex-row gap-1 items-center">
            <button>Download CV</button>
            <FileArrowDown className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}
