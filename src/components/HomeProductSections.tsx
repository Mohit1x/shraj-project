import TiltCard from "@/components/TiltCard";

type TitleCardProps = {
  title: string;
  img: string;
  desc: string;
};

export default function HomeProductSections({
  desc,
  img,
  title,
}: TitleCardProps) {
  return (
    <div
      className={`w-full flex gap-10 items-center justify-between flex-col md:flex-row ${
        title === "MORTUARY REFRIGERATION SYSTEMS"
          ? "md:flex-row-reverse"
          : "md:flex-row"
      }`}
    >
      <div className="flex flex-col gap-5 max-w-xl">
        <h1 className="text-2xl font-serif text-gray-800">{title}</h1>
        <p className="text-sm">{desc}</p>
        <span className="p-2 bg-[#2C318F] rounded text-white w-fit">
          view more
        </span>
      </div>

      <div className="w-[200px] md:w-[400px]">
        <TiltCard img={img} />
      </div>
    </div>
  );
}
