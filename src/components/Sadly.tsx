import { useEffect, useState } from "react";
import ImgSad from "assets/sad.png";

export default function Sadly() {
  return (
    <>
      <div className="container mx-auto pt-12 md:pt-24 pb-16 md:pb-32">
        <div className="text-5xl md:text-6xl flex gap-1 mb-6 justify-center">
          <div className="text-orange">"</div>
          <div>BUT SADLY</div>
          <div className="text-orange">"</div>
        </div>

        <div className="bg-[#F5F4F3] p-8 rounded-3xl relative">
          <div className="text-2xl uppercase mb-4">
            These gentle and adorable “guardians of forests” are also{" "}
            <span className="text-orange">
              one of the most endangered animals
            </span>{" "}
            on the planet facing extinction threat due to poaching!
          </div>

          <ol className="list-decimal text-sans leading-loose pl-4">
            <li>They are the most trafficked mammal in the world</li>
            <li>A pangolin is killed roughly every 5 minutes</li>
            <li>
              All 8 species of pangolins are listed on the IUCN Red List as
              either Vulnerable,<br/> Endangered or Critically Endangered.
            </li>
          </ol>

          <img src={ImgSad} className="relative md:absolute mx-auto mt-4 md:mt-0 md:-right-6 md:-bottom-6 w-[200px] md:w-[320px] xl:w-[500px] " />
        </div>
      </div>
    </>
  );
}
