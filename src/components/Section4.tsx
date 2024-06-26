"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import logo from "@/public/cimp3.png"
import transport from "@/public/transport.png"
import unpack from "@/public/unpack.png"
import packing from "@/public/packing.png"

export function Section4() {
  return (
    <section className="flex flex-col">
      <h2 className="text-4xl text-center text-[#ED3237] mb-20">Our Process</h2>
      <div className="flex justify-center lg:flex-nowrap flex-wrap items-center gap-7 h-auto">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 w-72 lg:h-[55vh] h-auto bg-white dark:bg-zinc-900">
          <Image
            src={logo}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain h-36"
          />
          <p className="text-base sm:text-xl text-black text-center font-semibold mt-4 mb-2 dark:text-neutral-200">
            Assign Us Service
          </p>

          <p className="text-sm text-neutral-600 text-center">
            After you are satisfied with our quotation, you book our service
          </p>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 w-72 lg:h-[55vh] h-auto bg-white dark:bg-zinc-900">
          <Image
            src={packing}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black text-center font-semibold mt-4 mb-2 dark:text-neutral-200">
            Packing and Loading
          </p>

          <p className="text-sm text-neutral-600 text-center">
            We will pack all your goods and load it in our vehicle safely
          </p>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 w-72 lg:h-[55vh] h-auto bg-white dark:bg-zinc-900">
          <Image
            src={transport}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black text-center font-semibold mt-4 mb-2 dark:text-neutral-200">
            Transportation Service
          </p>

          <p className="text-sm text-neutral-600 text-center">
            Our Vehicle will deliver your goods to your destination
          </p>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 w-72 lg:h-[55vh] h-auto bg-white dark:bg-zinc-900">
          <Image
            src={unpack}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black text-center font-semibold mt-4 mb-2 dark:text-neutral-200">
            Unloading and Unpacking
          </p>

          <p className="text-sm text-neutral-600 text-center">
            We will unload the goods and safely relocate in your destination
          </p>
        </BackgroundGradient>
      </div>
    </section>
  );
}
