import React, { useState } from "react";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLocationArrow,
  FaMobileAlt,

} from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";

const LinksSection = [
  {
    title: "제휴포인트/상품권",
    link: "/#",
  },
  {
    title: "교보문고 기프트카드",
    link: "/#about",
  },
  {
    title: "대량구매",
    link: "/#contact",
  },
  {
    title: "리딩트리서비스(독서경영)",
    link: "/#blog",
  },
];

const FAQSection = [
  {
    title: "주문·결제",
    link: "/#faq1",
  },
  {
    title: "eBook",
    link: "/#faq2",
  },
  {
    title: "도서·상품정보",
    link: "/#faq3",
  },
];
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              THE Number 23
            </h1>
            <p className="">
              우리 동네 인터넷 서점, 출판유통생태계의 균형 발전, 지역서점 포털 사이트 '서점 넘버 23'입니다{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>경기도 성남시 수정구 수정로 398</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+82) 031-739-4000</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
            <a href="https://www.instagram.com/aladinbook/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="https://www.facebook.com/aladin/?locale=ko_KR" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="https://twitter.com/aladinbook?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-3xl" />
              </a>
              
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  (주)The Number 23
                </h1>
                <div className="mb-5">
                  <span>대표이사 민우</span>
                </div>
                <div className="mb-5">
                  <span>이메일 Bookstore@number23.co.kr</span>
                </div>
                <div className="mb-5">
                  <span>사업자등록 210-311-0232</span>
                </div>
                <div className="mb-5">
                  <span>통신판매업신고 초코02024호</span>
                </div>
                <div className="mb-5">
                  <span>호스팅 제공자 알라딘커뮤니케이션</span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-4">  
                  쇼핑팁
                </h1>
                <ul className="flex flex-col gap-6">
                  {LinksSection.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#174;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-4">
                  FAQ
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-6">
                  {FAQSection.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                      <span>&#174;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
          ⓒ The Number 23 Communication. All Rights Reserved.😊
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
