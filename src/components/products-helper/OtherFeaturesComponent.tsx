import { OvenOtherFeaturesType } from "@/constants/constant";
import { ScrollArea } from "../ui/scroll-area";

type otherFeaturesType = {
  otherFeatures: OvenOtherFeaturesType;
};

export default function OtherFeaturesComponent({
  otherFeatures,
}: otherFeaturesType) {
  return (
    <ScrollArea className="h-[35vh] sm:h-[40vh] pr-2">
      <div className="flex flex-col gap-6 lg:gap-10">
        {Object.entries(otherFeatures).map(([key, featureBlock]) => (
          <div key={key} className="flex flex-col gap-4 lg:gap-5">
            <h1 className="font-semibold text-lg sm:text-xl break-words leading-tight">
              {featureBlock.title}
            </h1>

            {featureBlock.description && (
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed break-words">
                {featureBlock.description}
              </p>
            )}

            {featureBlock.features && featureBlock.features.length > 0 && (
              <div className="flex flex-col gap-3">
                {featureBlock.features.map((feature, index) => (
                  <div
                    className="flex items-start gap-3"
                    key={`${key}-${index}`}
                  >
                    <span className="text-slate-700 mt-1 flex-shrink-0">•</span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed break-words flex-1 min-w-0">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
