import React from "react";
import { FaCircleChevronLeft } from "react-icons/fa6";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="p-6">
        <Link href="/searchSection">
          <FaCircleChevronLeft
            title="Go back"
            className="text-[30px] sm:text-[50px]"
          />
        </Link>
      </div>
      <h3 className="text-[20px] font-thin pl-10 pt-14 border-b rounded-full border-black/35 sm:text-[60px] sm:pl-36">
        - Noun | বিশেষ্য
      </h3>
      <div className="p-5 my-10 bg-[#d4d4d4] border-t border-b">
        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            What is Noun? | বিশেষ্য কী?
          </h3>

          <p className="text-gray-700 text-[12px] sm:text-[20px]">
            A noun is a word that names a person, place, thing, animal, quality,
            or idea.
          </p>

          <p className="text-black/60 text-[10px] mt-2 sm:text-[18px]">
            যে শব্দ দ্বারা কোনো ব্যক্তি, বস্তু, স্থান, দোষ, গুণ, অবস্থা বা
            সমষ্টির নাম বোঝায়, তাকে Noun বা বিশেষ্য বলে।
          </p>
        </div>

        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            Why is Noun Important? | বিশেষ্য কেন গুরুত্বপূর্ণ?
          </h3>

          <ul className="text-gray-700 text-[12px] sm:text-[20px] list-disc pl-5">
            <li>They Identify the Subject (কারা বা কি তা চিহ্নিত করে)</li>
            <li>They Function as Objects (উদ্দেশ্য বা লক্ষ্য বোঝায়)</li>
            <li>They Give Structure to Sentences (বাক্যের গঠন তৈরি করে)</li>
            <li>They Anchor Abstract Concepts (অদৃশ্য অনুভূতি প্রকাশ করে)</li>
            <li>They Provide Clarity and Specificity (নির্দিষ্ট তথ্য দেয়)</li>
          </ul>
        </div>

        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            Noun are 2 parts | বিশেষ্য 2 ভাগে বিভক্ত।
          </h3>

          <ul className="text-gray-700 text-[12px] sm:text-[20px] list-disc pl-5">
            <li>
              Concrete Noun (ইন্দ্রিয়গ্রাহ্য বিশেষ্য): Things you can see,
              touch, hear, smell, or taste. (যা দেখা বা ছোঁয়া যায়)
            </li>
            <li>
              Abstract Noun (গুণবাচক বিশেষ্য): Concepts, feelings, or qualities
              you cannot touch physically. (যা ছোঁয়া যায় না, শুধু অনুভব করা যায়)
            </li>
          </ul>
          <br></br>
          <h5 className="text-gray-700 text-[12px] font-bold sm:text-[20px] pl-5">
            *Example Concrete:{" "}
            <p className="font-normal">
              Water (পানি), Diamond (হীরা), Music (গান/সঙ্গীত), Perfume
              (পারফিউম), Phone (ফোন)
            </p>
            <br></br>
            *Example Abstract:{" "}
            <p className="font-normal">
              Love (ভালোবাসা), Honesty (সততা), Anger (রাগ), Poverty (দারিদ্র্য),
              Knowledge (জ্ঞান)
            </p>
          </h5>
        </div>

        <div className="p-8 border bg-[#b5b5b5] rounded-md">
          <h2 className="text-[20px] font-bold mb-6 sm:text-[30px]">
            Example | উদাহরণ
          </h2>

          <div className="bg-[#272727] text-white p-5 rounded-md">
            <p className="font-bold text-[10px] sm:text-[25px] mt-2">
              Person (ব্যক্তি): <br></br> Teacher (শিক্ষক), Student (ছাত্র),
              Rohit (রোহিত).
              <br></br>
              Place (স্থান):<br></br>  Bangladesh (বাংলাদেশ), Library
              (গ্রন্থাগার), City (শহর).
              <br></br>
              Thing (বস্তু): <br></br>  Computer (কম্পিউটার), Pen (কলম), Chair (চেয়ার).
            </p>

            <p className="text-[10px] opacity-70 mt-4 sm:text-[16px]">
              These are general words used to name any person, place, thing,
              animal, or idea.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
