import FlexBox from "../../_components/FlexBox";

type CVProjectProps = {
  title: string;
  description: string;
  skills: string;
  liveLink: string;
};

function CVProject({ title, description, skills, liveLink }: CVProjectProps) {
  return (
    <FlexBox className="ml-4 gap-4">
      <div className="relative min-w-1 max-w-1 bg-black/10">
        <div className="absolute left-1/2 top-0 h-[10px] w-[10px] -translate-x-1/2 rounded-full border-2 border-[#a5b3ce] bg-[#19202e]"></div>
      </div>
      <div className="flex flex-col gap-2 pb-6">
        <h4 className="text-lg font-bold text-white">{title}</h4>
        <p className="mt-4">{description}</p>
        <h6 className="text-base font-medium text-white">
          SKills displayed in this web application
        </h6>
        <p>{skills}</p>
        <h6 className="text-base font-medium text-white">
          Live Link: {liveLink}
        </h6>
      </div>
    </FlexBox>
  );
}

export default CVProject;
