"use server";

function SectionSubText({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="pb-2 text-xl font-medium dark:text-[#dfd9ff] xs:text-[20px] sm:text-[26px] md:pb-5 lg:text-xl lg:leading-[40px]">
      {children}
    </h2>
  );
}
export default SectionSubText;
