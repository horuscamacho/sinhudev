import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/articles/article1.jpg";
import { motion, useMotionValue } from "framer-motion";
import article2 from "../../public/images/articles/create modal component in react using react portals.png";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(e) {
    imgRef.current.style.display = "inline-block";
    x.set(e.pageX);
    y.set(-5);
  }

  function handleMouseLeave(e) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-cl font-semibold hover:underline dark:decoration-light">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.4 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        width={1400}
        height={700}
      />
    </Link>
  );
};

const Article = ({ img, title, date, summary, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark firs:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:text-light dark:bg-dark sm:flex-col "
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-green-800 font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:border-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-poimter overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          width={1400}
          height={700}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-4 mt-2 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-green-800 font-semibold">{time}</span>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>SinhuDev | Articles Page</title>
        <meta
          name="description"
          content="Navegando en el código: Artículos para desarrolladores web."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="mt-16">
          <AnimatedText
            text="Navegando en el código: Artículos para desarrolladores web"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              time={" 5min lectura"}
              link={"/"}
              title={"Bootcamps: MITO O REALIDAD"}
              img={"https://i.postimg.cc/Fzww7FQk/Now-Open-1.png"}
              summary={
                "¿Valen realmente la pena los Bootcamps que ofrecen milagrosamente aprender a desarrollar aplicaciones en tiempos record entre 4 y 12 meses?."
              }
            />

            <FeaturedArticle
              time={" 5min lectura"}
              link={"/"}
              title={"En búsqueda del primer empleo como desarrollador."}
              img={"https://i.postimg.cc/v8vJyyjB/Now-Open-4.png"}
              summary={
                "'Recientemente me gradué de un curso intensivo, bootcamp o carrera técnica...', realidad de la oferta y demanda de desarrolladores."
              }
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title={"Ruta para convertirse en un desarrollador web"}
              img={"https://i.postimg.cc/3JtWdPyr/Now-Open-5.png"}
              date={"Julio 07, 2023"}
              link={"/"}
            />{" "}
            <Article
              title={"Ruta para convertirse en un desarrollador web"}
              img={"https://i.postimg.cc/3JtWdPyr/Now-Open-5.png"}
              date={"Julio 07, 2023"}
              link={"/"}
            />{" "}
            <Article
              title={"Ruta para convertirse en un desarrollador web"}
              img={"https://i.postimg.cc/3JtWdPyr/Now-Open-5.png"}
              date={"Julio 07, 2023"}
              link={"/"}
            />{" "}
          </ul>
        </Layout>
      </main>
    </>
  );
}
