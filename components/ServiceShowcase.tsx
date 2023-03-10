import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { AiOutlineThunderbolt } from "react-icons/ai";
import { urlFor } from "../sanity";

const ServiceShowcase = ({ article }: any) => {
 console.log(article)

  return (
    <div className="lg:px-[10em] md:px-[6rem] px-[1rem] flex flex-col py-[2em]  ">
      <Link
        href={"/services"}
        className="w-[8em] md:text-[24px] text-[18px] text-center  py-[1rem] bg-pri text-white font-[500]"
      >
        Go Back
      </Link>
      <div className="w-full">
        <div className="my-[4em] ">
          <p className="font-[900] md:text-[5em] text-[3em]">{article.title}</p>
          <p className="bg-pri p-4 text-white md:text-[18px] ">
            {article.description}
          </p>
          <img
            alt={article.title}
            src= {urlFor(article.image).url()}
            // width={1000}
            // height={500}
          />
        </div>
        <div>
          {article?.body?.map((item: any, index:any) => (
            <p key={index} className="md:text-[24px] text-[18px] pb-[1em] ">{item}</p>
          ))}
        </div>

        <div>
          <p>{article?.bullets?.description}</p>
          {article?.bulletPoints?.body?.map((item: any, index: any) => (
            <p key={index} className="md:text-[24px] text-[18px] pb-[1em]">
              <span>{index + 1}</span>. {"  "} <span>{item}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceShowcase;
