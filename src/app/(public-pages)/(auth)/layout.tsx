"use client";

import Image from "next/image";
import hero1 from "../../../../public/images/hero-1.png";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <main>
      <section className="my-8 md:my-16">
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col-reverse md:flex-row gap-8 my-4 md:my-8 justify-stretch">
            <div className="sm:max-w-md md:max-w-lg mx-auto flex-1">
              <h1 className="capitalize text-center text-3xl my-2 font-medium  md:leading-[1.35] lg:leading-[1.35]">
                <span className="text-primary">
                  Safeguard Your Transactions,{" "}
                </span>
                Every Step of the Way
              </h1>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Image
                  alt="Hero Image"
                  // Importing an image will
                  // automatically set the width and height
                  src={hero1}
                  sizes="100vw"
                  // Make the image display full width
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
            <div className="flex-1 md:max-w-md">
              <div className="shadow-sm rounded-xs p-4 py-8">
                <nav>
                  <ul className="flex">
                    <li
                      className={`tracking-wider antialiased font-semibold  active:*:bg-transparent border-b-2 flex-1 p-2 text-center ${
                        pathname === "/signin"
                          ? "text-(--foreground_dark_blue) border-primary"
                          : "text-gray-400 border-gray-400"
                      }`}
                    >
                      <Link
                        className="active:bg-transparent hover:bg-transparent hover:text-(--foreground_dark_blue)"
                        href={"/signin"}
                      >
                        Sign In
                      </Link>
                    </li>
                    <li
                      className={`tracking-wider antialiased font-semibold  active:*:bg-transparent border-b-2 flex-1 p-2 text-center  ${
                        pathname === "/signup"
                          ? "text-(--foreground_dark_blue) border-primary"
                          : "text-gray-400 border-gray-400"
                      }`}
                    >
                      <Link
                        className="active:bg-transparent hover:bg-transparent hover:text-(--foreground_dark_blue)"
                        href={"/signup"}
                      >
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </nav>
                {children}
                <div>
                  <div className=" my-6 flex items-center">
                    <span className="flex-1 h-px bg-slate-400"></span>
                    <span className="mx-2 text-sm text-slate-400">or</span>
                    <span className="flex-1 h-px bg-slate-400"></span>
                  </div>
                  <Link
                    href={"#"}
                    className="btn btn-outline rounded-xs btn-block text-(--foreground_dark_blue) border-(--foreground_dark_blue) uppercase hover:text-white hover:bg-(--foreground_dark_blue)"
                  >
                    <FcGoogle className="text-xl " />
                    {pathname === "/signin" ? "Sign In" : "Sign Up"}
                  </Link>
                  <Link
                    href={"#"}
                    className="btn btn-outline rounded-xs btn-block text-(--foreground_dark_blue) border-(--foreground_dark_blue) mt-4 uppercase hover:text-white hover:bg-(--foreground_dark_blue)"
                  >
                    <FaApple className="text-xl " />
                    {pathname === "/signin" ? "Sign In" : "Sign Up"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
