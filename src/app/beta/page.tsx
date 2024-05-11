import VIlagos from "../../../public/images/vi.png";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { RiFacebookBoxLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

function BetaPage() {
  return (
    <main>
      <section className="my-16">
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
          <div className="max-w-4xl w-full mx-auto shadow-md rounded p-4 md:p-8">
            <h1 className="text-primary text-center font-bold text-2xl">
              Get Latest update on our BETA version
            </h1>
            <HorizontalLine />
            <div className="flex flex-col md:flex-row gap-8 my-8 justify-stretch">
              <ContactForm />
              <ContactDetails />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function HorizontalLine() {
  return <div className="w-36 border-t border-2 border-primary mx-auto"></div>;
}

function ContactForm() {
  return (
    <form className="flex-1 ">
      <div>
        <p className="text-lg font-semibold">Leave us a message</p>
      </div>

      <label
        htmlFor="FullName"
        className="relative my-4 block rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          type="text"
          id="FullName"
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
          placeholder="Full Name"
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          Full Name
        </span>
      </label>

      <label
        htmlFor="Email"
        className="relative my-4 block rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <input
          type="text"
          id="Email"
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
          placeholder="Email"
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          Email
        </span>
      </label>

      <div className="my-4">
        <div className="overflow-hidden rounded border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
          <textarea
            id="OrderNotes"
            className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
            rows={6}
            placeholder="Your Message ..."
          ></textarea>
        </div>
      </div>
      <button className="btn btn-block text-white rounded btn-primary mt-4">
        block
      </button>
    </form>
  );
}

function ContactDetails() {
  return (
    <div className="flex-1 font-medium">
      <p className="mb-2">
        <span className="block">Trusted Deal Maker,</span>
        <span className="block">Victoria Island, Lagos, Nigeria.</span>
      </p>

      <p className="my-2">
        <a href="tel:+2348112364568">+234 081-1236-4568</a>
      </p>
      <p className="my-2">
        <a href="mailto:hello@info.com.ng"> hello@info.com.ng </a>
      </p>
      <SocailHandles />
      <div className="relative h-48 rounded">
        <Image
          alt="Mountains"
          src={VIlagos}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          className="object-cover rounded"
        />
      </div>
    </div>
  );
}

function SocailHandles() {
  return (
    <div className="md:flex md:justify-between my-4  md:items-center">
      <div className="">
        <small className="text-sm font-bold">Connect with us</small>
      </div>
      <ul className="flex py-2">
        {/* Sidebar content here */}
        <li className="font-medium hover:scale-105">
          <Link href={"#"}>
            {" "}
            <FaInstagram className="text-xl md:text-2xl text-black" />
          </Link>
        </li>
        <li className="ml-2  font-medium hover:scale-105">
          <Link href={"#"}>
            <SlSocialTwitter className="text-xl md:text-2xl text-black" />
          </Link>
        </li>

        <li className="ml-2 font-medium hover:scale-105">
          <Link href={"#"}>
            {" "}
            <PiLinkedinLogoBold className="text-xl md:text-2xl text-black" />
          </Link>
        </li>
        <li className="ml-2 font-medium hover:scale-105">
          <Link href={"#"}>
            {" "}
            <RiFacebookBoxLine className="text-xl md:text-2xl text-black" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BetaPage;
