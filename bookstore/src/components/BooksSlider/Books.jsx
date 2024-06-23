import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Book4 from "../../assets/books/book4.jpg";
import Book5 from "../../assets/books/book5.jpg";
import { FaStar } from "react-icons/fa6";



const booksData = [
  {
    id: 1,
    img: Book1,
    title: "주술회전 26 쿼드러플...",
    rating: 5.0,
    author: "아쿠타미 게게 (지은이)",
  },
  {
    id: 2,
    img: Book2,
    title: "그의 운명에 대한 ...",
    rating: 4.5,
    author: "유시민 (지은이)",
  },
  {
    id: 3,
    img: Book3,
    title: "허송세월",
    rating: 4.7,
    author: "김훈 (지은이)",
  },
  {
    id: 4,
    img: Book4,
    title: "THE MONEY BOOK ... ",
    rating: 4.4,
    author: "토스 (지은이)",
  },
  {
    id: 5,
    img: Book5,
    title: "한국 인터넷 밈의 계보학 ",
    rating: 4.5,
    author: "김경수 (지은이)",
  },
];

const Books = () => {
  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* header */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              추천 도서
            </p>
            <h1 className="text-3xl font-bold">베스트셀러</h1>
            <p className="text-xs text-gray-400">
              오프라인+온라인에서 판매되는 도서와 eBook의 한달간 가장 많이 판매된 순위입니다.
            </p>
          </div>

          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card */}
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3 hover:scale-105 transition-transform duration-300 ease-in-out">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md transform hover:scale-110 transition-transform duration-300 ease-in-out"
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
                책 더보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
