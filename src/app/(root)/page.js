"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

export default function Home() {

  useEffect(() => {
    const hasSeenAlert = sessionStorage.getItem("seenAnnouncement");

    if (!hasSeenAlert) {
      alert(
        "Hello Visitor, Small announcement the Site is being developed currently, If you find any errors or bugs then its resonable. Please remain patient and Thank you for visiting.. ||  নমস্কার দর্শক, একটি ছোট ঘোষণা: সাইটটি বর্তমানে নির্মাণাধীন। আপনি যদি কোনো ত্রুটি বা বাগ খুঁজে পান, তবে তা স্বাভাবিক। অনুগ্রহ করে ধৈর্য ধরুন এবং পরিদর্শনের জন্য আপনাকে ধন্যবাদ।"
      );

      sessionStorage.setItem("seenAnnouncement", "true");
    }
  }, []);

  return (
    <>
      <section>
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-center items-center sm:py-7 text-center">
            <Link href="/">
              <h2
                id="toppart"
                className="text-[40px] text-[#191919] py-0 pt-5 font-bold sm:text-[100px]"
              >
                GrammarFlip
              </h2>
            </Link>
            <p className="text-gray-600 font-semibold text-[5px] sm:text-[15px] hover:text-gray-700 cursor-pointer">
              <Link href=''>By AroshX3</Link>
            </p>
          </div>
          <p className="text-[10px] text-gray-500 sm:text-[20px]">
            Flip any sentence. Understand the grammar
          </p>
          <div className="pt-20">
            <Link
              className="bg-[#1b1b1b] p-4 text-white rounded-lg font-semibold text-[12px] transition sm:text-[18px] p-6 hover:bg-white hover:text-black border"
              href="/searchSection"
            >
              Get Started || শুরু করুন
            </Link>
          </div>
        </div>

        <div className="p-5 my-20 bg-[#d4d4d4] border-t border-b">
          <div className=" pb-5">
            <div className="border-b border-black/25 rounded-md p-5 mb-5">
              <h3 className="font-semibold text-[#191919] font- text-center text-xl text-[25px] sm:text-[50px]">
                Why GrammarFlip? || কেন গ্রামারফ্লিপ?
              </h3>
            </div>
            <div className="border-t border-b border-black/25 mb-4 rounded-md p-5">
              <h3 className="text-[20px] mb-2 sm:text-[40px]">
                Grammar Search | ব্যাকরণ অনুসন্ধান
              </h3>
              <p className="text-gray-600 text-[10px] sm:text-[20px]">
                Search grammar topics and get easy explanations with examples.
                <br></br>
                ব্যাকরণের বিষয়গুলো অনুসন্ধান করুন এবং উদাহরণসহ সহজ ব্যাখ্যা
                পান।
              </p>
            </div>
            <div className="border-t border-b border-black/25 rounded-md p-5">
              <h3 className="text-[20px] mb-2 sm:text-[40px]">
                English & বাংলা
              </h3>
              <p className="text-gray-600 text-[10px] sm:text-[20px]">
                Use the website in your preferred language.
                <br></br>
                আপনার পছন্দের ভাষায় ওয়েবসাইটটি ব্যবহার করুন।
              </p>
            </div>
                        <div className="border-t border-b border-black/25 rounded-md mb-4 p-5">
              <h3 className="text-[20px] mb-2 sm:text-[40px]">
                Sentence Analyzer | বাক্য বিশ্লেষক
              </h3>
              <p className="text-gray-600 text-[10px] sm:text-[20px]">
                Break any sentence into Subject, Verb, Object, Tense, Voice and
                more.
                <br></br>
                যেকোনো বাক্যকে কর্তা, ক্রিয়া, কর্ম, কাল, বাচ্য এবং আরও অনেক
                কিছুতে বিভক্ত করুন।
              </p>
            </div>
          </div>
          <div className="p-10 border bg-[#b5b5b5]">
            <div>
              <h2 className="text-[20px] font-bold mb-6 sm:text-[30px]">
                Example Analysis | উদাহরণ বিশ্লেষণ
              </h2>
              <div className="mb-6">
                <strong className="text-green-700">Input:</strong>
                <p className="mt-2 text-lg">
                  The boy is playing football in the field ; ছেলেটি মাঠে ফুটবল
                  খেলছে।
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 pb-5 gap-4 border-b border-black/50 rounded-md">
              <div>✅ Subject: The boy</div>
              <div>✅ Verb: is playing</div>
              <div>✅ Object: football</div>
              <div>✅ Sentence Type: Assertive</div>
              <div>✅ Tense: Present Continuous</div>
              <div>✅ Voice: Active Voice</div>
            </div>
            <div className="grid sm:grid-cols-2 p-5 gap-4 border-b border-black/50 rounded-md">
              <div>✅ Subject: ছেলেটি</div>
              <div>✅ Verb: খেলছে</div>
              <div>✅ Object: ফুটবল</div>
              <div>✅ বাক্যের ধরণ: বিবৃতিমূলক</div>
              <div>✅ Tence: বর্তমান চলমান</div>
              <div>✅ Voice: সক্রিয় কণ্ঠস্বর</div>
            </div>
          </div>
        </div>

        <footer id="thispart" className="border-t border-black/20 py-8 px-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm sm:text-base">
              Made with ❤️ by <span className="font-bold">AroshX3</span>
            </p>

            <div className="flex items-center gap-5 text-2xl">
              <a
                href="https://www.instagram.com/guccibanana_aroshx3/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100074368103630"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
          <h2 className="text-center text-gray-400 py-5">The End :(</h2>
          <p className="text-center text-gray-500 pt-20">
            You reached the end 
            <br></br>
            আপনি শেষ প্রান্তে পৌঁছে গেছেন
          </p>
        </footer>
      </section>
    </>
  );
}
