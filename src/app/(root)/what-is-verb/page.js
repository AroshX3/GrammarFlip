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
        - Verb | ক্রিয়া
      </h3>
      <div className="p-5 my-10 bg-[#d4d4d4] border-t border-b">
        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            What is Verb? | ক্রিয়া কী?
          </h3>
          <p className="text-gray-700 text-[12px] sm:text-[20px]">
            A verb is a word that expresses an action, state, or occurrence.
          </p>
          <p className="text-black/60 text-[10px] mt-2 sm:text-[18px]">
            যে শব্দ কোনো কাজ, অবস্থা বা ঘটনার প্রকাশ করে, তাকে Verb বা ক্রিয়া
            বলে।
          </p>
        </div>

        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            Why is Verb Important? | ক্রিয়া কেন গুরুত্বপূর্ণ?
          </h3>

          <ul className="text-gray-700 text-[12px] sm:text-[20px] list-disc pl-5">
            <li>
              Shows what someone or something does. (কে কী কাজ করছে তা প্রকাশ
              করে।)
            </li>
            <li>
              Helps form complete sentences. (সম্পূর্ণ বাক্য গঠনে সাহায্য করে।)
            </li>
            <li>
              Expresses actions, conditions, and events. (কাজ, অবস্থা ও ঘটনা
              প্রকাশ করে।)
            </li>
            <li>
              Makes communication meaningful. (বাক্যকে অর্থপূর্ণ করে তোলে।){" "}
            </li>
          </ul>
        </div>

        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            Verb are mainly 3 parts | ক্রিয়া মূলত 3 ভাগে বিভক্ত।
          </h3>

          <ul className="text-gray-700 text-[12px] sm:text-[20px] list-disc pl-5">
            <li>
              Main Verb / প্রধান ক্রিয়া; Shows the main action in a sentence.
            </li>
            <li>
              Auxiliary Verb / সাহায্যকারী ক্রিয়া; Helps the main verb express
              tense, voice, or mood.
            </li>
            <li>
              Modal Verb / ভাববাচক ক্রিয়া; Shows ability, permission,
              possibility, advice, or necessity.
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
            <br></br>
            *Example Numeral Adjective:
            <p className="font-normal">
              There are <u>five</u> books on the table.
            </p>
            <br></br>
            *Example Demonstrative Adjective:
            <p className="font-normal">
              <u>This</u> car is very expensive.
            </p>
            <br></br>
            *Example Possessive Adjective:
            <p className="font-normal">
              <u>My</u> brother is a doctor.
            </p>
            <br></br>
            *Example Interrogative Adjective:
            <p className="font-normal">
              <u>Which</u> color do you like?
            </p>
            <br></br>
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
              The children <u>are playing</u> in the park.
            </p>
            <p className="text-[10px] opacity-70 mt-4 sm:text-[16px]">
              The underlined words are verbs because they show the action being
              performed.
            </p>
            <p className="text-[10px] opacity-70 mt-4 sm:text-[16px]">
              রেখাঙ্কিত শব্দগুলো ক্রিয়াপদ, কারণ এগুলো সম্পাদিত কাজটি নির্দেশ করে।
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
