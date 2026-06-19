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
        - Parts Of Speech | পদের অংশ
      </h3>
      <div className="p-5 my-10 bg-[#d4d4d4] border-t border-b">
        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            What is Parts Of Speech? | পদের অংশ কী?
          </h3>

          <p className="text-gray-700 text-[12px] sm:text-[20px]">
            Parts of speech are the categories that words are placed into based
            on their job and meaning in a sentence.
          </p>

          <p className="text-black/60 text-[10px] mt-2 sm:text-[18px]">
            বাক্যে শব্দের কাজ ও অর্থের ওপর ভিত্তি করে সেগুলোকে যে বিভিন্ন
            শ্রেণীতে ভাগ করা হয়, তাকেই পদ বা পার্টস অফ স্পিচ বলা হয়।
          </p>
        </div>

        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            Why is Parts of speech Important? | পদ কেন গুরুত্বপূর্ণ
          </h3>

          <ul className="text-gray-700 text-[12px] sm:text-[20px] list-disc pl-5">
            <li>
              Stops Confusion: It helps you place words in the correct order so
              people can understand your exact meaning.
            </li>
            <li>
              Fixes Mistakes: It allows you to find and correct errors in your
              own writing and speaking.
            </li>
            <li>
              Improves Writing: It helps you use a wider variety of words to
              make your sentences more interesting.
            </li>
            <li>
              Helps Learn Languages: Once you know parts of speech in English,
              it becomes much easier to learn the grammar of any other language.
            </li>
            <br></br>
            <li>
              বিভ্রান্তি দূর করে: এটি শব্দগুলোকে সঠিক নিয়মে সাজাতে সাহায্য করে,
              যাতে অন্যেরা আপনার কথার আসল অর্থ সহজে বুঝতে পারে।
            </li>
            <li>
              ভুল সংশোধন করে: এটি নিজের লেখার বা বলার মধ্যকার ব্যাকরণগত ভুলগুলো
              খুঁজে বের করতে এবং তা ঠিক করতে সাহায্য করে।
            </li>
            <li>
              লেখার মান বাড়ায়: এটি বাক্যকে আরও আকর্ষণীয় ও সুন্দর করার জন্য
              বিভিন্ন ধরণের শব্দের সঠিক ব্যবহার শেখায়।
            </li>
            <li>
              অন্য ভাষা শিখতে সাহায্য করে: ইংরেজিতে পার্টস অফ স্পিচ ভালোভাবে
              বুঝলে, যেকোনো নতুন ভাষার ব্যাকরণ শেখা অনেক সহজ হয়ে যায়।
            </li>
          </ul>
        </div>

        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            Parts Of Speech are 8 parts | পদ বা পার্টস অফ স্পিচ 8 ভাগে বিভক্ত।
          </h3>

          <ul className="text-gray-700 text-[12px] sm:text-[20px] list-disc pl-5">
            <li>
              <Link className="underline" href="/what-is-noun">
                Noun
              </Link>
            </li>
            <li>Pronoun</li>
            <li>Adjective</li>
            <li>Verb</li>
            <li>Adverb</li>
            <li>Preposition</li>
            <li>Conjunction</li>
            <li>Interjection</li>
            <br></br>
            <li>
              <Link className="underline" href="/what-is-noun">
                বিশেষ্য
              </Link>
            </li>
            <li>সর্বনাম</li>
            <li>বিশেষণ</li>
            <li>ক্রিয়া</li>
            <li>ক্রিয়াবিশেষণ</li>
            <li>অব্যয়</li>
            <li>সংযোগ</li>
            <li>বিস্ময়সূচক</li>
          </ul>
        </div>

        <div className="p-8 border bg-[#b5b5b5] rounded-md">
          <h2 className="text-[20px] font-bold mb-6 sm:text-[30px]">
            Example | উদাহরণ
          </h2>

          <div className="bg-[#272727] text-white p-5 rounded-md">
            <p className="text-[12px] sm:text-[20px]">Correct:</p>

            <p className="font-bold text-[15px] sm:text-[25px] mt-2">
              Wow! The young boy quickly ran to school, and he studied hard.
            </p>

            <p className="text-[10px] opacity-70 mt-4 sm:text-[16px]">
              This sentence follows Parts of speech rules and is easy to
              understand.
            </p>
          </div>

          <div className="bg-[#272727] text-white p-5 rounded-md mt-4">
            <p className="text-[12px] sm:text-[20px]">Incorrect:</p>

            <p className="font-bold text-[15px] sm:text-[25px] mt-2">
              The boys walks to school yesterday.
            </p>

            <p className="text-[10px] opacity-70 mt-4 sm:text-[16px]">
              This sentence follows Parts of speech rules and is easy to
              understand.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
