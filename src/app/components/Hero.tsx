import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";



const Hero = async () => {

  const query = `*[_type == "profile"]{name,bio, image}[0]`;
  const profile = await client.fetch(query);



  return (
    <section className="max-w-[1030px] mx-auto px-11 py-20 flex lg:flex-row flex-col-reverse items-center justify-between gap-10">
      <div className="max-w-[521px] text-[#21243D] lg:text-start text-center">
        <h1 className="lg:text-5xl tracking-wide md:text-4xl text-3xl font-[900]">
          Hi, I am {profile.name}, <br /> Creative Technologist
        </h1>
        <p className="text-base font-[400] py-10">
          {profile.bio}
        </p>
        <div>
          <button className="bg-[#F98585] rounded shadow-md shadow-gray-500 text-lg font-[500] text-white py-3 px-8">
            Download Resume
          </button>
        </div>
      </div>
      <div className="lg:w-[298px] w-[250px]">
        <Image src={urlFor(profile.image).url()} alt="profile" width={1000} height={1000} />
      </div>
    </section>
  );
};

export default Hero;
