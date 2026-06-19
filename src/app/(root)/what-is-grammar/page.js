import React from 'react'
import { FaCircleChevronLeft } from "react-icons/fa6";
import Link from "next/link";


const page = () => {
  return (
    <>
      <div className='p-6'>
        <Link href="/searchSection">
          <FaCircleChevronLeft
            title="Go back"
            className="text-[30px] sm:text-[50px]"
          />
        </Link>
      </div>
      <h3 className="text-[20px] text-green-800 font-thin pl-10 pt-14 border-b rounded-full border-black/35 sm:text-[60px] sm:pl-36">
        - What is Grammar | ব্যাকরণ কি
      </h3>
      <div className="p-5 my-10 bg-[#d4d4d4] border-t border-b">
        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            What is Grammar? | ব্যাকরণ কী?
          </h3>

          <p className="text-gray-700 text-[12px] sm:text-[20px]">
            Grammar is the set of rules that helps us form correct and
            meaningful sentences in a language.
          </p>

          <p className="text-black/60 text-[10px] mt-2 sm:text-[18px]">
            ব্যাকরণ হলো এমন কিছু নিয়মের সমষ্টি যা আমাদের সঠিক ও অর্থপূর্ণ বাক্য
            গঠন করতে সাহায্য করে।
          </p>
        </div>

        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            Why is Grammar Important? | ব্যাকরণ কেন গুরুত্বপূর্ণ?
          </h3>

          <ul className="text-gray-700 text-[12px] sm:text-[20px] list-disc pl-5">
            <li>Helps us write correctly.</li>
            <li>Improves communication.</li>
            <li>Makes sentences easier to understand.</li>
            <li>Reduces mistakes in speaking and writing.</li>
            <br></br>
            <li>সঠিকভাবে লিখতে সাহায্য করে।</li>
            <li>যোগাযোগ উন্নত করে।</li>
            <li>বাক্য বোঝা সহজ করে তোলে।</li>
            <li>কথা বলা ও লেখার ভুল কমায়।</li>
          </ul>
        </div>

        <div className="border-b border-black/25 rounded-md p-5 mb-4">
          <h3 className="text-[20px] mb-2 sm:text-[40px]">
            Main Parts of Grammar | ব্যাকরণের প্রধান অংশ
          </h3>

          <ul className="text-gray-700 text-[12px] sm:text-[20px] list-disc pl-5">
            <li>Nouns</li>
            <li>Pronouns</li>
            <li>Verbs</li>
            <li>Adjectives</li>
            <li>Adverbs</li>
            <li>Tenses</li>
            <li>Sentences</li>
            <li>Voice</li>
          </ul>
        </div>

        <div className="p-8 border bg-[#b5b5b5] rounded-md">
          <h2 className="text-[20px] font-bold mb-6 sm:text-[30px]">
            Example | উদাহরণ
          </h2>

          <div className="bg-[#272727] text-white p-5 rounded-md">
            <p className="text-[12px] sm:text-[20px]">Correct:</p>

            <p className="font-bold text-[15px] sm:text-[25px] mt-2">
              She goes to school every day.
            </p>

            <p className="text-[10px] opacity-70 mt-4 sm:text-[16px]">
              This sentence follows grammar rules and is easy to understand.
            </p>
          </div>

          <div className="bg-[#272727] text-white p-5 rounded-md mt-4">
            <p className="text-[12px] sm:text-[20px]">Incorrect:</p>

            <p className="font-bold text-[15px] sm:text-[25px] mt-2">
              She go to school every day.
            </p>

            <p className="text-[10px] opacity-70 mt-4 sm:text-[16px]">
              This sentence contains a grammar mistake.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page