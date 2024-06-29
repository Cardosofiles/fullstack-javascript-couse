import { HiOutlineBeaker } from "react-icons/hi2";

export default function Button() {
  return (
    <div className="relative group px-1 py-1">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur-xl opacity-50 group-hover:opacity-100 trasition duration-1000 group-hover:duration-200"></div>
      <button className="relative px-7 py-4 bg-zinc-600 rounded-lg leading-none flex items-center divide-x divide-orange-500">
        <div className="flex flex-row items-center gap-5">
          <span className="flex items-center space-x-5 text-pink-600 -rotate-6">
            <HiOutlineBeaker />
          </span>
          <span className="text-gray-100 pr-6">Labs Release 2024.05</span>
        </div>
        <span className="text-indigo-400 group-hover:text-gray-100 transition duration-200 pl-6">
          UI/UX TailwindCSS{" "}
        </span>
      </button>
    </div>
  );
}
