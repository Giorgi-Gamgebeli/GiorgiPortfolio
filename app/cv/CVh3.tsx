import { Icon } from "@iconify/react/dist/iconify.js";

type CVh3Props = {
  icon: string;
  text: string;
};

function CVh3({ icon, text }: CVh3Props) {
  return (
    <h3 className="mb-4 mt-10 flex items-center gap-2 text-xl font-bold text-white">
      <span className="rounded-full bg-black/15 p-[10px]">
        <Icon icon={icon} className="size-[1.2rem]" />
      </span>
      {text}
    </h3>
  );
}

export default CVh3;
