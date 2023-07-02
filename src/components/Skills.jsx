import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark absolute dark:shadow-light dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:txet-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent cs:text-dark xs:dark-text-light xs:font-bold"
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 0.5 } }}
    >
      {name}
    </motion.div>
  );
};

export default function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-3xl md:mt-32">
        Habilidades{" "}
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full cursor-pointer lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] sm:mt-20 ">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="md:w-full flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:text-dark dark:bg-light dark:shadow-light lg:p-6 md:p-4 xs:text-xs xs:p-2 sm:h-[40vh] md:h-[80vh] "
        >
          Full Stack
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="React" x="0vw" y="12vw" />
        <Skill name="Angular" x="-20vw" y="-15vw" />
        <Skill name="NodeJS" x="15vw" y="-12vw" />
        <Skill name="Express" x="32vw" y="-5vw" />
        <Skill name="PostgreSQL" x="0vw" y="-20vw" />
        <Skill name="Tailwind" x="-25vw" y="18vw" />
        <Skill name="Bootstrap" x="18vw" y="18vw" />
        <Skill name="CDK" x="32vw" y="-15vw" />
        <Skill name="Material UI" x="-25vw" y="-6vw" />
        <Skill name="Github" x="0vw" y="22vw" />
        <Skill name="Vue" x="32vw" y="12vw" />
      </div>
    </>
  );
}
