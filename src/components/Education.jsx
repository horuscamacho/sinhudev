import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "@/components/LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.25 }}
        className="w-full"
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

export default function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-64 ">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Formación{" "}
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Licenciado en Derecho."
            time="2019-2022"
            place="Centro Universitario Antares"
            info={"Licenciado en Derecho con énfasis en juicios orales."}
          />
          <Details
            type={"Full Stack Developer"}
            time={"2021 - 2022"}
            place={"Henry Bootcamp - Buenos Aires, Argentina"}
            info={
              "Bootcamp Argentino, HTML, CSS, JS, React, Express, Redux, Node, PostgreSQL, Sequelize, Git, GitHub, SCRUM"
            }
          />
          <Details
            type={"Front End Developer - Cinta Roja"}
            time={"2019 - 2020"}
            place={"DevF - Ciudad de México"}
            info={"Bootcamp en la CDMX HTML, CSS, JS, React"}
          />
          <Details
            type={"Ingeniero en Computación Administrativa (trunca)"}
            time={"2010 - 2012"}
            place={"Universidad Tec Milenio - Ciudad de México "}
            info={"Ingeniería en Computación Administrativa (trunca)"}
          />

          <Details
            type={
              "Curso Básico de Programación Orientada a Objetos con JavaScript"
            }
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Fundamentos de Programación Orientada a Objetos con JavaScript"
            }
          />
          <Details
            type={"Curso de Angular: Componentes y Servicios"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={"Creación de componentes y servicios en Angular"}
          />

          <Details
            type={
              "Curso de Angular Forms: Creación y Optimización de Formularios Web"
            }
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={"Creación y optimización de formularios web en Angular"}
          />
          <Details
            type={
              "Curso de Angular Router: Lazy Loading y Programación Modular"
            }
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Creación de rutas en Angular y programación modular con Lazy Loading."
            }
          />
          <Details
            type={"Curso de Autenticación con Angular"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={"Autenticación con Angular y Firebase"}
          />
          <Details
            type={"Curso de Backend con Node.js: API REST con Express.js "}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Creación de API REST con Express.js, microservicios, bdd y más"
            }
          />

          <Details
            type={
              "Curso de Backend con Node.js: Autenticación con Passport.js y JWT "
            }
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={"Autenticación con Passport.js y JWT en Node.js"}
          />
          <Details
            type={"Curso de Backend con Node.js: Base de Datos con PostgreSQL"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Base de datos con PostgreSQL en Node.js, migraciones, docker y mucho más."
            }
          />
          <Details
            type={"Curso de Complejidad Algorítmica con JavaScript"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={"Complejidad Algorítmica con JavaScript"}
          />

          <Details
            type={"Curso de Consumo de APIs REST con Angular"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={"Consumo de APIs REST con Angular"}
          />
        </ul>
      </div>
    </div>
  );
}
