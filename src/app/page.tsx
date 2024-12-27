"use client";
import Header from "@/components/layouts/header";
import Image from "next/image";
import QRIcon from "@/components/atoms/QRIcon";
import { Button } from "@/components/ui/button";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Footer from "@/components/layouts/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="relative w-full ">
          <Image
            src="/bg_section-1.avif"
            width={1920}
            height={1080}
            alt="Mô tả hình ảnh"
            className="w-full h-full relative max-h-[calc(100vh-4.5rem)] object-cover object-[77%_10%] "
          />
          <div className="absolute  top-0 left-0 w-full h-full bg-black bg-opacity-30">
            <div className=" h-full px-24 py-[108px] flex flex-col justify-center items-center text-center">
              <h1 className="text-responsive   uppercase font-bumble-bold text-secondary-content mb-6">
                Make the next move
              </h1>
              <QRIcon fill="#fff" />
              <div className="mt-6">
                <p className="text-xl text-secondary-content ">
                  Its better on the app.
                </p>
                <div className="flex flex-col justify-center  items-center gap-3  mt-3">
                  <Button className="bg-white h-12 w-max text-primary-content  text-[18px] rounded-[24px] px-6 py-3 min-w-[150px] hover:bg-slate-100 ">
                    Download now
                  </Button>

                  <Button className="bg-white h-12 w-max text-primary-content text-[18px]  rounded-[24px] px-6 py-3 min-w-[150px] hover:bg-slate-100  ">
                    <Link href="/sign-in">Sign In</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted-content">
          <div className="container py-[96px] px-[108px] flex items-center justify-start gap-4">
            <div className="w-1/2 pr-[5%] leading-[0.85] text-primary-content">
              <h2 className="text-responsive uppercase font-bumble-bold mb-6">
                Bring your bar back up to where it belongs
              </h2>
              <p className="text-xl mb-5">
                You deserve better, so weve designed great ways for you to date
                more and stress less.
              </p>
              <Button className="bg-primary-content text-white h-12 w-max text-[18px] rounded-[24px] px-6 py-3 min-w-[150px] hover:bg-primary-content hover:bg-opacity-95 ">
                See whats new
              </Button>
            </div>
            <div className="w-1/2 ">
              <Image
                className="h-full rounded-3xl aspect-[600/620] object-cover object-[65%_10%]"
                src="/bg_section-2.avif"
                width={600}
                height={620}
                alt="Mô tả hình ảnh"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="container py-[96px] px-[108px] flex flex-col gap-6 ">
            <div>
              <h2 className="text-responsive uppercase font-bumble-bold mb-6">
                Were not just for dating
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-6 ">
              <div>
                <Image
                  src={"/blog-item-1.avif"}
                  width={379}
                  height={252}
                  alt="Mô tả hình ảnh"
                  className="rounded-[24px] object-cover aspect-[3/2]"
                  priority
                />
                <div className="pt-8">
                  <a
                    href="#"
                    className="text-[36px] hover:underline leading-[1.1]"
                  >
                    Meet someone with Bumble Date
                  </a>
                  <p className="text-lg mt-3">
                    Find someone you actually want to date, then go ahead and
                    Make the First Move. Make genuine connections, vibe over
                    what you both love, and most importantly, have fun.
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src={"/blog-item-2.avif"}
                  width={379}
                  height={252}
                  alt="Mô tả hình ảnh"
                  className="rounded-[24px] object-cover aspect-[3/2]"
                  priority
                />
                <div className="pt-8">
                  <a
                    href="#"
                    className="text-[36px] hover:underline leading-[1.1]"
                  >
                    Find new friends on Bumble For Friends
                  </a>
                  <p className="text-lg mt-3">
                    Meet someone like you. Or unlike you. Make new friends and
                    find new things to do together — whether youre home or away.
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src={"/blog-item-3.avif"}
                  width={379}
                  height={252}
                  alt="Mô tả hình ảnh"
                  className="rounded-[24px] object-cover aspect-[3/2]"
                  priority
                />
                <div className="pt-8">
                  <a
                    href="#"
                    className="text-[36px] hover:underline leading-[1.1]"
                  >
                    Make career moves with Bumble Bizz
                  </a>
                  <p className="text-lg mt-3">
                    Find friends with work benefits. Connect with other business
                    professionals to find your next job, a mentor or even a
                    whole new career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-secondary-content">
          <div className="container py-[96px] px-[108px] flex items-center justify-start gap-4">
            <div className="w-1/2 ">
              <Image
                className="h-full rounded-3xl aspect-[600/620] object-cover object-[65%_10%]"
                src="/bg_section-3.avif"
                width={600}
                height={620}
                alt="Mô tả hình ảnh"
              />
            </div>
            <div className="w-1/2 pl-[5%] leading-[0.85] text-primary-content">
              <h2 className="text-responsive uppercase font-bumble-bold mb-6">
                Make the first move™
              </h2>
              <p className="text-xl mb-5">
                Were the only app that makes dating better by putting womens
                experiences first. Because when things are better for women,
                theyre better for everyone.
              </p>
              <Button className="bg-primary-content text-white h-12 w-max text-[18px] rounded-[24px] px-6 py-3 min-w-[150px] hover:bg-primary-content hover:bg-opacity-95 ">
                About Bumble
              </Button>
            </div>
          </div>
        </section>
        <section className="bg-muted-content">
          <div className="container py-[96px] px-[108px] flex flex-col gap-6 ">
            <div>
              <h2 className="text-responsive uppercase font-bumble-bold mb-6 leading-[0.85]">
                If it worked for them, <br /> it could work for you
              </h2>
            </div>
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <Card className="w-full  flex bg-white rounded-[24px] border-none items-center ">
                    <div className="w-1/2 rounded-l-[24px] overflow-hidden">
                      <Image
                        src={"/landing-carousel-1.avif"}
                        height={404}
                        width={606}
                        alt="Mô tả hình ảnh"
                        className=""
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-4xl break-words leading-[1.1] hover:underline">
                        Hannah Met Her Now-Husband on Bumble.
                      </h3>
                      <p className="break-words text-lg leading-[1.3] mt-3">
                        A Few Months Later, She Met One of Her Bridesmaids
                        There, Too
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="w-full  flex bg-white rounded-[24px] border-none items-center ">
                    <div className="w-1/2 rounded-l-[24px] overflow-hidden">
                      <Image
                        src={"/landing-carousel-2.avif"}
                        height={404}
                        width={606}
                        alt="Mô tả hình ảnh"
                        className=""
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-4xl break-words leading-[1.1] hover:underline">
                        Brian and Kaci
                      </h3>
                      <p className="break-words text-lg leading-[1.3] mt-3">
                        Brian and Kaci Were Stationed Overseas Together—But They
                        Met on Bumble
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="w-full  flex bg-white rounded-[24px] border-none items-center ">
                    <div className="w-1/2 rounded-l-[24px] overflow-hidden">
                      <Image
                        src={"/landing-carousel-3.avif"}
                        height={404}
                        width={606}
                        alt="Mô tả hình ảnh"
                        className=""
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-4xl break-words leading-[1.1] hover:underline">
                        Hannah Met Her Now-Husband on Bumble.
                      </h3>
                      <p className="break-words text-lg leading-[1.3] mt-3">
                        A Few Months Later, She Met One of Her Bridesmaids
                        There, Too
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
