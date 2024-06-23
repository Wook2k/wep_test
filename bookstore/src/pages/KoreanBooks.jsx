import React from 'react';
import { FaStar } from 'react-icons/fa';
import Img1 from "./img/Recommended/book1.jpg";
import Img2 from "./img/Recommended/book2.jpg";
import Img3 from "./img/Recommended/book3.jpg";

import Img4 from "./img/New/book1.jpg";
import Img5 from "./img/New/book2.jpg";
import Img6 from "./img/New/book3.jpg";
import Img7 from "./img/New/book4.jpg";
import Img8 from "./img/New/book5.jpg";
import Img9 from "./img/New/book6.jpg";
import Img10 from "./img/New/book7.jpg";
import Img11 from "./img/New/book8.jpg";
import Img12 from "./img/New/book9.jpg";
import Img13 from "./img/New/book10.jpg";

import Footer from "./Footer/Footer";

const KoreanBooks = ({ handleOrderPopup }) => {
  const bestSellerData = [
    {
      id: 1,
      img: Img1,
      title: "그의 운명에 대한 ...",
      description:
        "책은 우리가 겪어낸 지난 2년을 정리하고 다시 해체해 냉철하게 원인과 결과를 분석하며 개인과 사회가 겪어야 했던 변화들을 일목요연하게 보여준다. 윤 정권탄생과 총선결과, 여론조사데이터 분석부터 정치인, 정당, 언론, 권력기관 등 서로 다른 정치지형들이 무엇을 추구하며 왜 그렇게 행동하는지, 어떤 방식으로 작동해 목적을 이루고 사회에 영향력을 행사하는지, 시대의 큰 흐름에서 읽어낼 수 있도록 탄탄한 역사적 인문학적 배경을 통해 설명한다.",
    },
    {
      id: 2,
      img: Img2,
      title: "주술회전 26 쿼드러플 특장판",
      description:
        "급이 다른 규모로 펼쳐지는 고죠 VS. 스쿠나의 최강 결전…! 영역의 동시 전개와 타서 끊어진 술식의 회복을 반복하던 전투는, 마허라가 소환되고 고죠의 영역 전개가 불가능해지면서 균형이 무너진 것처럼 보이는데――?!",
    },
    {
      id: 3,
      img: Img3,
      title: "허송세월",
      description:
        "소설가 김훈이 5년 만에 산문집으로 돌아왔다. 오랜 시간 글을 쓰며 치열하게 살아온, 이제는  여기저기서 또래들이 죽었다는 소식 을 들으며, 늘그막의 세월을 다시 치열하게 보내는 작가의 이야기가 밀도 있게 담겨 있다. 일산 호수공원을 자주 산책하며 쓴 단상, 새와 나무 이야기, 작가가 사랑한 사람들, 그리고 삶과 죽음에 대한 이야기까지.",
    },
  ];

  const newBooksData = [
    {
      id: 4,
      img: Img4,
      genre: "경제/금융",
      title: "THE MONEY BOOK ... ",
      author: "토스 (지은이)",
    },
    {
      id: 5,
      img: Img5,
      genre: "인문학",
      title: "한국 인터넷 밈의 계보학 ",
      author: "김경수 (지은이)",
    },
    {
      id: 6,
      img: Img6,
      genre: "인문학",
      title: "한국 인터넷 밈의 계보학 ",
      author: "김경수 (지은이)",
    },
    {
      id: 7,
      img: Img7,
      genre: "인문학",
      title: "한국 인터넷 밈의 계보학 ",
      author: "김경수 (지은이)",
    },
    {
      id: 8,
      img: Img8,
      genre: "인문학",
      title: "한국 인터넷 밈의 계보학 ",
      author: "김경수 (지은이)",
    },
    {
      id: 9,
      img: Img9,
      genre: "인문학",
      title: "한국 인터넷 밈의 계보학 ",
      author: "김경수 (지은이)",
    },
    {
      id: 10,
      img: Img10,
      genre: "인문학",
      title: "한국 인터넷 밈의 계보학 ",
      author: "김경수 (지은이)",
    },
    {
      id: 11,
      img: Img11,
      genre: "인문학",
      title: "한국 인터넷 밈의 계보학 ",
      author: "김경수 (지은이)",
    },
    {
      id: 12,
      img: Img12,
      genre: "인문학",
      title: "한국 인터넷 밈의 계보학 ",
      author: "김경수 (지은이)",
    },
    {
      id: 13,
      img: Img13,
      genre: "인문학",
      title: "한국 인터넷 밈의 계보학 ",
      author: "김경수 (지은이)",
    },
  ];

  return (
    <>
      <span id="korean-books"></span>
      <div className="py-10">
        <div className="container">
          {/* 추천 도서 섹션 */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              추천 도서
            </p>
            <h1 className="text-3xl font-bold">추천 도서</h1>
          </div>

          {/* 베스트셀러 섹션 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {bestSellerData.map((book) => (
              <div
                key={book.id}
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[220px]">
                  <p className="text-xs text-gray-400">{book.genre}</p>
                  <img
                    src={book.img}
                    alt=""
                    className="max-w-[150px] block mx-auto transform -translate-y-14 group-hover:scale-105  duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{book.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {book.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={handleOrderPopup}
                  >
                    바로구매
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 신간 도서 섹션 */}
          <div className="mt-14 mb-12 border-t-2 border-gray-300 py-10">
            <div className="text-center mb-10 max-w-[600px] mx-auto">
              <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                최신 출간 도서
              </p>
              <h1 className="text-3xl font-bold">신간 도서</h1>
              <p className="text-xs text-gray-400">
                오프라인+온라인에서 최근에 출간된 책들입니다.
              </p>
            </div>

            {/* 최신 출간 도서 목록 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {newBooksData.map(({ id, img, title, author, genre }) => (
                <div key={id} className="group space-y-3 hover:scale-105 transition-transform duration-300 ease-in-out">
                  <p className="text-xl text-black-600 mb-2 mx-auto">{genre}</p>
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 책 더보기 버튼 */}
          <div className="flex justify-center mt-10 mb-10">
            <button className="text-center cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              책 더보기
              
            </button>
          </div>
          <div className="mt-100 mb-60 py-10">
            <Footer></Footer>
        </div>
        </div>
      </div>
    </>
  );
};

export default KoreanBooks;
