"use client";

import { showInterest } from "@/actions/interest";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import interestCheck from "../../public/images/interestCheck.svg";
import checkMark from "../../public/images/checkMark.svg";
import property from "../../public/images/house.png";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Cbutton from "./Cbutton";

type Inputs = {
  name: string;
  email: string;
  phone_no: string;
};

export default function ShowInterest({ propertyId }: { propertyId: string }) {
  const [shownInterest, hasShownInterest] = useState(false);
  const [showError, setShowError] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  // const { pending } = useFormStatus();
  // console.log(watch("email"));
  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    console.log(data);

    try {
      await showInterest(data, propertyId);

      if (document) {
        (document.getElementById("my_modal_2") as HTMLFormElement).showModal();
      }
      hasShownInterest(true);
    } catch (error: any) {
      setShowError(error.message);
      console.log("unsuccessful", error);
    }
  };

  return (
    <div className="">
      <dialog id="my_modal_2" className="modal">
        <div className="p-4 modal-box ">
          <div className="flex flex-col justify-center w-full max-w-md p-8">
            <h3 className="font-bold text-2xl mx-auto text-primary text-center">
              Successful
            </h3>
            <p className="py-4 text-center font-semibold text-xl text-[--fore_light]">
              Your interest has been registered successfully
            </p>
            <div className="relative h-32 w-32 mx-auto">
              <Image
                alt="Mountains"
                src={checkMark}
                fill
                sizes="auto"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
              />
            </div>{" "}
          </div>
        </div>

        {/* blur-sm */}
        <form method="dialog" className="modal-backdrop glass">
          <button>close</button>
        </form>
      </dialog>
      {!shownInterest ? (
        <div className="border-[--fore_light] border-[1px] rounded mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg ">
            <h3 className="font-semibold">Show Interest</h3>

            <p className="mt-4 text-sm text-[--fore_light]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque
            </p>
          </div>
          {showError && (
            <div className="border-[1px] rounded border-red-200 text-red-300 p-2 my-2">
              <small>{showError}</small>
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Full Name"
                  // id="name"
                  defaultValue="test"
                  {...register("name")}
                />
                {errors.name && <span>This field is required</span>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email Adress
              </label>

              <div className="relative">
                <input
                  type="email"
                  // id="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  {...register("email")}
                />
                {errors.email && <span>This field is required</span>}
              </div>
            </div>

            <div>
              <label htmlFor="phone_no" className="sr-only">
                Phone Number
              </label>

              <div className="relative">
                <input
                  type="text"
                  // // id="phone"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Phone Number"
                  {...(register("phone_no"), { required: true })}
                />
                {errors.phone_no && <span>This field is required</span>}
              </div>
            </div>

            <div className="my-2 flex flex-col items-center">
              <Cbutton type="submit" classes="btn-primary w-full my-2 ">
                Show Interest
              </Cbutton>
              <Cbutton
                type="button"
                classes="btn-primary btn-outline w-full my-2 "
              >
                Register with gmail
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.176 21.0962C23.0113 18.4499 24.2714 14.0395 23.5153 9.81812H12.2373V14.4806H18.6639C18.4119 15.9927 17.5297 17.2528 16.2697 18.0719L20.176 21.0962Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M1.52637 17.3788C1.62961 17.582 1.73847 17.7822 1.85293 17.9793C1.96748 18.1765 2.08747 18.3702 2.21289 18.5606C2.3384 18.7509 2.46907 18.9376 2.6051 19.1205C2.74112 19.3035 2.88214 19.4824 3.02834 19.6574C3.17444 19.8323 3.32536 20.0031 3.4812 20.1695C3.63694 20.3359 3.79733 20.4978 3.96228 20.6552C4.12723 20.8125 4.29647 20.9651 4.47 21.113C4.64354 21.2608 4.82111 21.4035 5.0028 21.5413C5.1844 21.6791 5.36977 21.8116 5.5589 21.9389C5.74804 22.0661 5.9406 22.1879 6.13666 22.3043C6.33263 22.4207 6.53176 22.5315 6.73405 22.6367C6.93633 22.7418 7.14142 22.8412 7.34931 22.9347C7.5572 23.0282 7.76755 23.1158 7.98044 23.1974C8.19324 23.2791 8.40824 23.3547 8.62533 23.4242C8.84243 23.4937 9.06136 23.557 9.28205 23.6141C9.50274 23.6712 9.72484 23.7221 9.94842 23.7667C10.172 23.8112 10.3966 23.8494 10.6224 23.8813C10.8481 23.9131 11.0746 23.9387 11.3017 23.9577C11.5289 23.9767 11.7564 23.9894 11.9843 23.9955C12.2122 24.0018 12.4401 24.0015 12.6679 23.9948C12.8958 23.9882 13.1233 23.975 13.3504 23.9555C13.5775 23.9359 13.8039 23.91 14.0296 23.8777C14.2553 23.8453 14.4798 23.8066 14.7033 23.7615C14.9268 23.7165 15.1488 23.6652 15.3693 23.6076C15.5899 23.55 15.8087 23.4862 16.0257 23.4163C16.2426 23.3463 16.4574 23.2703 16.6702 23.1881C16.8828 23.106 17.093 23.018 17.3007 22.924C17.5084 22.83 17.7132 22.7303 17.9152 22.6247C18.1173 22.5192 18.3162 22.4079 18.512 22.2911C18.7077 22.1743 18.9 22.052 19.0889 21.9244C19.2778 21.7967 19.4629 21.6637 19.6442 21.5256C19.8255 21.3875 20.0029 21.2443 20.176 21.0962L16.2697 18.0719C12.9304 20.277 7.38595 19.458 5.49571 14.2915L1.52637 17.3788Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.49554 14.2914C4.99149 12.7163 4.99149 11.2672 5.49554 9.69202L1.52619 6.60474C0.0770747 9.50306 -0.363954 13.5984 1.52619 17.3787L5.49554 14.2914Z"
                    fill="#FBBC02"
                  />
                  <path
                    d="M5.49571 9.69205C6.8819 5.3447 12.8044 2.82447 16.7738 6.54175L20.2391 3.13947C15.3246 -1.5859 5.74778 -1.39694 1.52637 6.60477L5.49571 9.69205Z"
                    fill="#EA4335"
                  />
                </svg>
              </Cbutton>
              <small className="text-center font-medium ">
                {" "}
                Have an account? <span className="text-primary">Log in</span>
              </small>
            </div>
          </form>
        </div>
      ) : (
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 p-8 flex justify-center flex-col border-primary/20 border-[1px] bg-primary/10 rounded">
          <div className="relative h-10 w-10 mx-auto">
            <Image
              alt="Mountains"
              src={interestCheck}
              fill
              sizes="auto"
              style={{
                objectFit: "cover", // cover, contain, none
              }}
            />
          </div>{" "}
          <div className="w-48 mx-auto">
            <Image
              alt="Mountains"
              // Importing an image will
              // automatically set the width and height
              src={property}
              sizes="100vw"
              // Make the image display full width
              className="w-full h-auto"
            />
          </div>
          <p className="py-2 text-[--fore_dark] text-sm text-center max-w-40 mx-auto">
            You have indicated interest in this property
          </p>
        </div>
      )}
    </div>
  );
}

// action={async (formData: FormData) => {
//   await showInterest(propertyId, formData);
//   if (document) {
//     (
//       document.getElementById("my_modal_2") as HTMLFormElement
//     ).showModal();
//   }
// }}
