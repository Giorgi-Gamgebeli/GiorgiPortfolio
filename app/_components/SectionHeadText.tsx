function SectionHeadText({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-4xl font-black xs:text-[40px] sm:text-[50px] md:text-[60px]">
      {children}
    </h3>
  );
}

export default SectionHeadText;
