import IconHTML from "../assets/svg/icon-html.svg";
import IconTailwindcss from "../assets/svg/icon-tailwindcss.svg";
import IconNodeJS from "../assets/svg/icon-node-logo.svg";
import IconJavaScript from "../assets/svg/icon-javascript.svg";
import IconReactJS from "../assets/svg/icon-react.svg";
import IconVisualStudio from "../assets/svg/icon-visual-studio.svg";

export default function () {
  return (
    <div className="flex flex-row gap-8 rounded-lg m-3 p-5 items-center justify-center bg-zinc-800">
      <img className="" width={125} src={IconHTML} alt="icon-language" />
      <img className="" width={125} src={IconTailwindcss} alt="icon-language" />
      <img className="" width={100} src={IconJavaScript} alt="icon-language" />
      <img className="" width={100} src={IconReactJS} alt="icon-language" />
      <img className="" width={100} src={IconNodeJS} alt="icon-language" />
      <img
        className=""
        width={100}
        src={IconVisualStudio}
        alt="icon-language"
      />
    </div>
  );
}
