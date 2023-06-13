import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { Github } from "@/components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12">
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        href={link}
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-green-800 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:decoration-light"
        >
          <h2
            className={
              "my-2 w-full text-left text-4xl font-bold dark:text-light "
            }
          >
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link className="w-10" href={github} target="_blank">
            <Github className="dark:fill-light" />
          </Link>
          <Link
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
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
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative ">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-2xl dark:bg-light " />
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
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-green-800 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:decoration-light"
        >
          <h2
            className={
              "my-2 w-full text-left text-3xl font-bold dark:text-light"
            }
          >
            {title}
          </h2>
        </Link>
        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            className="text-lg font-semibold underline dark:text-light "
            href={link}
            target="_blank"
          >
            Visitar
          </Link>
          <Link className="w-8" href={github} target="_blank">
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
        <title>SinhuDev | Projects Page</title>
        <meta
          name="Proyectos"
          content="Una lista de mis proyectos realizados personalmente o de forma Freelance."
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText className="mb-16 " text="Lo imaginas, lo tienes." />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
local currency."
                img={project1}
                link="https://www.google.com"
                github="https://www.google.com"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
local currency."
                img={project1}
                link="https://www.google.com"
                github="https://www.google.com"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
local currency."
                img={project1}
                link="https://www.google.com"
                github="https://www.google.com"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
local currency."
                img={project1}
                link="https://www.google.com"
                github="https://www.google.com"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
local currency."
                img={project1}
                link="https://www.google.com"
                github="https://www.google.com"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
local currency."
                img={project1}
                link="https://www.google.com"
                github="https://www.google.com"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
