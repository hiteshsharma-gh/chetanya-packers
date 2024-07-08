"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import domestic from "@/public/domestic.png"
import corporate from "@/public/corporate.png"
import international from "@/public/international.png"
import local from "@/public/local.png"
import bulk from "@/public/bulk.png"
import others from "@/public/others.png"

export function Section2() {
  return (
    <div>
      <h2 className="text-4xl text-cyan-500 text-center font-semibold m-10 mt-20">Services offered by Chaitanya International Packers and Movers</h2>
      <div className="flex flex-wrap justify-center items-center px-3 gap-x-9 w-full z-0">
        <Link href='/services/domestic'>
          <CardContainer className="inter-var w-96 py-2">
            <CardBody className="bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-neutral-600"
              >
                Domestic Shifting
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-md max-w-sm mt-2"
              >
                Transporting your stuff safely and on time on household moving day will be a straight-forward and delightful experience
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={domestic}
                  height="1000"
                  width="1000"
                  className="h-44 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="domestic shifting"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>
        <Link href='/services/corporate'>
          <CardContainer className="inter-var w-96">
            <CardBody className="bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-neutral-600"
              >
                Corporate Shifting
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-md max-w-sm mt-2"
              >
                Moving an office can be a costly and time-consuming procedure. Chaitanya International Packers and Movers makes it an easy and comfortable journey
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={corporate}
                  height="1000"
                  width="1000"
                  className="h-44 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="domestic shifting"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>
        <Link href='/services/international'>
          <CardContainer className="inter-var w-96">
            <CardBody className="bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-neutral-600"
              >
                International Shifting
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-md max-w-sm mt-2"
              >
                Chaitanya International Packers and Movers seamlessly manages your business&apos;s global transition with expert packing, secure transport, and dedicated support every step of the way
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={international}
                  height="1000"
                  width="1000"
                  className="h-44 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="domestic shifting"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>
        <Link href='/services/local'>
          <CardContainer className="inter-var w-96">
            <CardBody className="bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-neutral-600"
              >
                Local Shifting
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-md max-w-sm mt-2"
              >
                Streamlining your local business move with precision, reliable transport, and dedicated support for a hassle-free experience
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={local}
                  height="1000"
                  width="1000"
                  className="h-44 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="domestic shifting"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>
        <Link href='/services/bulk'>
          <CardContainer className="inter-var w-96">
            <CardBody className="bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-neutral-600"
              >
                Bulk/Comercial Movement
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-md max-w-sm mt-2"
              >
                Expertly handling large-scale relocations with precision, secure logistics, and tailored solutions for seamless transitions
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={bulk}
                  height="1000"
                  width="1000"
                  className="h-44 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="domestic shifting"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>
        <Link href='/services/cars'>
          <CardContainer className="inter-var w-96">
            <CardBody className="bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-neutral-600"
              >
                Car Shipping
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-md max-w-sm mt-2"
              >
                Offering comprehensive solutions for local, international, and commercial relocations with expert handling, reliable transport, and personalized support
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={others}
                  height="1000"
                  width="1000"
                  className="h-44 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="domestic shifting"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        </Link>
      </div>
    </div>
  );
}
