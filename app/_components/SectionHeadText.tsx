"use server";

function SectionHeadText({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-4xl font-black sm:text-5xl md:text-6xl">{children}</h3>
  );
}

export default SectionHeadText;
