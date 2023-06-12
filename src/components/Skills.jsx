import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark absolute"
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

export default function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-6 w-full text-center ">Skills </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full cursor-pointer">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark"
        >
          Full Stack
        </motion.div>
        <Skill name="HTML" x="0vw" y="-30vw" />
        <Skill name="CSS" x="0vw" y="30vw" />
        <Skill name="JavaScript" x="-29vw" y="-20vw" />
        <Skill name="React" x="29vw" y="20vw" />
        <Skill name="Angular" x="29vw" y="-20vw" />
        <Skill name="NodeJS" x="-29vw" y="20vw" />
        <Skill name="Express" x="-15vw" y="-15vw" />
        <Skill name="PostgreSQL" x="15vw" y="15vw" />
        <Skill name="Tailwind CSS" x="-15vw" y="15vw" />
        <Skill name="Bootstrap" x="15vw" y="-15vw" />
        <Skill name="Material UI" x="20vw" y="-27vw" />
        <Skill name="Github" x="30vw" y="0vw" />
        <Skill name="Angular CDK" x="-20vw" y="-27vw" />
        <Skill name="Vue" x="-29vw" y="0vw" />
        <Skill name="React Native" x="-20vw" y="27vw" />
      </div>
    </>
  );
}
