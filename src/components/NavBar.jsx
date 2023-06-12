import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { useRouter } from "next/router";
import {
  Github,
  LinkedIn,
  MoonIcon,
  SunIcon,
  TwitterIcon,
  Youtube,
} from "@/components/Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
export default function NavBar() {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      <nav>
        <CustomLink href="/about" title="Acerca" className="mr-4" />
        <CustomLink href="/projects" title="Proyectos" className="mx-4" />
        <CustomLink href="/news" title="Noticias" className="mx-4" />
        <CustomLink href="/articles" title="Artículos" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          whileHover={{ y: -2 }}
          href={"https://twitter.com/sinhudev"}
          target={"_blank"}
          className="w-6 mr-3"
          whileTap={{ scale: 0.7 }}
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          href={"https://youtube.com/sinhudev"}
          target={"_blank"}
          className="w-6 mx-3"
          whileTap={{ scale: 0.7 }}
        >
          <Youtube />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          href={"https://linkedin.com"}
          target={"_blank"}
          className="w-6 mx-3"
          whileTap={{ scale: 0.7 }}
        >
          <LinkedIn />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          href={"https://github.com"}
          target={"_blank"}
          className="w-6 ml-3"
          whileTap={{ scale: 0.7 }}
        >
          <Github className="dark:fill-light" />
        </motion.a>
        <button
          className={`ml-3 flex items-center justify-center rounded-full p-1 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
