import Image, { StaticImageData } from "next/image";
// import properties from "../../../../public/assets/data/propeties.json";
import { Property } from "../../../../types";
import why from "../../../../public/images/why.jpg";
import send from "../../../../public/images/send.svg";
import bedBlue from "../../../../public/images/bedBlue.svg";
import toiletBlue from "../../../../public/images/toiletBlue.svg";
import area from "../../../../public/images/area.svg";
import checkMark from "../../../../public/images/checkMark.svg";
import { getSingleProp, getFeatureProps } from "@/dataFetching/properties";
import ShowInterest from "@/components/ShowInterest";
import { formatNumberWithCommas } from "@/utils/InvoiceForm";

export async function generateStaticParams() {
  const { data: properties } = await getFeatureProps();

  return properties.map((prop: Property) => ({
    slug: prop.slug,
  }));
}

import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id: slug } = params;

  const { data: property } = await getSingleProp(slug);

  return {
    title: `${property.name} | Domingo`,
    description: `This page belongs to ${property.name} `,
  };
}

export default async function PropertyDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id: slug } = params;
  const { data: property } = await getSingleProp(slug);

  if (!property) {
    return (
      <main className="flex-1 flex h-full flex-col items-center overflow-y-scroll md:p-24 py-16 bg-[--primary_bg]">
        <div className="w-full max-w-3xl px-4">
          <h2 className="text-3xl">No Property Found</h2>
        </div>
      </main>
    );
  }

  return (
    <section className="max-w-7xl items-center w-full mx-auto px-4 py-8 md:py-16">
      {/*Hero */}
      <HeroImage imgUrl={property?.main_image_url || why} />
      {/*Details */}
      <Details property={property} />
      <div className="md:flex md:flex-row-reverse">
        {/*ShowInterest  */}
        <div className="md:basis-4/12">
          <ShowInterest propertyId={property.id} />
        </div>
        <div className="md:basis-8/12 md:pr-8">
          {/* Description */}
          <Description property={property} />
          <HorizontalLine />
          {/* features */}
          <Features property={property} />
          <HorizontalLine />
          {/* gallery */}
          <Gallery property={property} />
        </div>
      </div>
    </section>
  );
}

function HeroImage({ imgUrl }: { imgUrl: string | StaticImageData }) {
  return (
    <div className="w-full relative max-h-dvh h-[520px] rounded-lg ">
      <Image
        alt="Mountains"
        src={imgUrl}
        // placeholder="blur"
        // quality={100}
        fill
        sizes="100vw"
        className="object-cover rounded-lg"
      />
    </div>
  );
}

function Details({ property }: { property: Property }) {
  return (
    <div className="my-2">
      <div className="flex my-4 w-full justify-between ">
        <h2 className="font-bold capitalize text-3xl">{property.name}</h2>
        <p className="font-semibold text-2xl text-primary">
          ${formatNumberWithCommas(property.price)}
        </p>
      </div>
      <div className="my-2">
        <ul className="flex flex-wrap">
          <li className="mr-2 my-2">
            <div className="font-semibold flex items-center p-2 rounded-full text-sm bg-primary/10 text-primary ">
              <div className="relative h-6 w-6 mr-2">
                <Image
                  alt="Mountains"
                  src={send}
                  fill
                  sizes="auto"
                  style={{
                    objectFit: "cover", // cover, contain, none
                  }}
                />
              </div>
              <span>{property.location.split("\n")[1]}</span>
            </div>
          </li>

          <li className="mr-2 my-2">
            <div className="font-semibold flex items-center p-2 rounded-full text-sm bg-primary/10 text-primary ">
              <div className="relative h-6 w-6 mr-2">
                <Image
                  alt="Mountains"
                  src={bedBlue}
                  fill
                  sizes="auto"
                  style={{
                    objectFit: "cover", // cover, contain, none
                  }}
                />
              </div>
              <span>6 Bedrooms</span>
            </div>
          </li>
          <li className="mr-2 my-2">
            <div className="font-semibold flex items-center p-2 rounded-full text-sm bg-primary/10 text-primary ">
              <div className="relative h-6 w-6 mr-2">
                <Image
                  alt="Mountains"
                  src={toiletBlue}
                  fill
                  sizes="auto"
                  style={{
                    objectFit: "cover", // cover, contain, none
                  }}
                />
              </div>
              <span>3 Toilets</span>
            </div>
          </li>
          <li className="mr-2 my-2">
            <div className="font-semibold flex items-center p-2 rounded-full text-sm bg-primary/10 text-primary ">
              <div className="relative h-6 w-6 mr-2">
                <Image
                  alt="Mountains"
                  src={area}
                  fill
                  sizes="auto"
                  style={{
                    objectFit: "cover", // cover, contain, none
                  }}
                />
              </div>
              <span>1800m</span>
              <span className="text-[10px] align-top -translate-y-1">2</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Description({ property }: { property: Property }) {
  return (
    <div className="my-6">
      <h2 className="font-semibold text-xl text-[--fore_dark]"> Description</h2>
      <p className="my-2 text-[--fore_light]">{property.description}</p>
    </div>
  );
}

function Features({ property }: { property: Property }) {
  return (
    <div className="my-6">
      <h2 className="font-semibold text-[--fore_dark] text-xl"> Features</h2>
      <ul className="my-2 flex flex-wrap">
        {property.features?.[0].map((el, i) => (
          <li key={i} className="mr-2 flex flex-1 items-center">
            <div className="relative h-4 w-4 mr-2">
              <Image
                alt="Mountains"
                src={checkMark}
                fill
                sizes="auto"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
              />
            </div>
            <span className="font-medium text-sm">{el}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const HorizontalLine = () => {
  return <div className="w-full border-t border-[--fore_light] my-6"></div>;
};

function Gallery({ property }: { property: Property }) {
  return (
    <div className="my-6">
      <h2 className="font-semibold text-[--fore_dark] text-xl"> Gallery</h2>
      <ul className="my-2 grid gap-2 min-[520px]:grid-cols-2 md:grid-cols-3">
        {property.featured_images_url?.map((el, i) => (
          <li key={1} className="relative">
            <div className={"relative h-48"}>
              <Image
                alt="Mountains"
                src={el}
                fill
                sizes="100vw"
                className=" object-cover"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
