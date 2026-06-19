import Link from 'next/link';
import React from 'react'
import { FaCircleChevronLeft } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";


const page = () => {
  return (
    <>
      <section className="">
        <div>
          <div className="w-full p-7">
            <Link href="/">
              <FaCircleChevronLeft
                title="Go back"
                className="text-[30px] sm:text-[50px]"
              />
            </Link>
            <div className="pt-3">
              <h3 className="text-[20px] font-thin pl-10 border-b rounded-full border-black/35 sm:text-[60px] sm:pl-36">
                - Search Section | অনুসন্ধান বিভাগ
              </h3>

              <h4 className="text-[10px] pt-1 pl-2 sm:text-[20px] sm:pl-4">
                Go to-{" "}
                <Link className="underline text-[purple]" href="">
                  GrammarFlip/Sentence Analyzer?
                </Link>
              </h4>

              <h4 className="text-[7px] opacity-70 pt-1 pl-2 sm:text-[16px] sm:pl-4">
                <Link className="underline text-[purple]" href="">
                  GrammarFlip/Sentence Analyzer
                </Link>
                -এ যাবেন?
              </h4>
            </div>
          </div>
          <div className="flex justify-center items-center p-3 sm:p-0">
            <div className="relative w-full sm:max-w-[670px]">
              <input
                placeholder="Search"
                className="w-full border border-black/40 rounded-full bg-[#ddd] text-[#1b1b1b] text-[15px] p-4 pr-12 font-bold sm:p-8 sm:pr-16 sm:text-[20px]"
              />
              <CiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-black/60 pointer-events-none sm:right-6 sm:text-3xl" />
            </div>
          </div>
        </div>
        <div className="p-5 grid gap-3 bg-[#d3d3d3] border border-black/50 rounded-lg mt-5 mb-5 sm:p-20 sm:mt-15">
          <div>
            <Link href="/what-is-grammar">
              <div className="bg-[#272727] text-white font-bold p-5 rounded-md sm:p-10">
                <h2 className="text-[20px] sm:text-[40px]">Grammar</h2>
                <p className="text-[10px] opacity-50 sm:text-[23px]">
                  Grammar is the set of rules that helps us...........
                  <br></br>
                  ব্যাকরণ হলো এমন কিছু নিয়মের সমষ্টি যা আমাদের...........
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/what-is-partsofspeech">
              <div className="bg-[#272727] text-white font-bold p-5 rounded-md sm:p-10">
                <h2 className="text-[20px] sm:text-[40px]">Parts Of Speech</h2>
                <p className="text-[10px] opacity-50 sm:text-[23px]">
                  Parts of speech are the categories that...........
                  <br></br>
                  বাক্যে শব্দের কাজ ও অর্থের ওপর ভিত্তি করে সেগুলোকে
                  যে...........
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/what-is-noun">
              <div className="bg-[#272727] text-white font-bold p-5 rounded-md sm:p-10">
                <div className="text-end">
                  <p className="font-thin opacity-50">PARTS OF SPEECH</p>
                </div>
                <h2 className="text-[20px] flex gap-2 sm:text-[40px]">Noun</h2>
                <p className="text-[10px] opacity-50 sm:text-[23px]">
                  A noun is a word that names...........
                  <br></br>
                  যে শব্দ দ্বারা কোনো ব্যক্তি,...........
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default page