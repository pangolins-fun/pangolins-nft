import { useEffect, useState } from "react";
import ImgBanner from "assets/banner-img.png";

export default function Little() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center pt-16 md:pt-24 pb-8 md:pb-12 gap-8">
          <div className="section-title md:pl-7 w-full md:w-7/12">
            <div>Little Guardians</div>
            <div className="text-cyan">of the Forests</div>
          </div>
          <div className="text-sans w-full md:w-5/12">
            Pangolins are peaceful, shy and curious creatures. Although they are
            sometimes mistaken as reptiles, pangolins are actually{" "}
            <strong>mammals (like us!).</strong> <br />
            Pangolins are known as the “little guardians of the forests” because
            of their crucial ecological role of regulating insect populations,
            which protects forests from termite destruction, maintaining a
            balanced ecosystem.
          </div>
        </div>

        <div className="bg-little p-6 md:p-8 flex flex-col gap-12 rounded-3xl">
          <div className="rounded-3xl bg-white p-6 md:p-8 w-full md:w-7/12">
            <div className="mb-4 text-2xl md:text-3xl flex items-center gap-2">
              <div className="text-orange">"</div>
              <div>Some interesting facts about Pangolins</div>
              <div className="text-orange">"</div>
            </div>
            <div className="text-sans pl-4">
              <ol className="list-decimal leading-7">
                <li>
                  Pangolins are the ONLY mammals that are covered with scales.
                </li>
                <li>Pangolins have been around for over 60 million years.</li>
                <li>
                  There are 8 species of Pangolins, 4 in Africa and 4 in Asia.
                </li>
                <li>
                  The name "Pangolin" comes from the Malay word "Pengguling",
                  which means roller.
                </li>
                <li>
                  Their tongues can be as long as 40 cm, sometimes longer than
                  their bodies.
                </li>
                <li>They do not have any teeth. </li>
                <li>Pangolin babies ride on their mother's backs.</li>
                <li>
                  When threatened, they roll up into a ball and wait until the
                  danger goes away.
                </li>
              </ol>
            </div>
          </div>

          <div className="w-full md:w-6/12 bg-[#fff] rounded-3xl md:rounded-none p-6 md:p-0 md:bg-transparent">
            <div className="mb-4 text-sans">
              “Pangolins save us millions of dollars a year in pest destruction.{" "}
              <br />
              These shy creatures provide a vital service and we cannot afford
              to overlook their ecological role as natural controllers of
              termites and ants.”
            </div>
            <div className="mb-1 text-xl">Simon Stuart</div>
            <div className="text-sm text-sans">
              Former Chair of the International Union for Conservation of Nature
              (IUCN) Species Survival Commission.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
