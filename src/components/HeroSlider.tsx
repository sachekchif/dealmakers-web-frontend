"use client";
import { Autoplay, A11y, EffectFade, Thumbs } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Image, { StaticImageData } from "next/image";

export function HeroImgSlider({
  heroImgs,
  thumbsSwiper,
}: {
  heroImgs: StaticImageData[];
  thumbsSwiper: any;
}) {
  return (
    <div>
      <Swiper
        grabCursor={true}
        effect={"fade"}
        thumbs={{ swiper: thumbsSwiper }}
        // install Swiper modules
        modules={[Autoplay, A11y, Thumbs, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {heroImgs.map((el, i) => (
          <SwiperSlide key={i}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Image
                alt="Hero Image"
                // Importing an image will
                // automatically set the width and height
                src={el}
                sizes="100vw"
                // Make the image display full width
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export function TitleSlider({
  heroContent,
  setThumbsSwiper,
}: {
  setThumbsSwiper: any;
  heroContent: {
    title: JSX.Element;
  }[];
}) {
  return (
    <div className="w-full">
      <Swiper
        // grabCursor={true}
        effect={"fade"}
        // install Swiper modules
        modules={[Autoplay, A11y, Thumbs, EffectFade]}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        onSlideChange={() => console.log("slide change")}
      >
        {heroContent.map((el, i) => (
          <SwiperSlide key={i}>
            <div>{el.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
