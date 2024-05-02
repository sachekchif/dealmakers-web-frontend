import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Property } from "../../types";
import Link from "next/link";
import { getFeatureProps } from "@/dataFetching/properties";
import { formatNumberWithCommas } from "@/utils/InvoiceForm";
import wishlist from "../../public/images/wishlist.svg";

import location from "../../public/images/location.svg";

import toilet from "../../public/images/toilet.svg";
import bed from "../../public/images/bed.svg";

export default async function PropListing() {
  const { data: properties } = await getFeatureProps();
  const featureProps = properties?.slice(0, 6);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="my-2  mb-6 text-2xl font-bold text-[--fore_dark]">
        Featured
      </h2>

      <ul className="my-2 grid gap-5 min-[520px]:grid-cols-2 md:grid-cols-3">
        {featureProps?.map((property: Property) => (
          <FeaturedProperty property={property} key={property.id} />
        ))}
        {/* {invoices.length < 1 && (
          <div className=' w-full relative h-full flex justify-center items-center'>
            <Image src={emptyIllustration} alt='empty illustration' />
          </div>
        )} */}
      </ul>
    </section>
  );
}

function FeaturedProperty({ property }: { property: Property }) {
  return (
    <li className="p-4  shadow rounded-xl relative">
      <span className="absolute top-6 start-6  z-[1]">
        <Image className="" src={wishlist} alt="Location Icon" />
      </span>{" "}
      <div className={"rounded-xl relative h-48"}>
        <Image
          alt="Mountains"
          src={property.main_image_url}
          fill
          sizes="100vw"
          className="rounded-xl object-cover"
        />
      </div>
      <div className="flex justify-between py-2">
        <span className="font-semibold capitalize text-[--fore_dark]">
          {property.name}
        </span>
        <small className="flex">
          <div className="relative h-4 w-4">
            <Image
              alt="Mountains"
              src={location}
              fill
              sizes="auto"
              style={{
                objectFit: "cover", // cover, contain, none
              }}
            />
          </div>
          <span className="px-2">
            {property.location.split(",")[0].split("\n")[1]}
          </span>
        </small>
      </div>
      <div className="flex justify-between py-1">
        <span className="font-semibold text-primary">
          {" "}
          ${formatNumberWithCommas(property.price)}
        </span>
        <small className="flex">
          <span className="flex">
            <div className="relative h-4 w-4">
              <Image
                alt="Mountains"
                src={bed}
                fill
                sizes="auto"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
              />
            </div>{" "}
            <span className="px-2">4</span>
          </span>
          <span className="flex">
            <div className="relative h-4 w-4">
              <Image
                alt="Mountains"
                src={toilet}
                fill
                sizes="auto"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
              />
            </div>{" "}
            <span className="px-2">2</span>
          </span>
        </small>
      </div>
      <Link
        href={`/properties/${property.slug}`}
        className="btn btn-primary rounded-full w-full btn-sm my-2 text-white"
      >
        View Listing
      </Link>
    </li>
  );
}
