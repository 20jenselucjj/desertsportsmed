interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-dsm-red blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-dsm-orange blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 relative inline-block">
            <span className="relative z-10">{title}</span>
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-dsm-red"></span>
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
