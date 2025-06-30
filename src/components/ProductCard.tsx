import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ProductCard({ product }: { product: any }) {
  function useReadMoreByLines(text: string) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [needsReadMore, setNeedsReadMore] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);
    const measureRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
      const checkOverflow = () => {
        if (measureRef.current && textRef.current) {
          const tempElement = measureRef.current;
          tempElement.textContent = "A";
          const singleLineHeight = tempElement.scrollHeight;

          tempElement.textContent = text;
          const fullTextHeight = tempElement.scrollHeight;

          setNeedsReadMore(fullTextHeight > singleLineHeight * 1.2);
        }
      };

      if (text) {
        const timer = setTimeout(checkOverflow, 10);
        return () => clearTimeout(timer);
      }
    }, [text]);

    const toggle = useCallback(() => {
      setIsExpanded((prev) => !prev);
    }, []);

    return {
      isExpanded,
      needsReadMore,
      toggle,
      textRef,
      measureRef,
    };
  }

  const { isExpanded, needsReadMore, toggle, textRef, measureRef } =
    useReadMoreByLines(product.description);

  return (
    <div
      className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col border border-gray-100 group mb-2 ${
        isExpanded ? "h-auto" : "h-[320px]"
      }`}
    >
      <Link
        href={`/all-products/${product.id}`}
        className="flex flex-col flex-1"
      >
        <div className="relative w-full h-32 mb-3 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            loading="lazy"
          />
        </div>

        <div className="mb-2 flex-shrink-0">
          <span className="bg-[#2C3091] text-white text-xs font-semibold px-2 py-1 rounded-full inline-block">
            {product.type}
          </span>
        </div>

        <h2 className="text-base font-semibold text-gray-900 mb-2 flex-shrink-0 h-10 flex items-start">
          <span className="line-clamp-2 leading-tight">{product.name}</span>
        </h2>
      </Link>

      <div className="text-sm text-gray-600 flex-1 flex flex-col">
        <div className="relative flex-1">
          <p
            ref={measureRef}
            className="absolute invisible leading-relaxed text-sm whitespace-pre-wrap"
            style={{
              width: "100%",
              fontSize: "inherit",
              fontFamily: "inherit",
              lineHeight: "inherit",
            }}
            aria-hidden="true"
          />

          {isExpanded ? (
            <p ref={textRef} className="leading-relaxed text-sm">
              {product.description}
            </p>
          ) : (
            <p ref={textRef} className="leading-relaxed text-sm line-clamp-1">
              {product.description}
            </p>
          )}
        </div>

        {needsReadMore && (
          <div className="mt-2 flex-shrink-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggle();
              }}
              className="text-[#2C3091] hover:text-[#2E2F91] text-xs font-medium underline decoration-dotted underline-offset-2 hover:decoration-solid transition-all"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
