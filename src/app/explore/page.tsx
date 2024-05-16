"use client";

import { LiaStarSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import p1Shoe from "../../../public/images/p1_shoe.png";
import p2VehicleRepair from "../../../public/images/p2_vehicle_repair.png";
import p1Laptop from "../../../public/images/p3-laptop.png";
import p1LeatherShoe from "../../../public/images/p4-leather_shoe.png";
import p1Haircut from "../../../public/images/p5_haircut.png";
import p1Iphone from "../../../public/images/p6_iphone.png";
import Image, { StaticImageData } from "next/image";
import { formatNumberWithCommas } from "@/utils/InvoiceForm";
import { IoIosHeart } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  type: string;
  new: boolean;
  deal: boolean;
  thumbnail: StaticImageData;
}

const productList: IProduct[] = [
  {
    id: 1,
    title: "Nike Airforce",
    description:
      "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
    price: 50000,
    rating: 4,
    brand: "Nike",
    category: "shoe",
    type: "product",
    new: true,
    deal: false,
    thumbnail: p1Shoe,
  },
  {
    id: 2,
    title: "Vehicle Repair",
    description:
      "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
    price: 35000,
    rating: 5,
    brand: "Nike",
    category: "shoe",
    type: "service",
    new: true,
    deal: false,
    thumbnail: p2VehicleRepair,
  },
  {
    id: 3,
    title: "Laptop",
    description:
      "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
    price: 350000,
    rating: 5,
    brand: "macbook",
    category: "apple",
    type: "product",
    new: false,
    deal: true,
    thumbnail: p1Laptop,
  },
  {
    id: 4,
    title: "Leather Shoe",
    description:
      "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
    price: 20000,
    rating: 3,
    brand: "persian",
    category: "shoe",
    type: "product",
    new: false,
    deal: false,
    thumbnail: p1LeatherShoe,
  },
  {
    id: 5,
    title: "Haircut",
    description:
      "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
    price: 5000,
    rating: 4,
    brand: "Nike",
    category: "shoe",
    type: "service",
    new: false,
    deal: false,
    thumbnail: p1Haircut,
  },
  {
    id: 6,
    title: "Iphone 11",
    description:
      "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
    price: 500000,
    rating: 5,
    brand: "apple",
    category: "phone",
    type: "product",
    new: true,
    deal: false,
    thumbnail: p1Iphone,
  },

  {
    id: 7,
    title: "Vehicle Repair",
    description:
      "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
    price: 35000,
    rating: 5,
    brand: "Nike",
    category: "shoe",
    type: "service",
    new: true,
    deal: false,
    thumbnail: p2VehicleRepair,
  },
  {
    id: 8,
    title: "Nike Airforce",
    description:
      "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
    price: 50000,
    rating: 4,
    brand: "Nike",
    category: "shoe",
    type: "product",
    new: true,
    deal: false,
    thumbnail: p1Shoe,
  },

  {
    id: 9,
    title: "Laptop",
    description:
      "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
    price: 350000,
    rating: 5,
    brand: "macbook",
    category: "apple",
    type: "product",
    new: false,
    deal: true,
    thumbnail: p1Laptop,
  },
  {
    id: 10,
    title: "Haircut",
    description:
      "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
    price: 5000,
    rating: 4,
    brand: "Nike",
    category: "shoe",
    type: "service",
    new: false,
    deal: false,
    thumbnail: p1Haircut,
  },
  {
    id: 11,
    title: "Iphone 11",
    description:
      "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
    price: 500000,
    rating: 5,
    brand: "apple",
    category: "phone",
    type: "product",
    new: true,
    deal: false,
    thumbnail: p1Iphone,
  },
  {
    id: 12,
    title: "Leather Shoe",
    description:
      "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
    price: 20000,
    rating: 3,
    brand: "persian",
    category: "shoe",
    type: "product",
    new: false,
    deal: false,
    thumbnail: p1LeatherShoe,
  },
];

const notify = () => {
  toast.info("Product Unavailable", {});
};

export default function ExlorePage() {
  const pathname = usePathname();

  return (
    <main>
      <div className="drawer">
        <input id="productFilter" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full max-w-7xl mx-auto py-8 px-4">
          {/* Page content here */}
          {/* rounded-md border border-gray-300 */}
          {/* <ExploreTtle /> */}
          <div className="flex gap-4 lg:my-6 mb-6">
            <div className="hidden lg:flex flex-1 max-w-xs ">
              <ul className="menu w-full text-base-content relative">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-xl text-[--foreground_dark_blue]">
                    Filters
                  </h3>
                </div>
                <nav>
                  <ul className="flex">
                    <li
                      className={`tracking-wider antialiased font-semibold  *:active:bg-transparent border-b-4 flex-1 p-2 text-center active:!bg-inherit ${
                        pathname === "/explore"
                          ? "text-[--foreground_dark_blue] border-primary"
                          : "text-gray-400 border-gray-400"
                      }`}
                    >
                      <Link
                        className="active:!bg-inherit hover:bg-transparent hover:text-[--foreground_dark_blue]"
                        href={"#"}
                      >
                        Products
                      </Link>
                    </li>
                    <li
                      className={`tracking-wider antialiased font-semibold  *:active:bg-transparent border-b-2 flex-1 p-2 text-center active:!bg-inherit ${
                        pathname === "/explore/service"
                          ? "text-[--foreground_dark_blue] border-primary"
                          : "text-gray-400 border-gray-400"
                      }`}
                    >
                      <Link
                        className="active:!bg-inherit hover:bg-transparent hover:text-[--foreground_dark_blue]"
                        href={"#"}
                      >
                        Services
                      </Link>
                    </li>
                  </ul>
                </nav>
                <form action="">
                  <div className="space-y-2 divide-y divide-[--foreground_neutral_base] mt-2">
                    <details
                      open
                      className=" group overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
                        <span className="text-sm font-medium"> Category </span>

                        <span className="transition group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </summary>

                      <div className="border-t border-gray-200 bg-white">
                        <ul className="space-y-1 border-t border-gray-200 p-4">
                          <li>
                            <label
                              htmlFor="FilterCategory"
                              className="inline-flex items-center gap-2 active:!bg-inherit"
                            >
                              <input
                                type="checkbox"
                                id="FilterCategory"
                                className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {" "}
                                Commercial equipments
                              </span>
                            </label>
                          </li>

                          <li>
                            <label
                              htmlFor="FilterCategory1"
                              className="inline-flex items-center gap-2 active:!bg-inherit"
                            >
                              <input
                                type="checkbox"
                                id="FilterCategory1"
                                className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {" "}
                                Fashion
                              </span>
                            </label>
                          </li>

                          <li>
                            <label
                              htmlFor="FilterCategory2"
                              className="inline-flex items-center gap-2 active:!bg-inherit"
                            >
                              <input
                                type="checkbox"
                                id="FilterCategory2"
                                className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {" "}
                                Home Appliances
                              </span>
                            </label>
                          </li>
                          <li>
                            <label
                              htmlFor="FilterCategory3"
                              className="inline-flex items-center gap-2 active:!bg-inherit"
                            >
                              <input
                                type="checkbox"
                                id="FilterCategory3"
                                className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {" "}
                                Mobile Phones
                              </span>
                            </label>
                          </li>
                          <li>
                            <label
                              htmlFor="FilterCategory3"
                              className="inline-flex items-center gap-2 active:!bg-inherit"
                            >
                              <input
                                type="checkbox"
                                id="FilterCategory3"
                                className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {" "}
                                Vehicles
                              </span>
                            </label>
                          </li>
                          <li>
                            <label
                              htmlFor="FilterCategory4"
                              className="inline-flex items-center gap-2 active:!bg-inherit"
                            >
                              <input
                                type="checkbox"
                                id="FilterCategory4"
                                className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                Furnitures
                              </span>
                            </label>
                          </li>
                          <li>
                            <label
                              htmlFor="FilterCategory5"
                              className="inline-flex items-center gap-2 active:!bg-inherit"
                            >
                              <input
                                type="checkbox"
                                id="FilterCategory5"
                                className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {" "}
                                Electronics
                              </span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </details>
                    <details
                      open
                      className=" group overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
                        <span className="text-sm font-medium"> Price</span>

                        <span className="transition group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </summary>

                      <div className="border-t border-gray-200 bg-white">
                        <ul className="space-y-1 border-t border-gray-200 p-4">
                          <li>
                            <label
                              htmlFor="FilterPrice0"
                              className="inline-flex items-center gap-2 active:!bg-inherit"
                            >
                              <input
                                type="radio"
                                id="FilterPrice0"
                                className="radio radio-primary checked:bg-primary focus:checked:bg-primary"
                                name="priceControl"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {" "}
                                Price: ₦5,000 - 15,000
                              </span>
                            </label>
                          </li>

                          <li>
                            <label
                              htmlFor="FilterPrice1"
                              className="inline-flex items-center gap-2 active:!bg-inherit"
                            >
                              <input
                                type="radio"
                                id="FilterPrice1"
                                className="radio radio-primary checked:bg-primary focus:checked:bg-primary"
                                name="priceControl"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {" "}
                                Price: ₦15,000 - 40,000
                              </span>
                            </label>
                          </li>

                          <li>
                            <label
                              htmlFor="FilterPrice2"
                              className="inline-flex items-center gap-2 active:!bg-inherit"
                            >
                              <input
                                type="radio"
                                id="FilterPrice2"
                                className="radio radio-primary checked:bg-primary focus:checked:bg-primary"
                                name="priceControl"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {" "}
                                Price: ₦45,000 - 80,000
                              </span>
                            </label>
                          </li>
                          <li>
                            <label
                              htmlFor="FilterPrice3"
                              className="inline-flex items-center gap-2 active:!bg-inherit"
                            >
                              <input
                                type="radio"
                                id="FilterPrice3"
                                className="radio radio-primary checked:bg-primary focus:checked:bg-primary"
                                name="priceControl"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {" "}
                                Price: ₦80,000 - 150,000
                              </span>
                            </label>
                          </li>
                        </ul>
                        <div className="border-t border-gray-200 p-4">
                          <div className="flex justify-between gap-4">
                            <label
                              htmlFor="FilterPriceFrom"
                              className="flex items-center gap-2"
                            >
                              <span className="text-sm text-gray-600">$</span>

                              <input
                                type="number"
                                id="FilterPriceFrom"
                                placeholder="From"
                                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                              />
                            </label>

                            <label
                              htmlFor="FilterPriceTo"
                              className="flex items-center gap-2"
                            >
                              <span className="text-sm text-gray-600">$</span>

                              <input
                                type="number"
                                id="FilterPriceTo"
                                placeholder="To"
                                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </details>
                    <details
                      open
                      className=" group overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
                        <span className="text-sm font-medium"> Brand </span>

                        <span className="transition group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </summary>

                      <div className="border-t border-gray-200 bg-white">
                        <ul className="space-y-1 border-t border-gray-200 p-4">
                          <li>
                            <label
                              htmlFor="FilterCategory"
                              className="inline-flex items-center gap-2 active:!bg-inherit"
                            >
                              <input
                                type="checkbox"
                                id="FilterBrand0"
                                className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {" "}
                                Dell
                              </span>
                            </label>
                          </li>

                          <li>
                            <label
                              htmlFor="FilterBrand1"
                              className="inline-flex items-center gap-2 active:!bg-inherit"
                            >
                              <input
                                type="checkbox"
                                id="FilterBrand1"
                                className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {" "}
                                Toshiba
                              </span>
                            </label>
                          </li>

                          <li>
                            <label
                              htmlFor="FilterBrand2"
                              className="inline-flex items-center gap-2 active:!bg-inherit"
                            >
                              <input
                                type="checkbox"
                                id="FilterBrand2"
                                className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {" "}
                                Samsung
                              </span>
                            </label>
                          </li>
                          <li>
                            <label
                              htmlFor="FilterBrand3"
                              className="inline-flex items-center gap-2 active:!bg-inherit"
                            >
                              <input
                                type="checkbox"
                                id="FilterBrand3"
                                className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                              />

                              <span className="text-sm font-medium text-gray-700">
                                {" "}
                                Hp
                              </span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </details>
                  </div>
                </form>
              </ul>
            </div>

            <div className="flex-1 ">
              <ProductList />
            </div>
          </div>
        </div>
        <div className="drawer-side z-20 lg:hidden">
          <label
            htmlFor="productFilter"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <FilterMenu />
        </div>
      </div>
    </main>
  );
}

function ExploreTtle() {
  return (
    <section className="my-4">
      <div className="w-full max-w-7xl mx-auto px-4 py-4">
        <h1 className="font-bold text-[--foreground_dark_blue] text-3xl text-left">
          Explore Products and Services
        </h1>
      </div>
    </section>
  );
}

function SearchBarFIlter() {
  return (
    <div className="w-full pb-2">
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-md lg:max-w-full ">
          <label htmlFor="Search" className="sr-only">
            {" "}
            Search{" "}
          </label>

          <input
            type="text"
            id="Search"
            placeholder="Search for..."
            className="w-full rounded-sm border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-700 "
            >
              <span className="sr-only">Search</span>
              <CiSearch className="text-xl" />
            </button>
          </span>
        </div>
        <label
          htmlFor="productFilter"
          className="drawer-button btn btn-ghost btn-circle  lg:hidden"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 14C11.3063 14 12.4175 14.8349 12.8293 16.0001L19 16C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18L12.829 18.0009C12.4169 19.1656 11.3059 20 10 20C8.69412 20 7.58312 19.1656 7.17102 18.0009L1 18C0.447715 18 0 17.5523 0 17C0 16.4477 0.447715 16 1 16L7.17067 16.0001C7.58249 14.8349 8.69375 14 10 14ZM10 16C9.44771 16 9 16.4477 9 17C9 17.5523 9.44771 18 10 18C10.5523 18 11 17.5523 11 17C11 16.4477 10.5523 16 10 16ZM17 7C18.6569 7 20 8.34315 20 10C20 11.6569 18.6569 13 17 13C15.6941 13 14.5831 12.1656 14.171 11.0009L1 11C0.447715 11 0 10.5523 0 10C0 9.44771 0.447715 9 1 9L14.1707 9.00009C14.5825 7.83485 15.6937 7 17 7ZM17 9C16.4477 9 16 9.44771 16 10C16 10.5523 16.4477 11 17 11C17.5523 11 18 10.5523 18 10C18 9.44771 17.5523 9 17 9ZM3 0C4.3118 0 5.42695 0.841956 5.83453 2.01495C5.88799 2.00469 5.94344 2 6 2H19C19.5523 2 20 2.44772 20 3C20 3.55228 19.5523 4 19 4H6C5.94344 4 5.88799 3.99531 5.83399 3.98628C5.42695 5.15804 4.3118 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0ZM3 2C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4C3.55228 4 4 3.55228 4 3C4 2.44772 3.55228 2 3 2Z"
              fill="#0097C7"
            />
          </svg>
        </label>
      </div>
      <div className="my-2 text-sm flex flex-col lg:flex-row justify-between items-center">
        <h1 className="font-bold text-[--foreground_dark_blue] text-xl  w-full lg:max-w-max ">
          Explore Products and Services
        </h1>
        <div className="flex lg:*:ml-2 lg:items-center w-full lg:max-w-max">
          <span>Showing 1-10 of 100 Products</span>
          <div className="dropdown dropdown-end hidden lg:block">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn btn-sm"
            >
              Sort By
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded w-52 mt-4"
            >
              <ul className="space-y-1 ">
                <li>
                  <label
                    htmlFor="FilterSort0"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="radio"
                      id="FilterSort0"
                      className="radio radio-primary radio-sm checked:bg-primary focus:checked:bg-primary"
                      name="sortControl"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Featured{" "}
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterSort1"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="radio"
                      id="FilterSort1"
                      className="radio radio-primary radio-sm checked:bg-primary focus:checked:bg-primary"
                      name="sortControl"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Newest{" "}
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterSort2"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="radio"
                      id="FilterSort2"
                      className="radio radio-primary radio-sm checked:bg-primary focus:checked:bg-primary"
                      name="sortControl"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Price: High-Low{" "}
                    </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="FilterSort3"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="radio"
                      id="FilterSort3"
                      className="radio radio-primary radio-sm checked:bg-primary focus:checked:bg-primary"
                      name="sortControl"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Price: Low-High{" "}
                    </span>
                  </label>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductList() {
  return (
    <div className="pb-8 ">
      <SearchBarFIlter />

      <ul className="auto-rows-fr justify-items-center grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
        {productList.map((el) => {
          return <ProductItem key={el.id} product={el} />;
        })}
      </ul>
    </div>
  );
}

function ProductItem({ product }: { product: IProduct }) {
  return (
    <li
      onClick={notify}
      className="shadow-sm rounded-sm border border-gray-300 w-full relative hover:cursor-pointer"
    >
      <span
        className={clsx(
          "rounded-e p-1 absolute left-0 top-0 z-10 font-semibold text-xs text-white",
          product.deal && "bg-green-500",
          product.new && "bg-red-500"
        )}
      >
        {" "}
        {(product.deal && "Deal") || (product.new && "New")}
      </span>
      {product.type === "product" ? (
        <div
          className={clsx(
            "relative w-full h-40 sm:h-52 flex justify-center items-center"
          )}
        >
          <Image
            alt="Hero Image"
            src={product.thumbnail}
            sizes="100vw"
            style={{
              width: "auto",
              height: "90%",
            }}
          />
        </div>
      ) : (
        <div className={clsx("relative w-full h-40 sm:h-52 ")}>
          {/* <Image
            alt="Hero Image"
            src={product.thumbnail}
            fill
            className={"cover"}
          /> */}
          <Image
            alt="Mountains"
            src={product.thumbnail}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      )}
      <div className="flex flex-col border-t border-gray-300 p-3">
        <h3 className="text-xs font-medium my-1 text-[--foreground_dark_blue]">
          {" "}
          {product.title}
        </h3>
        <p className="text font-bold">
          ₦{formatNumberWithCommas(product.price)}
        </p>
        <div className="flex justify-between">
          <div className="flex items-center">
            <RatingComponent amount={product.rating} />
            <span className="text-xs mx-2 text-gray-500"> 1020</span>
          </div>
          <IoIosHeart className="text-gray-300" />
        </div>
      </div>
    </li>
  );
}

function RatingComponent({ amount }: { amount: number }) {
  const stars = [...new Array(5)].map((el, i) => (
    <LiaStarSolid key={i} className="text-gray-300 text-xs" />
  ));

  return (
    <div className="flex *:ml-0.5">
      {[...stars].map((el, i) => {
        if (i < amount) {
          return <LiaStarSolid key={i} className="text-yellow-400 text-xs" />;
        } else {
          return el;
        }
      })}
    </div>
  );
}

function FilterMenu() {
  const pathname = usePathname();

  return (
    <ul className="menu p-4 pt-16 w-full min-h-full bg-white text-base-content relative">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-xl text-[--foreground_dark_blue]">
          Filters
        </h3>
        <label
          htmlFor="productFilter"
          className="drawer-[--background_dark_base] p-0.5"
        >
          <IoMdCloseCircle className="text-primary text-4xl font-black" />
        </label>
      </div>
      <nav>
        <ul className="flex">
          <li
            className={`tracking-wider antialiased font-semibold  *:active:bg-transparent border-b-4 flex-1 p-2 text-center active:!bg-inherit ${
              pathname === "/explore"
                ? "text-[--foreground_dark_blue] border-primary"
                : "text-gray-400 border-gray-400"
            }`}
          >
            <Link
              className="active:!bg-inherit hover:bg-transparent hover:text-[--foreground_dark_blue]"
              href={"#"}
            >
              Products
            </Link>
          </li>
          <li
            className={`tracking-wider antialiased font-semibold  *:active:bg-transparent border-b-2 flex-1 p-2 text-center active:!bg-inherit ${
              pathname === "/explore/service"
                ? "text-[--foreground_dark_blue] border-primary"
                : "text-gray-400 border-gray-400"
            }`}
          >
            <Link
              className="active:!bg-inherit hover:bg-transparent hover:text-[--foreground_dark_blue]"
              href={"#"}
            >
              Services
            </Link>
          </li>
        </ul>
      </nav>
      <form action="">
        <div className="space-y-2 divide-y divide-[--foreground_neutral_base] mt-2">
          {/* <select className="select w-full ">
            <option disabled selected>
              {" "}
              Select Category
            </option>
            <option>Commercial equipments</option>
            <option>Fashion</option>
            <option>Home Appliances</option>
            <option>Mobile Phones</option>
            <option>Vehicles</option>
            <option>Furnitures</option>
          </select> */}
          <details
            open
            className=" group overflow-hidden [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
              <span className="text-sm font-medium"> Sort By </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="border-t border-gray-200 bg-white">
              <ul className="space-y-1 border-t border-gray-200 p-4">
                <li>
                  <label
                    htmlFor="FilterSort0"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="radio"
                      id="FilterSort0"
                      className="radio radio-primary checked:bg-primary focus:checked:bg-primary"
                      name="sortControl"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Featured{" "}
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterSort1"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="radio"
                      id="FilterSort1"
                      className="radio radio-primary checked:bg-primary focus:checked:bg-primary"
                      name="sortControl"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Newest{" "}
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterSort2"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="radio"
                      id="FilterSort2"
                      className="radio radio-primary checked:bg-primary focus:checked:bg-primary"
                      name="sortControl"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Price: High-Low{" "}
                    </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="FilterSort3"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="radio"
                      id="FilterSort3"
                      className="radio radio-primary checked:bg-primary focus:checked:bg-primary"
                      name="sortControl"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Price: Low-High{" "}
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </details>
          <details
            open
            className=" group overflow-hidden [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
              <span className="text-sm font-medium"> Category </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="border-t border-gray-200 bg-white">
              <ul className="space-y-1 border-t border-gray-200 p-4">
                <li>
                  <label
                    htmlFor="FilterCategory"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="checkbox"
                      id="FilterCategory"
                      className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Commercial equipments
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterCategory1"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="checkbox"
                      id="FilterCategory1"
                      className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Fashion
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterCategory2"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="checkbox"
                      id="FilterCategory2"
                      className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Home Appliances
                    </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="FilterCategory3"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="checkbox"
                      id="FilterCategory3"
                      className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Mobile Phones
                    </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="FilterCategory3"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="checkbox"
                      id="FilterCategory3"
                      className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Vehicles
                    </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="FilterCategory4"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="checkbox"
                      id="FilterCategory4"
                      className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      Furnitures
                    </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="FilterCategory5"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="checkbox"
                      id="FilterCategory5"
                      className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Electronics
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </details>

          <details
            open
            className=" group overflow-hidden [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
              <span className="text-sm font-medium"> Price</span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="border-t border-gray-200 bg-white">
              <ul className="space-y-1 border-t border-gray-200 p-4">
                <li>
                  <label
                    htmlFor="FilterPrice0"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="radio"
                      id="FilterPrice0"
                      className="radio radio-primary checked:bg-primary focus:checked:bg-primary"
                      name="priceControl"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Price: ₦5,000 - 15,000
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterPrice1"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="radio"
                      id="FilterPrice1"
                      className="radio radio-primary checked:bg-primary focus:checked:bg-primary"
                      name="priceControl"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Price: ₦15,000 - 40,000
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterPrice2"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="radio"
                      id="FilterPrice2"
                      className="radio radio-primary checked:bg-primary focus:checked:bg-primary"
                      name="priceControl"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Price: ₦45,000 - 80,000
                    </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="FilterPrice3"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="radio"
                      id="FilterPrice3"
                      className="radio radio-primary checked:bg-primary focus:checked:bg-primary"
                      name="priceControl"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Price: ₦80,000 - 150,000
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </details>
          <details
            open
            className=" group overflow-hidden [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
              <span className="text-sm font-medium"> Brand </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="border-t border-gray-200 bg-white">
              <ul className="space-y-1 border-t border-gray-200 p-4">
                <li>
                  <label
                    htmlFor="FilterCategory"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="checkbox"
                      id="FilterBrand0"
                      className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Dell
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterBrand1"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="checkbox"
                      id="FilterBrand1"
                      className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Toshiba
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterBrand2"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="checkbox"
                      id="FilterBrand2"
                      className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Samsung
                    </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="FilterBrand3"
                    className="inline-flex items-center gap-2 active:!bg-inherit"
                  >
                    <input
                      type="checkbox"
                      id="FilterBrand3"
                      className="checkbox checkbox-primary rounded-sm [--chkfg:white] checkbox-sm"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Hp
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </details>

          {/* <details className="overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
              <span className="text-sm font-medium"> Price </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="border-t border-gray-200 bg-white">
              <header className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-700">
                  {" "}
                  The highest price is $600{" "}
                </span>

                <button
                  type="button"
                  className="text-sm text-gray-900 underline underline-offset-4"
                >
                  Reset
                </button>
              </header>

              <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between gap-4">
                  <label
                    htmlFor="FilterPriceFrom"
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm text-gray-600">$</span>

                    <input
                      type="number"
                      id="FilterPriceFrom"
                      placeholder="From"
                      className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                  </label>

                  <label
                    htmlFor="FilterPriceTo"
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm text-gray-600">$</span>

                    <input
                      type="number"
                      id="FilterPriceTo"
                      placeholder="To"
                      className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                  </label>
                </div>
              </div>
            </div>
          </details> */}
        </div>
      </form>
    </ul>
  );
}
