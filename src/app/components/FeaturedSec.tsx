import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export type Props = {
  title: string;
  description: string;
  image: string;
  year: number;
};

const FeaturedSec = ({ title, description, image, year }: Props) => {
  return (
    <div className="flex pb-20 lg:flex-row flex-col items-center gap-10 ">
      <div className="lg:w-[246px] w-[260px]">
        <Image src={urlFor(image).url()} alt="" height={1000} width={1000} />
      </div>
      <div className="lg:max-w-[663px] max-w-[400px] text-center lg:text-start">
        <h2 className="lg:text-[30px] lg:text-2xl text-xl font-bold">
          {title}
        </h2>
        <div className="flex lg:justify-start justify-center gap-4 items-center py-6">
          <h3 className="bg-[#f98585] px-3 rounded-2xl font-bold text-white">
            {year}
          </h3>
          <p className="text-[#5f5d5d] text-xl">Dashboard</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeaturedSec;
