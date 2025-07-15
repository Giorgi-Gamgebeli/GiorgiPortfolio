import Link from "next/link";

type CVProjectProps = {
  title: string;
  description: string;
  skills: string;
  liveLink: string;
};

function CVProject({ title, description, skills, liveLink }: CVProjectProps) {
  console.log(liveLink);
  return (
    <div className="ml-4 flex gap-4">
      <div className="relative min-w-1 max-w-1 bg-black/10">
        <div className="absolute left-1/2 top-0 h-[10px] w-[10px] -translate-x-1/2 rounded-full border-2 border-[#a5b3ce] bg-[#19202e]"></div>
      </div>
      <div className="flex flex-col gap-2 pb-6">
        <h4 className="text-lg font-bold text-white">{title}</h4>
        <p className="mt-4">{description}</p>
        <h6 className="text-base font-medium text-white">
          SKills displayed in this web application
        </h6>
        <p className="text-sm">{skills}</p>
        <Link
          href={liveLink}
          target="_blank"
          className="text-base font-medium text-white hover:underline"
        >
          Live Link: {liveLink.slice(8)}
        </Link>
      </div>
    </div>
  );
}

export default CVProject;
