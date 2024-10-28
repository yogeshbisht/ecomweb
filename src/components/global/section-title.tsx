type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <div className="flex items-center justify-center gap-12">
        <div className="h-[1px] w-40 bg-slate-400" />
        <h2 className="text-4xl mb-2">{title}</h2>
        <div className="h-[1px] w-40 bg-slate-400" />
      </div>
      {subtitle && <p className="text-lg text-gray-500">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
