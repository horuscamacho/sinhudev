import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/foto.png";

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

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Viviendo el sueño!" className="mb-16" />
          <div className="grid w-full grid-cols-8  gap-16 ">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
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
                algunos semestres en la Universidad Tecnológica de la Selva,
                pero por cuestiones personales no pude terminarla, sin embargo,
                eso no me detuvo para seguir aprendiendo y desarrollando mis
                habilidades como desarrollador.
              </p>
              <p className="font-medium ">
                - Fue en el año 2019 cuando decidí aprender en forma y fue
                entonces que tuve mi primer contacto con un Bootcamp. Desde
                entonces he estado aprendiendo y desarrollando mis habilidades
                como desarrollador.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark  bg-light">
              <div className="absolute top-0 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark">
                {" "}
              </div>
              <Image
                src={profilePic}
                alt="Horus Sinhue"
                className="rounded-2xl"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
