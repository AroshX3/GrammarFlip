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
        - Adverb | ক্রিয়া-বিশেষণ
      </h3>
      <div className="p-5 my-10 bg-[#d4d4d4] border-t border-b">
        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            What is Adverb? | ক্রিয়া-বিশেষণ কী?
          </h3>
          <p className="text-gray-700 text-[12px] sm:text-[20px]">
            {" "}
            An adverb is a word that modifies a verb, an adjective, or another
            adverb.{" "}
          </p>
          <p className="text-black/60 text-[10px] mt-2 sm:text-[18px]">
            {" "}
            যে শব্দ কোনো Verb, Adjective অথবা অন্য Adverb-এর অর্থকে বিশেষভাবে
            প্রকাশ করে, তাকে Adverb বা ক্রিয়া-বিশেষণ বলে।{" "}
          </p>
        </div>

        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            Why is Adverb Important? | ক্রিয়া-বিশেষণ কেন গুরুত্বপূর্ণ?
          </h3>

          <ul className="text-gray-700 text-[12px] sm:text-[20px] list-disc pl-5">
            <li>
              Gives more information about an action. (কোনো কাজ সম্পর্কে আরও
              তথ্য দেয়।)
            </li>
            <li>
              Describes how, when, where, or how often something happens.
              (কীভাবে, কখন, কোথায় বা কতবার কিছু ঘটে তা বোঝায়।)
            </li>
            <li>
              Makes sentences more detailed and meaningful. (বাক্যকে আরও
              অর্থপূর্ণ ও বিস্তারিত করে।)
            </li>
            <li>
              Improves both speaking and writing. (কথা বলা ও লেখাকে আরও উন্নত
              করে।)
            </li>
          </ul>
        </div>

        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            Adverb are mainly 5 parts | ক্রিয়া-বিশেষণ মূলত 5 ভাগে বিভক্ত।
          </h3>

          <ul className="text-gray-700 text-[12px] sm:text-[20px] list-disc pl-5">
            <li>
              Adverb of Manner / প্রকারবাচক ক্রিয়া বিশেষণ; Describes how an
              action is performed.
            </li>
            <li>
              Adverb of Time / কালবাচক ক্রিয়া বিশেষণ; Describes when an action
              happens.
            </li>
            <li>
              Adverb of Place / স্থানবাচক ক্রিয়া বিশেষণ; Describes where an
              action happens.
            </li>
            <li>
              Adverb of Frequency / বারম্বারতাবাচক ক্রিয়া বিশেষণ; Describes how
              often an action happens.
            </li>
            <li>
              Adverb of Degree / পরিমাণবাচক ক্রিয়া বিশেষণ; Describes the
              intensity or degree of something.
            </li>
          </ul>
          <br></br>
          <h5 className="text-gray-700 text-[12px] font-bold sm:text-[20px] pl-5">
            *Example Adverb of Manner:
            <p className="font-normal">
              She sings <u>beautifully</u>.
            </p>
            <br /> *Example Adverb of Time:
            <p className="font-normal">
              I will call you <u>tomorrow</u>.
            </p>
            <br /> *Example Adverb of Place:
            <p className="font-normal">
              Please sit <u>here</u>.
            </p>
            <br /> *Example Adverb of Frequency:
            <p className="font-normal">
              He <u>always</u> arrives on time.
            </p>
            <br /> *Example Adverb of Degree:
            <p className="font-normal">
              The water is <u>very</u> cold.
            </p>
          </h5>
        </div>

        <div className="bg-[#272727] text-white p-5 rounded-md">
          <p className="font-bold text-[10px] sm:text-[25px] mt-2">
            The boy runs <u>quickly</u>.
          </p>
          <p className="text-[10px] opacity-70 mt-4 sm:text-[16px]">
            The underlined word is an adverb because it describes how the boy
            runs.
          </p>
          <p className="text-[10px] opacity-70 mt-4 sm:text-[16px]">
            রেখাঙ্কিত শব্দটি ক্রিয়া বিশেষণ, কারণ এটি ছেলেটি কীভাবে দৌড়ায় তা
            বর্ণনা করে।
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
