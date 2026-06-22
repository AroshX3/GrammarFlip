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
        - Adjective | বিশেষণ
      </h3>
      <div className="p-5 my-10 bg-[#d4d4d4] border-t border-b">
        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            What is Adjective? | বিশেষণ কী?
          </h3>

          <p className="text-gray-700 text-[12px] sm:text-[20px]">
            An adjective is a word that describes or modifies a noun or pronoun.
          </p>

          <p className="text-black/60 text-[10px] mt-2 sm:text-[18px]">
            যে শব্দ কোনো বিশেষ্য (Noun) বা সর্বনাম (Pronoun)-এর গুণ, দোষ,
            অবস্থা, সংখ্যা বা পরিমাণ প্রকাশ করে, তাকে Adjective বা বিশেষণ বলে।
          </p>
        </div>

        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            Why is Adjective Important? | বিশেষণ কেন গুরুত্বপূর্ণ?
          </h3>

          <ul className="text-gray-700 text-[12px] sm:text-[20px] list-disc pl-5">
            <li>
              {" "}
              Makes descriptions more clear and detailed. (কোনো ব্যক্তি বা
              বস্তুর বর্ণনা স্পষ্ট করে।)
            </li>
            <li>
              Adds quality and meaning to sentences. (বাক্যে অতিরিক্ত অর্থ ও
              বৈশিষ্ট্য যোগ করে।)
            </li>
            <li>
              Helps readers imagine things better. (পাঠককে বিষয়টি সহজে কল্পনা
              করতে সাহায্য করে।)
            </li>
            <li>
              Makes writing and speaking more interesting. (কথা ও লেখাকে আরও
              আকর্ষণীয় করে।)
            </li>
          </ul>
        </div>

        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            Adjective are 7 parts | বিশেষণ 7 ভাগে বিভক্ত।
          </h3>

          <ul className="text-gray-700 text-[12px] sm:text-[20px] list-disc pl-5">
            <li>
              Descriptive Adjective / গুণবাচক বিশেষণ; Describes quality or
              nature.
            </li>
            <li>
              Quantitative Adjective / পরিমাণবাচক বিশেষণ; Shows quantity or
              amount.
            </li>
            <li>
              Numeral Adjective / সংখ্যাবাচক বিশেষণ; Shows number or order.
            </li>
            <li>
              Demonstrative Adjective / নির্দেশক বিশেষণ; Points out a specific
              noun.
            </li>
            <li>Possessive Adjective / অধিকারবাচক বিশেষণ; Shows ownership.</li>
            <li>
              Interrogative Adjective / প্রশ্নবাচক বিশেষণ; Used with nouns to
              ask questions.
            </li>
            <li>
              Distributive Adjective / বণ্টনবাচক বিশেষণ; Refers to members of a
              group individually.
            </li>
          </ul>
          <br></br>
          <h5 className="text-gray-700 text-[12px] font-bold sm:text-[20px] pl-5">
            *Example Descriptive Adjective:
            <p className="font-normal">
              She is a <u>beautiful</u> girl.
            </p>
            <br></br>
            *Example Quantitative Adjective:
            <p className="font-normal">
              I drank <u>some</u> water.
            </p>
            *Example Numeral Adjective:
            <p className="font-normal">
              There are <u>five</u> books on the table.
            </p>
            *Example Demonstrative Adjective:
            <p className="font-normal">
              <u>This</u> car is very expensive.
            </p>
            *Example Possessive Adjective:
            <p className="font-normal">
              <u>My</u> brother is a doctor.
            </p>
            *Example Interrogative Adjective:
            <p className="font-normal">
              <u>Which</u> color do you like?
            </p>
            *Example Interrogative Adjective:
            <p className="font-normal">
              <u>Each</u> student received a certificate.
            </p>
          </h5>
        </div>

        <div className="p-8 border bg-[#b5b5b5] rounded-md">
          <h2 className="text-[20px] font-bold mb-6 sm:text-[30px]">
            Example | উদাহরণ
          </h2>

          <div className="bg-[#272727] text-white p-5 rounded-md">
            <p className="font-bold text-[10px] sm:text-[25px] mt-2">
              The <u>beautiful</u> girl is carrying a <u>red</u> bag.
            </p>

            <p className="text-[10px] opacity-70 mt-4 sm:text-[16px]">
              The underlined words are adjectives because they describe the
              noun.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
