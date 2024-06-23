import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/website/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "홈",
    link: "/",
  },
];

const list = [
  {
    name: "국내도서",
    link: "/korean-books",
  },
  {
    name: "해외도서",
    link: "/foreign-books",
  },
  {
    name: "신작도서",
    link: "/new-books",
  },
  {
    name: "만화",
    link: "/comics",
  },
  {
    name: "소설/시/희곡",
    link: "/novels-poetry-plays",
  },
  {
    name: "수험서/자격증",
    link: "/exam-preparation-certification",
  },
  {
    name: "어린이",
    link: "/childrens-books",
  },
  {
    name: "에세이",
    link: "/essays",
  },
  {
    name: "여행",
    link: "/travel",
  },
  {
    name: "역사",
    link: "/history",
  },
  {
    name: "예술/대중문화",
    link: "/arts-pop-culture",
  },
  {
    name: "외국어",
    link: "/foreign-languages",
  },
];

const DropdownLinks = [
  {
    name: "이 주의 책",
    link: "/books-of-the-week",
  },
  {
    name: "베스트 셀러",
    link: "/best-sellers",
  },
  {
    name: "전체 도서",
    link: "/all-books",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const handleClick = (event) => {
    event.preventDefault();
    handleOrderPopup();
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
              <img src={Logo} alt="Logo" className="w-10" />
              더 넘버 23
            </Link>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div>
              <DarkMode />
            </div>
            <ul className="hidden sm:flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.link}
                    className="inline-block py-4 px-4 hover:text-primary duration-200"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
              <li className="group relative cursor-pointer">
                <div className="flex h-[72px] items-center gap-[2px]">
                  분야 목록{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 z-[9999] hidden w-96 h-100 rounded-md bg-white p-2 text-black group-hover:block">
                  <ul className="grid grid-cols-4 gap-2">
                    {list.map((data) => (
                      <li key={data.name}>
                        <Link
                          className="inline-block rounded-md p-2 hover:bg-primary/20"
                          to={data.link}
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="group relative cursor-pointer">
                <div className="flex h-[72px] items-center gap-[2px]">
                  빠른 링크{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block">
                  <ul className="space-y-3">
                    {DropdownLinks.map((data) => (
                      <li key={data.name}>
                        <Link
                          className="inline-block rounded-md p-2 hover:bg-primary/20"
                          to={data.link}
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
            <Link
              to="/shopping-cart"
              className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
            >
              장바구니
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
