import Layout from "@/components/Layout";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Desarrollado con{" "}
          <span className="text-dark text-2xl px-1">&#9825;</span>
          por&nbsp;
          <Link href="/" className="underline underline-offset-4">
            SinhuDev
          </Link>
        </div>
        <Link href="">Say Hello</Link>
      </Layout>
    </footer>
  );
}
