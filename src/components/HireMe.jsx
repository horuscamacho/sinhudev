import { CircularText } from "@/components/Icons";
import Link from "next/link";

export default function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-2 md:bottom-auto sm:right-2">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText className="fill-dark animate-spin-slow dark:fill-light" />
        <Link
          href="/"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-24 h-24 rounded-full font-semibold hover:bg-light hover:text-dark  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light  dark:fill-dark fill-light hover:fill-dark hover:dark:fill-light dark:hover:border-light md:w-12 md:h-12 md:text-[10px] md:absolute"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
}
