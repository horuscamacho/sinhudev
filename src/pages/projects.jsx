import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { Github } from "@/components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        href={link}
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          width={1400}
          height={700}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-green-800 font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:decoration-light"
        >
          <h2
            className={
              "my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm"
            }
          >
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link className="w-10" href={github} target="_blank">
            <Github className="dark:fill-light" />
          </Link>
          <Link
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            href={link}
            target="_blank"
          >
            Visitar proyecto
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ title, img, link, github, type }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-2xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
          width={1000}
          height={800}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-green-800 font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:decoration-light"
        >
          <h2
            className={
              "my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl"
            }
          >
            {title}
          </h2>
        </Link>
        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            className="text-lg font-semibold underline dark:text-light md:text-base"
            href={link}
            target="_blank"
          >
            Visitar
          </Link>
          <Link className="w-8 md:w-6" href={github} target="_blank">
            <Github className="dark:fill-light" />
          </Link>
        </div>
      </div>
    </article>
  );
};
export default function Projects() {
  return (
    <>
      <Head>
        <title>Sinhu Dev | Proyectos</title>
        <meta
          name="Proyectos"
          content="Ideas personales, proyectos para particulaes e ideas para practicar ."
        />
        <meta content="#0891b2" name="theme-color" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            text="Proyectos Personales Back End, Front End y Full Stack"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Yard Store - React"
                summary="Tienda en línea de productos con peticiones a API, carrito de compras."
                img={"https://i.postimg.cc/V69sWM5W/My-day-app-1.png"}
                link="https://www.google.com"
                github="https://www.google.com"
                type="Practice Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="My Day App - Angular"
                img="https://i.postimg.cc/Qx9VKBhV/My-day-app.png"
                link="https://www.google.com"
                github="https://www.google.com"
                type="Practice Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="API - Node JS"
                img={"https://i.postimg.cc/s2WKKPS8/My-day-app-4.png"}
                link="https://www.google.com"
                github="https://www.google.com"
                type="Practice Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Twitter Clone - Next JS"
                summary="Clon de Twitter con autenticación, registro de usuarios, comentarios, likes, follows etc."
                img={"https://i.postimg.cc/3JyGg82f/My-day-app-5.png"}
                link="https://www.google.com"
                github="https://www.google.com"
                type="Practice Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
