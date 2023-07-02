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
import TransitionEffect from "@/components/TransitionEffect";

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
      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Desarrollo Web con Pasión, Resilencia y Persistencia"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Acerca de mí
              </h2>
              <p className="font-medium ">
                ¡Hola! Mi nombre es Horus Sinhue Camacho y soy un apasionado
                desarrollador Full Stack. Mi mundo gira en torno al desarrollo
                web, y me encanta sumergirme en el fascinante universo de la
                programación. Mi enfoque principal se centra en el lenguaje
                Javascript, y he adquirido sólidos conocimientos en diversas
                tecnologías y herramientas. En el lado del frontend, estoy
                familiarizado con librerías como React, así como con frameworks
                como Angular, Vue y Next.js. Disfruto creando interfaces
                dinámicas y atractivas, y estoy constantemente buscando formas
                de mejorar la experiencia del usuario. En el lado del backend,
                utilizo Node.js, Express y Sequelize como ORM para interactuar
                con bases de datos, siendo PostgreSQL y MongoDB mis preferidas.
                Me emociona construir sistemas robustos y escalables, y estoy
                constantemente aprendiendo nuevas técnicas y prácticas para
                mejorar mis habilidades en el desarrollo web.
              </p>
              <p className="my-4 font-medium ">
                Lo que más amo de la programación es la posibilidad de enfrentar
                desafíos constantes y la oportunidad de aprender algo nuevo en
                cada proyecto en el que me involucro. Soy una persona
                persistente y nunca me rindo ante un problema. Siempre busco
                soluciones innovadoras y creativas, y me siento satisfecho
                cuando logro superar obstáculos y entregar soluciones de alta
                calidad. Siempre estoy abierto a nuevas oportunidades de
                crecimiento y colaboración. Si estás buscando un desarrollador
                Full Stack comprometido, apasionado y altamente motivado, ¡me
                encantaría ser parte de tu equipo!
              </p>
              <p className="font-medium ">
                ¡No dudes en ponerse en contacto conmigo para discutir posibles
                proyectos o simplemente para compartir ideas! Estoy ansioso por
                seguir aprendiendo, creciendo y construyendo cosas increíbles en
                el mundo del desarrollo web.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark  bg-light dark:border-light dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8">
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
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-xs xs:text-center">
                  Cursos
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1500} /> +
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-xs xs:text-center">
                  Tazas de café
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-xs xs:text-center ">
                  Experiencia
                </h2>
              </div>
            </div>
          </div>
          <Skills />

          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
