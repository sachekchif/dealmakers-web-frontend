import Image from "next/image";
import Link from "next/link";
import logoWhite from "../../public/images/logo-white.png";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { RiInstagramFill } from "react-icons/ri";
import Cbutton from "./Cbutton";

export default function Footer() {
  return (
    <section className="bg-[--primary_dark]">
      <div className="max-w-7xl w-full mx-auto px-4 py-14 text-white">
        {/* Links and forms  */}
        <div className="md:flex">
          <FooterForm />
          <FooterLinks />
        </div>
        <HorizontalLine />
        {/* copyrigth and socials */}
        <SocailsnCopy />
      </div>
    </section>
  );
}

function FooterForm() {
  return (
    <div className="my-2 flex-col md:flex basis-3/6">
      <Link href="/" className="items-center md:flex ">
        <div className="w-8 h-8 relative my-0 ">
          <Image
            src={logoWhite}
            alt={"logo"}
            fill
            className="object-contain"
          ></Image>
        </div>
        <span className="mx-2 text-base md:text-2xl font-medium ">Domingo</span>
      </Link>
      <p className="py-4 max-w-xs ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, curabitur
        maximus quam.
      </p>

      <label className="form-control w-full max-w-xs mb-2">
        <div className="label">
          <span className="label-text text-white">
            Subscribe to our Newsletter?
          </span>
        </div>

        <div className="relative">
          <EnvelopeIcon className="absolute inset-y-3 start-0 h-6 px-2 text-primary" />
          <input
            type="email"
            className="rounded-lg input input-bordered w-full pl-10 pr-12 text-sm text-[--fore_dark] shadow-sm"
            placeholder="Enter email ...."
          />

          <div className="absolute inset-y-0 end-0 grid place-content-center px-2 ">
            <Cbutton classes="btn-sm btn-primary rounded-md">Subscribe</Cbutton>
          </div>
        </div>
      </label>
    </div>
  );
}

function FooterLinks() {
  return (
    <nav className="md:flex my-2 basis-3/6 justify-between">
      <div className="py-2 flex-1">
        <h3 className="py-3 text-white/95">Account</h3>
        <ul className="flex-col pt-2">
          <li className="pb-4 font-medium">
            <Link href={"#"}> Lorem</Link>
          </li>
          <li className="pb-4 font-medium">
            <Link href={"#"}> Lorem</Link>
          </li>
          <li className="pb-4 font-medium">
            <Link href={"#"}> Lorem</Link>
          </li>
          <li className="pb-4 font-medium">
            <Link href={"#"}> Lorem</Link>
          </li>
        </ul>
      </div>
      <div className="py-2 flex-1">
        <h3 className="py-3 text-white/85">Account</h3>
        <ul className="flex-col pt-2">
          <li className="pb-4 font-medium">
            <Link href={"#"}> Lorem</Link>
          </li>
          <li className="pb-4 font-medium">
            <Link href={"#"}> Lorem</Link>
          </li>
          <li className="pb-4 font-medium">
            <Link href={"#"}> Lorem</Link>
          </li>
        </ul>
      </div>
      <div className="py-2 flex-1">
        <h3 className="py-3 text-white/85">Account</h3>
        <ul className="flex-col pt-2">
          <li className="pb-4 font-medium">
            <Link href={"#"}> Lorem</Link>
          </li>
          <li className="pb-4 font-medium">
            <Link href={"#"}> Lorem</Link>
          </li>
          <li className="pb-4 font-medium">
            <Link href={"#"}> Lorem</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const HorizontalLine = () => {
  return <div className="w-full border-t border-[--primary_light] my-4"></div>;
};

function SocailsnCopy() {
  return (
    <div className="md:flex md:justify-between pt-6  md:items-center">
      <div className="">
        <small className="text-sm ">copyright @ Domingo.co</small>
      </div>
      <ul className="flex py-4">
        {/* Sidebar content here */}
        <li className="p-3 rounded-full bg-white md:ml-2 font-medium">
          <Link href={"#"}>
            {" "}
            <FaFacebook className="text-base text-primary" />
          </Link>
        </li>
        <li className="p-3 rounded-full bg-white ml-2  font-medium">
          <Link href={"#"}>
            <RiInstagramFill className="text-base text-primary" />
          </Link>
        </li>

        <li className="p-3 rounded-full bg-white ml-2 font-medium">
          <Link href={"#"}>
            {" "}
            <FaTwitter className="text-base text-primary" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
