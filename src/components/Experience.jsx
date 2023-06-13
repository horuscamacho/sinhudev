import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "@/components/LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.25 }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-green-800 capitalize"
          >
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-64 ">
      <h2 className="font-bold text-8xl mb-32 w-full text-center ">
        Experience{" "}
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Full Stack Developer"
            company="Congreso del Estado de Hidalgo"
            time={"2022 - Present"}
            address="Pachuca, Hidalgo"
            work="Durante el tiempo en el que realicé mis prácticas profesionales, identifiqué la necesidad de desarrollar una plataforma de gestión que facilitara la actualización y modificación de las normativas vigentes en el Estado de Hidalgo. Tanto en la parte del Front-end como en el Back-end, me di cuenta de la importancia de contar con un sistema que mejorara el procesamiento de estas modificaciones y permitiera la creación de una Biblioteca Digital más eficiente."
            companyLink="https://www.congreso-hidalgo.gob.mx/"
          />
          <Details
            position="Full Stack Developer"
            company="Congreso del Estado de Hidalgo"
            time={"2022 - Present"}
            address="Pachuca, Hidalgo"
            work="Durante el tiempo en el que realicé mis prácticas profesionales, identifiqué la necesidad de desarrollar una plataforma de gestión que facilitara la actualización y modificación de las normativas vigentes en el Estado de Hidalgo. Tanto en la parte del Front-end como en el Back-end, me di cuenta de la importancia de contar con un sistema que mejorara el procesamiento de estas modificaciones y permitiera la creación de una Biblioteca Digital más eficiente."
            companyLink="https://www.congreso-hidalgo.gob.mx/"
          />
          <Details
            position="Full Stack Developer"
            company="Congreso del Estado de Hidalgo"
            time={"2022 - Present"}
            address="Pachuca, Hidalgo"
            work="Durante el tiempo en el que realicé mis prácticas profesionales, identifiqué la necesidad de desarrollar una plataforma de gestión que facilitara la actualización y modificación de las normativas vigentes en el Estado de Hidalgo. Tanto en la parte del Front-end como en el Back-end, me di cuenta de la importancia de contar con un sistema que mejorara el procesamiento de estas modificaciones y permitiera la creación de una Biblioteca Digital más eficiente."
            companyLink="https://www.congreso-hidalgo.gob.mx/"
          />
          <Details
            position="Full Stack Developer"
            company="Congreso del Estado de Hidalgo"
            time={"2022 - Present"}
            address="Pachuca, Hidalgo"
            work="Durante el tiempo en el que realicé mis prácticas profesionales, identifiqué la necesidad de desarrollar una plataforma de gestión que facilitara la actualización y modificación de las normativas vigentes en el Estado de Hidalgo. Tanto en la parte del Front-end como en el Back-end, me di cuenta de la importancia de contar con un sistema que mejorara el procesamiento de estas modificaciones y permitiera la creación de una Biblioteca Digital más eficiente."
            companyLink="https://www.congreso-hidalgo.gob.mx/"
          />
          <Details
            position="Full Stack Developer"
            company="Congreso del Estado de Hidalgo"
            time={"2022 - Present"}
            address="Pachuca, Hidalgo"
            work="Durante el tiempo en el que realicé mis prácticas profesionales, identifiqué la necesidad de desarrollar una plataforma de gestión que facilitara la actualización y modificación de las normativas vigentes en el Estado de Hidalgo. Tanto en la parte del Front-end como en el Back-end, me di cuenta de la importancia de contar con un sistema que mejorara el procesamiento de estas modificaciones y permitiera la creación de una Biblioteca Digital más eficiente."
            companyLink="https://www.congreso-hidalgo.gob.mx/"
          />
        </ul>
      </div>
    </div>
  );
}
