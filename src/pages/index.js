import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { ArrowCV } from "@/components/Icons";
import { useState } from "react";
import HireMe from "@/components/HireMe";
import mac from "../../public/images/svgs/mac.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [arrowColor, setArrowColor] = useState("#fff");

  return (
    <>
      <Head>
        <title>Sinhudev</title>
        <meta name="description" content="" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="sinhudev"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="No rendirse, perseguir sueños y convertir código en realidad."
                className="!text-6xl !text-left"
              />
              <p className="my-4 tet-base font-medium">
                Soy un desarrollado Full Stack con experiencia en convertir
                ideas en aplicaciones web. Apasionado, hambriento de
                conocimiento y nuevas experiencias; compartiendo lo vívido en el
                camino.
              </p>
              <div className={"flex items-center self-start mt-2"}>
                <Link
                  onMouseLeave={() => setArrowColor("#fff")}
                  onMouseEnter={() => setArrowColor("#000")}
                  href="/dummy.pdf"
                  target="_blank"
                  className="
                  flex items-center bg-dark text-light
                  p-2.5 px-6 rounded-lg text-lg
                  font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent
                  hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light  dark:fill-dark fill-light hover:fill-dark hover:dark:fill-light dark:hover:border-light"
                  download={true}
                >
                  CV
                  <ArrowCV className="ml-2  " />
                </Link>
                <Link
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
                  href=""
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-48">
          <Image src={mac} alt="SinhuDev" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
