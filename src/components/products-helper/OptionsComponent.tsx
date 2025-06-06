import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";

type MoreProps = {
  img?: string[];
  options?: string[];
};

export default function OptionsComponent({ img, options }: MoreProps) {
  return (
    <ScrollArea className="h-[35vh] sm:h-[40vh] pr-2">
      {img && img.length > 0 ? (
        <div className="flex flex-col gap-4 sm:gap-6">
          {img.map((src, index) => (
            <div key={index} className="w-full relative">
              <Image
                src={src}
                alt={`Option image ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-auto object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {options?.map((feature, index) => (
            <div className="flex items-start gap-3" key={`option-${index}`}>
              <span className="text-slate-700 mt-1 flex-shrink-0">•</span>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed break-words flex-1 min-w-0">
                {feature}
              </p>
            </div>
          ))}
        </div>
      )}
    </ScrollArea>
  );
}
