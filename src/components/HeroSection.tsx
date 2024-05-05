"use client";
import Link from "next/link";
import { HeroImgSlider, TitleSlider } from "./HeroSlider";
import clsx from "clsx";
import hero1 from "../../public/images/hero-1.png";
import hero2 from "../../public/images/hero-2.png";
import hero3 from "../../public/images/hero-3.png";
import { useState } from "react";

const heroContent = [
  {
    title: (
      <h1 className="text-3xl my-2 font-medium md:text-5xl lg:text-6xl md:leading-[1.35] lg:leading-[1.35]">
        Safeguard Your Transactions, Every Step of the Way
      </h1>
    ),
  },
  {
    title: (
      <h1 className="text-3xl my-2 font-medium md:text-5xl lg:text-6xl md:leading-[1.35] lg:leading-[1.35]">
        Now you can buy what you really want without being scammed
      </h1>
    ),
  },
  {
    title: (
      <h1 className="text-3xl my-2 font-medium md:text-5xl lg:text-6xl md:leading-[1.35] lg:leading-[1.35]">
        Overcome Distance barrier; you can buy products across boundaries{" "}
      </h1>
    ),
  },
];
const heroImgs = [hero1, hero2, hero3];

export default function HeroSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section>
      <div className="w-full max-w-7xl mx-auto px-4  py-8">
        <article className="my-2">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16">
            <div className={clsx(" overflow-hidden  lg:h-full lg:order-last")}>
              <HeroImgSlider thumbsSwiper={thumbsSwiper} heroImgs={heroImgs} />
            </div>

            <div className="lg:py-2">
              {/* Heading 1 carousel */}
              <TitleSlider
                heroContent={heroContent}
                setThumbsSwiper={setThumbsSwiper}
              />
              {/* <h1 className="text-3xl my-2 font-medium md:text-5xl lg:text-6xl md:leading-[1.35] lg:leading-[1.35]">
                Overcome Distance barrier; you can buy products across
                boundaries{" "}
              </h1> */}
              <p className=" my-2 text-[--foreground_neutral_base] md:text-lg lg:text-xl lg:leading-relaxed">
                Ready to experience hassle-free transactions? Download Trusted
                Payer now and take the first step towards secure deals. Your
                peace of mind is just a click away!
              </p>

              <div className="flex items-center justify-start my-2 gap-6">
                <Link
                  href={"#"}
                  className="btn btn-primary shadow-md rounded-md justify-end text-white"
                >
                  Get Started
                </Link>
                <Link
                  href={"#"}
                  className="btn btn-primary btn-outline shadow-md rounded-md justify-end"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
