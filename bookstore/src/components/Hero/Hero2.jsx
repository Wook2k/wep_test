import React, { useState, useEffect } from "react";
import Book1 from "../../assets/books/book2.jpg";
import Book2 from "../../assets/books/book1.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Vector from "../../assets/website/pattern8.png";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "그의 운명에 대한 아주 개인적인 생각",
    description:
      "책은 우리가 겪어낸 지난 2년을 정리하고 다시 해체해 냉철하게 원인과 결과를 분석하며 개인과 사회가 겪어야 했던 변화들을 일목요연하게 보여준다. 윤 정권탄생과 총선결과, 여론조사데이터 분석부터 정치인, 정당, 언론, 권력기관 등 서로 다른 정치지형들이 무엇을 추구하며 왜 그렇게 행동하는지, 어떤 방식으로 작동해 목적을 이루고 사회에 영향력을 행사하는지, 시대의 큰 흐름에서 읽어낼 수 있도록 탄탄한 역사적 인문학적 배경을 통해 설명한다.",
  },
  {
    id: 2,
    img: Book2,
    title: "주술회전 26 쿼드러플 특장판",
    description:
      "급이 다른 규모로 펼쳐지는 고죠 VS. 스쿠나의 최강 결전…! 영역의 동시 전개와 타서 끊어진 술식의 회복을 반복하던 전투는, 마허라가 소환되고 고죠의 영역 전개가 불가능해지면서 균형이 무너진 것처럼 보이는데――?!",
  },
  {
    id: 3,
    img: Book3,
    title: "허송세월",
    description:
      "'치열한 허송세월에 깃든 격렬한 삶의 문장들' 소설가 김훈이 5년 만에 산문집으로 돌아왔다. 오랜 시간 글을 쓰며 치열하게 살아온, 이제는 '여기저기서 또래들이 죽었다는 소식'을 들으며, '늘그막의 세월'을 다시 치열하게 보내는 작가의 이야기가 밀도 있게 담겨 있다. 일산 호수공원을 자주 산책하며 쓴 단상, 새와 나무 이야기, 작가가 사랑한 사람들, 그리고 삶과 죽음에 대한 이야기까지.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === ImageList.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval);
  }, []);

  const { img, title, description } = ImageList[currentIndex];

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <div
      className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
      style={bgImage}
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text content section */}
          <div
            data-aos-once="true"
            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
          >
            <h1
              data-aos="zoom-out"
              data-aos-duration="500"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              {title}
              <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                The Number 23
              </p>{" "}
            </h1>
            <p
              data-aos="slide-up"
              data-aos-duration="500"
              data-aos-delay="100"
              className="text-sm "
            >
              {description}
            </p>
            <div>
              <button
                onClick={handleOrderPopup}
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
              >
                바로구매
              </button>
            </div>
          </div>
          {/* Image section */}
          <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img
                data-aos="zoom-in"
                data-aos-once="true"
                src={img}
                alt="book img"
                className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
              />
            </div>
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[120px] lg:-right-1 bg-white rounded">
              {ImageList.map((item, index) => (
                <img
                  key={item.id}
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={item.img}
                  onClick={() => {
                    setCurrentIndex(index);
                  }}
                  alt="book img"
                  className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
