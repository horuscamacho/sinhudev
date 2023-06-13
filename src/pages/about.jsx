import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/foto.png";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default function about() {
  return (
    <>
      <Head>
        <title>SinhuDev | About Page</title>
        <meta
          name="description"
          content="En SinhuDev nadie es Sr y nadie es Jr todos somos desarrolladores."
        />
      </Head>

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Viviendo el sueño!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Acerca de mí
              </h2>
              <p className="font-medium ">
                Hola, mi nombre es Horus Sinhue, desarrollador encargado de
                construir y mantener este sitio web. Me apasiona el mundo de la
                Tecnología, desde pequeño mi sueño fue ser un gran desarrollador
                y todos los días trabajo en ello para lograrlo. Me encanta
                aprender nuevas tecnologías además de ofrecer soluciones
                digitales para las personas que lo necesiten.
              </p>
              <p className="my-4 font-medium ">
                - Curse la carrera de Ingeniería en Sistemas Computacionales
                algunos semestres en la Universidad Tec Milenio, pero por
                cuestiones personales no pude terminarla, sin embargo, eso no me
                detuvo para seguir aprendiendo y desarrollando mis habilidades
                como desarrollador.
              </p>
              <p className="font-medium ">
                - Fue en el año 2019 cuando decidí aprender en forma y fue
                entonces que tuve mi primer contacto con un Bootcamp. Desde
                entonces he estado aprendiendo y desarrollando mis habilidades
                como desarrollador.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark  bg-light dark:border-light dark:bg-dark xl:col-span-4 md:order-1">
              <div className="absolute top-0 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light">
                {" "}
              </div>
              <Image
                src={profilePic}
                alt="Horus Sinhue"
                className="rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Cursos/certificaciones
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={1500} /> +
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Tazas de café
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Años de experiencia
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Education />
          <Experience />
        </Layout>
      </main>
    </>
  );
}
