import Image, { StaticImageData } from "next/image";
import { FAQs, GetApp, RecognizedBy } from "../(home)/page";
import Link from "next/link";
import aboutHero from "../../../public/images/aboutHero.png";
import tinyLogo from "../../../public/images/tiny_logo.png";
import aboutus from "../../../public/images/about_us.png";
import member1 from "../../../public/images/member1.png";
import Title from "@/components/Title";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
const TeamMembersItems = [
  {
    title: "CEO",
    name: "john doe",
    description:
      "The buyer and seller on the Price of the product, mode of delivery, time of delivery and other terms.",
    img: member1,
  },
  {
    title: "COO",
    name: "john doe",
    description:
      "The buyer then releases the agreed price to the escrow for delivery to commence.",
    img: member1,
  },
  {
    title: "CTO",
    name: "john doe",
    description: "Seller releases product to buyer and notifies the escrow.",
    img: member1,
  },
];

const featurelist = [
  "We provide 24/7 service",
  "Qualified Escrow",
  "Fast Customer Support",
  "35 Years Experiance",
];

interface ITeamMembers {
  title: string;
  description: string;
  name: string;
  img: StaticImageData | string;
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      <Commitments />

      {/* RecognizedBy */}
      <RecognizedBy />

      <TeamMembers />

      {/* GetApp */}
      <GetApp />

      {/* FAQs */}
      <FAQs />
    </main>
  );
}

function Hero() {
  return (
    <section className={"relative w-full h-[520px] "}>
      <Image
        alt="Mountains"
        src={aboutHero}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      <div
        className={
          "flex flex-col bg-black/40 h-[520px] p-4 md:p-20  text-white justify-center items-start"
        }
      >
        <div className="mt-8 max-w-3xl mx-auto">
          <h1 className="my-4 text-2xl lg:text-6xl font-bold leading-snug text-center">
            About Us
          </h1>
          <p className="my-4 text-center max-w-xl">
            Your Transactions, Our Priority: Unparalleled Security and Trust. We
            provide Your Transactions, Our Priority: Unparalleled Security and
            Trust.
          </p>
        </div>
      </div>
    </section>
  );
}

function Commitments() {
  return (
    <section className="my-16">
      <div className="w-full max-w-7xl mx-auto px-4  py-8">
        <article className="my-2">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16 ">
            <div className={"lg:order-last"}>
              <div
                className={
                  "flex flex-col sm:max-w-md md:max-w-lg lg:w-auto mx-auto"
                }
              >
                <Image
                  alt="Hero Image"
                  // Importing an image will
                  // automatically set the width and height
                  src={aboutus}
                  sizes="100vw"
                  // Make the image display full width
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>

            <div className="">
              <div className="bg-gray-100 p-2 w-max inline-flex ">
                {/* tinyLogo */}
                <Image src={tinyLogo} alt="Picture of the author" />
                <span className="font-medium text-[--foreground_dark_blue] ml-2">
                  Welcome to Trusted Payer
                </span>
              </div>
              <h3 className="text-3xl my-2 font-bold md:text-5xl lg:text-6xl md:leading-[1.35] lg:leading-[1.35]">
                {" "}
                We’re Commited to Quality
              </h3>
              <p className=" my-2 text-[--foreground_neutral_base] md:text-lg lg:text-xl lg:leading-relaxed">
                Your Transactions, Our Priority: Unparalleled Security and
                Trust. We provide Your Transactions, Our Priority: Unparalleled
                Security and Trust.
              </p>

              <ul className="my-4 grid md:grid-cols-2 gap-4">
                {featurelist.map((el, i) => (
                  <li key={i} className="inline-flex items-start my-2">
                    <span className="mr-2 pt-1">
                      <IoCheckmarkCircleSharp className="text-primary md:text-2xl" />
                    </span>
                    <span className="md:text-lg lg:leading-relaxed font-light">
                      {el}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function TeamMembers() {
  return (
    <section className="">
      <div className="w-full max-w-4xl mx-auto px-4  py-8">
        <Title
          pill="Our Team"
          title="Meet Our Experts"
          subHeading=" Discover the faces driving reliability and transparency in every deal."
        />
        <ul className=" my-2 md:my-4 auto-rows-fr justify-items-center grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]  gap-4">
          {TeamMembersItems.map((el, i) => (
            <TeamMember item={el} key={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
function TeamMember({ item }: { item: ITeamMembers }) {
  return (
    <li className="rounded-sm border border-gray-600  pb-2 p-4 md:pb-6">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Image
          alt="Mountains"
          src={item.img}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-center capitalize text-base font-bold my-1 text-[--foreground_dark_blue]">
          {item.name}
        </h3>
        <div className="w-16 bg-primary h-0.5 rounded-full mx-auto"></div>
        <p className="text-sm text-center my-1 text-black"> {item.title}</p>
        <p className="text-sm text-gray-600">{item.description}</p>
      </div>
    </li>
  );
}
