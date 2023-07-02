import Layout from "@/components/Layout";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg dark:text-light sm:text-base ">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:p-6">
        <span>{new Date().getFullYear()} &copy; Derechos reservados.</span>
        <div className="flex items-center lg:py-2">
          Desarrollado con{" "}
          <span className="text-dark dark:text-light text-2xl px-1">
            &#9825;
          </span>
          por&nbsp;
          <Link href="/" className=" ">
            SinhuDev
          </Link>
        </div>
        <Link href="">Bienvenido</Link>
      </Layout>
    </footer>
  );
}
