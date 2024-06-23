import React from "react";
import AppStoreImg from "../../assets/app_store.png";
import PlayStoreImg from "../../assets/play_store.png";
import Banner from "../../assets/website/board1.png";

const bannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStore = () => {
  return (
    <>
      <div
        className="bg-gray-100 dark:bg-gray-800 text-white py-10"
        style={bannerImg}
      >
        <div className="container">
          <div
            data-aos="fade-up"
            data-aos-duration="300"
            className="space-y-6 max-w-xl mx-auto"
          >
            <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold ">
              손 끝에서 책을 읽다 - 23 앱 출시
            </h1>
            <div className="flex flex-wrap justify-center items-center">
            <a href="https://play.google.com/store/apps/details?id=kr.co.aladin.third_shop&hl=ko-KR" target="_blank" rel="noopener noreferrer">
                <img
                  src={PlayStoreImg}
                  alt="Play store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="https://apps.apple.com/kr/app/%EC%95%8C%EB%9D%BC%EB%94%98/id365898918" target="_blank" rel="noopener noreferrer">
                <img
                  src={AppStoreImg}
                  alt="App store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
