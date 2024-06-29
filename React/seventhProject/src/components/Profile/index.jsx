import "../../styles/output.css";
import GiphyPerson from "../../assets/giphy_person.gif";

import {
  InstagramLogo,
  GithubLogo,
  LinkedinLogo,
  AddressBook,
  PhoneCall,
} from "phosphor-react";

export default function Profile({
  avatar,
  name,
  bio,
  phone,
  email,
  githubUrl,
  linkedinUrl,
  instagranUrl,
  giphy,
}) {
  return (
    <div className="bg-zinc-900 w-80 text-zinc-100 flex rounded-2xl flex-col m-7 h-768 fixed">
      <div className="flex flex-col mt-4 items-center">
        <div className="flex flex-row gap-2">
          <img src={avatar} alt="Person" className="rounded-lg h-20 w-20" />
          <h2 className="flex text-2xl items-center ">{name}</h2>
        </div>
        <div className="flex">
          <img
            className="p-6 rounded"
            width={300}
            height={300}
            src={GiphyPerson}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-1 items-center justify-center mt-3">
        <h4>Specialization</h4>
        <h1>JavaScript | ReactJS</h1>
      </div>

      <div className="flex flex-col gap-1 items-center justify-center mt-16">
        <h1>Contato</h1>

        <div className="flex items-center gap-1">
          <PhoneCall />
          {phone}
        </div>
      </div>

      <div className="flex flex-row gap-3 items-center justify-center mt-16">
        <div className="">
          <a
            className="flex gap-1 items-center bg-zinc-500 rounded-lg px-1 border "
            href={githubUrl}
            target="_blank"
          >
            <GithubLogo />
            GitHub
          </a>
        </div>
        <div>
          <a
            className="flex gap-1 items-center bg-zinc-500 rounded-lg px-1 border "
            href={linkedinUrl}
            target="_blank"
          >
            <LinkedinLogo />
            Linkedin
          </a>
        </div>
        <div>
          <a
            className="flex gap-1 items-center bg-zinc-500 rounded-lg px-1 border "
            href={instagranUrl}
            target="_blank"
          >
            <InstagramLogo />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
