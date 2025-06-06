interface DescriptionProps {
  overallDescription: string;
  mainFeatures: string[];
}

export default function DescriptionComponent({
  mainFeatures,
  overallDescription,
}: DescriptionProps) {
  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <p className="text-sm sm:text-base text-slate-700 leading-relaxed break-words">
        {overallDescription}
      </p>
      <div className="flex flex-col gap-4 lg:gap-5">
        <h1 className="font-semibold text-lg sm:text-xl break-words">
          Main Features
        </h1>
        <div className="flex flex-col gap-3">
          {mainFeatures.map((feature, index) => (
            <div className="flex items-start gap-3" key={`${feature}-${index}`}>
              <span className="text-slate-700 mt-1 flex-shrink-0">•</span>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed break-words flex-1 min-w-0">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
