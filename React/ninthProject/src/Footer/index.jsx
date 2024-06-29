import { CiUser } from "react-icons/ci";
import { GrContact } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import Button from "../Button";

export default function Footer() {
  return (
    <div className="h-40 bg-zinc-800 flex flex-row items-center justify-between rounded-lg m-3 p-5">
      <div className="text-zinc-100 flex items-center gap-3">
        <CiUser size={50} />
        <GrContact size={50} />
      </div>
      <Button />
      <div className="text-zinc-100 flex items-center gap-3">
        <FaYoutube size={50} />
        <FaSpotify size={40} />
      </div>
    </div>
  );
}
