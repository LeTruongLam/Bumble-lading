"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import { tinderProfiles } from "@/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

export default function TinderSlider() {
  const [profiles] = useState(tinderProfiles);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSwipe = (direction: any) => {
    if (currentIndex < profiles.length) {
      setSwipeDirection(direction);
      setTimeout(() => setSwipeDirection(null), 500);

      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSwipe = (swiper: any) => {
    if (swiper.swipeDirection === "next") {
      handleSwipe("like");
    } else if (swiper.swipeDirection === "prev") {
      handleSwipe("dislike");
    }
  };

  return (
    <div className="flex-1 py-8 px-[10%] relative">
      {currentIndex < profiles.length ? (
        <>
          <Swiper
            className="bg-[#fff7d8] h-full rounded-[32px] relative"
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative]}
            oneWayMovement={false}
            onTouchEnd={(swiper) => onSwipe(swiper)}
          >
            <SwiperSlide key={profiles[currentIndex].id}>
              <div className="flex w-full h-full max-h-[calc(100vh-136px)] bg-[#fff7d8]">
                <div className="w-1/2">
                  <Image
                    className="w-full h-full object-cover rounded-l-[32px]"
                    src={profiles[currentIndex].photo}
                    alt={profiles[currentIndex].name}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="w-1/2 flex flex-col justify-center p-8">
                  <h3 className="text-4xl font-extrabold">
                    {profiles[currentIndex].name}, {profiles[currentIndex].age}
                  </h3>
                  <p className="mt-4 mb-3">{profiles[currentIndex].bio}</p>
                  <p className="mb-3">
                    <strong>Location:</strong> {profiles[currentIndex].location}
                  </p>
                  <p>
                    <strong>Hobbies:</strong>{" "}
                    {profiles[currentIndex].hobbies.join(", ")}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center space-x-4">
            <Button
              onClick={() => handleSwipe("dislike")}
              variant={"outline"}
              className={`w-16 h-16 rounded-full group hover:border-none transition-transform duration-300 ease-in-out ${
                swipeDirection === "dislike" ? "scale-125" : "scale-100"
              }`}
            >
              <X color="#b23434" strokeWidth={6} />
            </Button>
            <Button
              onClick={() => handleSwipe("like")}
              variant={"outline"}
              className={`w-16 h-16 rounded-full group hover:border-none transition-transform duration-300 ease-in-out ${
                swipeDirection === "like" ? "scale-125" : "scale-100"
              }`}
            >
              <Check strokeWidth={6} color="#cf6a17" />
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center  text-2xl font-bold flex justify-center items-center h-full">
          <p className="text-primary-content">
            Hết lượt match ngày hôm nay.
            <br /> Vui lòng nâng cấp lên{" "}
            <span className="text-blue-500 hover:underline">Premium</span> để
            tiếp tục!
          </p>
        </div>
      )}
    </div>
  );
}
