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
        Pronoun | সর্বনাম
      </h3>
      <div className="p-5 my-10 bg-[#d4d4d4] border-t border-b">
        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            What is a Pronoun? | সর্বনাম কী?
          </h3>

          <p className="text-gray-700 text-[12px] sm:text-[20px]">
            A pronoun is a word used instead of a noun to avoid repeating the
            same name or object.
          </p>

          <p className="text-black/60 text-[10px] mt-2 sm:text-[18px]">
            নামের (বিশেষ্য পদ) পরিবর্তন বা পুনরাবৃত্তি এড়াতে যে শব্দ ব্যবহার করা
            হয়, তাকে প্রোনাউন বা সর্বনাম বলে।
          </p>
        </div>

        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            Why is Pronoun Important? | সর্বনাম কেন গুরুত্বপূর্ণ?
          </h3>

          <ul className="text-gray-700 text-[12px] sm:text-[20px] list-disc pl-5">
            <li>
              Stops you from repeating the same noun constantly. (একই নাম বারবার
              মুখে বলা বা লেখার একঘেয়েমি দূর করে।)
            </li>
            <li>
              Makes sentences sound natural, smooth, and easier to read.
              (বাক্যকে শ্রুতিমধুর, সহজ এবং স্বাভাবিকভাবে প্রকাশ করতে সাহায্য
              করে।)
            </li>
            <li>
              Shortens long noun phrases into single, quick words. (বড় বড় নাম বা
              শব্দগুচ্ছকে ছোট শব্দে রূপান্তর করে লেখা ও কথা বলার সময় বাঁচায়।)
            </li>
            <li>
              Connects ideas across sentences without confusing the listener.
              (শ্রোতার কাছে বিভ্রান্তি তৈরি না করে বাক্যের ভেতরের সম্পর্ক
              পরিষ্কার রাখে।)
            </li>
          </ul>
        </div>

        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            Pronoun are 8 parts | সর্বনাম 8 ভাগে বিভক্ত।
          </h3>

          <ul className="text-gray-700 text-[12px] sm:text-[20px] list-disc pl-5">
            <li>
              Personal Pronoun / ব্যক্তিবাচক সর্বনাম:
              <br></br>
              Replaces specific people or things. (নির্দিষ্ট ব্যক্তি বা বস্তুর
              পরিবর্তে বসে।)
            </li>
            <li>
              Possessive Pronoun / অধিকারবাচক সর্বনাম:
              <br></br>
              Shows ownership or possession. (মালিকানা বা নিজের অধিকার বোঝাতে
              ব্যবহৃত হয়।)
            </li>
            <li>
              Demonstrative Pronoun / নির্দেশক সর্বনাম
              <br></br>
              Shows ownership or possession. (মালিকানা বা নিজের অধিকার বোঝাতে
              ব্যবহৃত হয়।)
            </li>
            <li>
              Relative Pronoun / সম্বন্ধবাচক সর্বনাম
              <br></br>
              Connects two clauses and relates back to a noun. (দুটি বাক্যকে
              যুক্ত করে এবং আগের পদের সাথে সম্পর্ক তৈরি করে।)
            </li>
            <li>
              Reflexive Pronoun / আত্মবাচক সর্বনাম
              <br></br>
              Refers back to the subject performing the action. (কর্তা নিজের ওপর
              কাজের প্রভাব বোঝাতে এটি ব্যবহার করে।)
            </li>
            <li>
              Indefinite Pronoun / অনির্দিষ্টবাচক সর্বনাম
              <br></br>
              Refers to non-specific people, places, or things. (নির্দিষ্ট করে
              কোনো ব্যক্তি বা বস্তুকে না বুঝিয়ে অনির্দিষ্টভাবে বোঝায়।)
            </li>
            <li>
              Reciprocal Pronoun / পারস্পরিক সর্বনাম
              <br></br>
              Expresses a mutual action or relationship. (দুই বা ততোধিক ব্যক্তির
              মধ্যে পারস্পরিক সম্পর্ক বা কাজ বোঝায়।)
            </li>
          </ul>
          <br></br>
          <h5 className="text-gray-700 text-[12px] font-bold sm:text-[20px] pl-5">
            *Example Personal Pronoun / ব্যক্তিবাচক সর্বনাম:
            <p className="font-normal">
              <u>She</u> is drawing a picture.
            </p>
            <br></br>
            *Example Possessive Pronoun / অধিকারবাচক সর্বনাম:
            <p className="font-normal">
              This book is <u>mine.</u>
            </p>
            <br></br>
            *Example Demonstrative Pronoun / নির্দেশক সর্বনাম:
            <p className="font-normal">
              <u>This</u> is my school.
            </p>
            <br></br>
            *Example Relative Pronoun / সম্বন্ধবাচক সর্বনাম:
            <p className="font-normal">
              The boy <u>who</u> came here is my brother.
            </p>
            <br></br>
            *Example Indefinite Pronoun / অনির্দিষ্টবাচক সর্বনাম:
            <p className="font-normal">
              <u>Anyone</u> can solve this puzzle.
            </p>
            <br></br>
            *Example Interrogative Pronoun / প্রশ্নবাচক সর্বনাম:
            <p className="font-normal">
              <u>What</u> is your name?
            </p>
            <br></br>
            *Example Reciprocal Pronoun / পারস্পরিক সর্বনাম:
            <p className="font-normal">
              They always help <u>each other.</u>
            </p>
          </h5>
        </div>

        <div className="p-8 border bg-[#b5b5b5] rounded-md">
          <h2 className="text-[20px] font-bold mb-6 sm:text-[30px]">
            Example | উদাহরণ
          </h2>

          <div className="bg-[#272727] text-white p-5 rounded-md">
            <p className="font-bold text-[10px] sm:text-[25px] mt-2">
              Rahim is a good boy. <u>He</u> goes to school every day.
            </p>

            <p className="text-[10px] opacity-70 mt-4 sm:text-[16px]">
              The underlined is pronoun used insted of (Rahim), which is noun.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
