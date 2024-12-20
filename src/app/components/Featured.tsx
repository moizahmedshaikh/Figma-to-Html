import React from "react";
import FeaturedSec, { Props } from "./FeaturedSec";
import { client } from "@/sanity/lib/client";


const Featured = async () => {
  const query = `*[_type == "featured"]{title,description, image, year}`;
  const featuredRes: Props[] = await client.fetch(query);

  return (
    <div className="max-w-[1010px] mx-auto pb-20 px-8">
      <div className="pt-20 pb-8 font-[500] lg:text-[22px] text-lg">
        <h2>Featured works</h2>
      </div>
      {featuredRes.map((feat: Props, index:number) => (
        <div key={index}>
        <FeaturedSec
          title={feat.title}
          description={feat.description}
          year={feat.year}
          image={feat.image}
        /></div>
      ))}
    </div>
  );
};

export default Featured;
