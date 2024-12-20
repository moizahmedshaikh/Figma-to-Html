import React from "react";

const Recent = () => {
  return (
    <section className="bg-[#FAE2E2] pb-14 px-10">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex justify-between py-5 font-[500] lg:text-[22px] text-lg">
          <h2 className="">Recent Post</h2>
          <p className="text-[#F98585]">View All</p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="bg-white pt-8 pb-14 px-8 md:text-start text-center">
            <h1 className="text-[#000000] md:w-[90%] w-full font-bold lg:text-2xl text-xl tracking-[2%]">
              Making a design system from scratch
            </h1>
            <p className="py-5 text-lg text-gray-500 tracking-wider">
              12 Feb 2020 | Design , Pattern
            </p>
            <p className="text-[#21243D] w-[95%]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>

          <div className="bg-white pt-8 pb-14 px-8 md:text-start text-center">
            <h1 className="text-[#000000] md:w-[90%] w-full font-bold lg:text-2xl text-xl tracking-[2%]">
              Making a design system from scratch
            </h1>
            <p className="py-5 text-lg text-gray-500 tracking-wider">
              12 Feb 2020 | Design,Pattern
            </p>
            <p className="text-[#21243D] w-[95%]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recent;
