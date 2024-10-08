function SectionMini({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-2xl py-6 text-sm font-medium leading-relaxed tracking-wider md:py-8 md:text-lg">
      {children}
    </p>
  );
}

export default SectionMini;
