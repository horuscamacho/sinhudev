import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "@/components/LiIcon";

const Details = ({ type, time, place, info }) => {
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
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center ">
        Formación{" "}
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Licenciado en Derecho."
            time="2019-2022"
            place="Centro Universitario Antares"
            info="Durante la Licenciatura en Derecho, adquirí un sólido conocimiento de los principios fundamentales y las distintas ramas del derecho. Mi formación académica me proporcionó una base integral en áreas como el derecho civil, penal, administrativo, constitucional y laboral.

A lo largo de mi programa de estudios, desarrollé habilidades analíticas y de resolución de problemas que me permiten analizar de manera crítica los casos legales y encontrar soluciones efectivas. Además, aprendí a redactar documentos legales precisos, realizar investigaciones jurídicas exhaustivas y argumentar de manera persuasiva."
          />
          <Details
            type={"Full Stack Developer"}
            time={"2021 - 2022"}
            place={"Henry Bootcamp - Buenos Aires, Argentina"}
            info={
              "Soy un apasionado de la tecnología y durante mi formación como Full Stack Developer en el prestigioso bootcamp argentino Henry, adquirí una amplia gama de habilidades técnicas y prácticas que me permiten desarrollar soluciones web completas y funcionales. Durante el programa intensivo de Henry, me sumergí en el mundo del desarrollo web, aprendiendo las últimas tecnologías y herramientas que demanda la industria. Adquirí conocimientos sólidos en lenguajes de programación como JavaScrip. Trabaje con frameworks y librerías populares como React y Node.js. Además, adquirí experiencia en el desarrollo de bases de datos utilizando tecnologías como SQL. Además, en Henry desarrollé habilidades de resolución de problemas, trabajo en equipo y comunicación efectiva. La metodología de enseñanza basada en proyectos y el entorno colaborativo me ayudaron a mejorar mi capacidad para enfrentar desafíos técnicos y trabajar de manera eficiente en equipos multidisciplinarios."
            }
          />
          <Details
            type={"Front End Developer - Cinta Roja"}
            time={"2019 - 2020"}
            place={"DevF - Ciudad de México"}
            info="Frontend Developer - Cinta Roja (DevF México):
Como apasionado del desarrollo web, tuve el privilegio de participar en el programa de formación de Frontend Developer en DevF México como cinta roja, donde adquirí habilidades sólidas en el ámbito de la programación y diseño de interfaces web.

Durante mi tiempo en DevF México, me sumergí en el mundo del desarrollo frontend, aprendiendo tecnologías y herramientas de vanguardia para crear experiencias digitales atractivas y funcionales. Me familiaricé con lenguajes y tecnologías como HTML, CSS y JavaScript, y trabajé con librerías populares como React. La experiencia en DevF México como cinta roja me brindó una base sólida como Frontend Developer, con la capacidad de traducir diseños creativos en interfaces web atractivas y funcionales. Estoy emocionado/a por seguir creciendo y aprendiendo en el campo del desarrollo frontend, y estoy listo/a para enfrentar nuevos desafíos y contribuir con mis habilidades técnicas en proyectos innovadores."
          />
          <Details
            type={"Ingeniero en Computación Administrativa (trunca)"}
            time={"2010 - 2012"}
            place={"Universidad Tec Milenio - Ciudad de México "}
            info={
              "Durante mi tiempo en el Tec Milenio, estudié la carrera de Ingeniería en Computación Administrativa, donde adquirí una sólida formación en los fundamentos de la informática y la gestión empresarial.\n" +
              "\n" +
              "Mi enfoque principal fue la aplicación de la tecnología de la información para optimizar los procesos empresariales y mejorar la toma de decisiones. A través de cursos y proyectos académicos, adquirí conocimientos en áreas como programación, bases de datos, redes de computadoras y administración de proyectos. Aunque mi carrera en Ingeniería en Computación Administrativa fue trunca, las habilidades y conocimientos adquiridos me brindaron una base sólida en el ámbito de la tecnología de la información y la gestión empresarial, además de solución y manejo de conflictos."
            }
          />
          <Details
            type={
              "Curso Básico de Programación Orientada a Objetos con JavaScript"
            }
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Durante este curso, adquirí sólidos conocimientos y habilidades en programación orientada a objetos (POO) en JavaScript. Comprendí la diferencia entre objetos literales, instancias, clases y prototipos, lo que me permitió desarrollar aplicaciones más estructuradas y eficientes.\n" +
              "\n" +
              "A través de ejercicios prácticos y análisis de casos de uso, practiqué los fundamentos de la POO y experimenté los beneficios de utilizar este enfoque en mis proyectos. Ordené mi código utilizando abstracción y encapsulamiento, mejorando la legibilidad y mantenibilidad de mis aplicaciones.\n" +
              "\n" +
              "Además, aprendí a reutilizar mi código utilizando conceptos de herencia y polimorfismo, optimizando mi flujo de trabajo y ahorrando tiempo en el desarrollo de nuevas funcionalidades."
            }
          />
          <Details
            type={"Curso de Angular: Componentes y Servicios"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Durante este curso, profundicé mis conocimientos en Angular, el framework de desarrollo creado por Google. Aprendí a dividir mi proyecto en componentes y a comprender la arquitectura de este potente framework.\n" +
              "\n" +
              "Además, adquirí habilidades para conectar mis aplicaciones con una API, permitiéndome obtener y manipular datos provenientes de un sistema de Backend. Esta integración con la API me ha permitido desarrollar aplicaciones más dinámicas y funcionales.\n" +
              "\n" +
              "A través de prácticas y ejercicios, pude comprender y aplicar la programación reactiva en Angular, lo que me ha permitido construir aplicaciones más eficientes y responsivas."
            }
          />
          <Details
            type={
              "Curso de Angular Forms: Creación y Optimización de Formularios Web"
            }
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Durante este curso, me sumergí en el mundo de Angular Forms y aprendí a crear formularios dinámicos y reactivos para mis proyectos web. Comprendí la importancia de los formularios en un sitio web y cómo pueden mejorar la experiencia del usuario.\n" +
              "\n" +
              "Exploré los componentes esenciales de Reactive Forms, lo que me permitió crear formularios interactivos con una amplia variedad de inputs. Además, aprendí a implementar diferentes tipos de validaciones, tanto sincrónicas como asíncronas, para garantizar la integridad y precisión de los datos ingresados.\n" +
              "\n" +
              "Una de las habilidades clave que adquirí en este curso fue la capacidad de crear validaciones personalizadas y asincrónicas, lo que me permitió adaptar los formularios a las necesidades específicas de mis proyectos.\n" +
              "\n"
            }
          />
          <Details
            type={
              "Curso de Angular Router: Lazy Loading y Programación Modular"
            }
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "En resumen, el Curso de Angular Router: Lazy Loading y Programación Modular me brindó las herramientas necesarias para crear una navegación efectiva en Angular, organizar mi código de manera modular y controlar el acceso a las rutas en mi aplicación. Estoy emocionado/a de aplicar estos conocimientos en futuros proyectos y seguir mejorando mis habilidades en Angular."
            }
          />{" "}
          <Details
            type={"Curso de Autenticación con Angular"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Durante este curso, adquirí habilidades para implementar un sistema de autenticación en mi clon de Trello utilizando Angular. Aprendí las mejores estrategias de autenticación para Single Page Applications (SPA) y trabajé con JSON Web Tokens (JWT) para asegurar la comunicación segura entre el cliente y el servidor.\n" +
              "\n" +
              "Descubrí cómo guardar de forma segura los tokens de autenticación y gestionar su almacenamiento en la aplicación. Esto me permitió garantizar la integridad y confidencialidad de los datos de los usuarios.\n" +
              "\n" +
              "Aprendí a validar las credenciales de usuario en el proceso de inicio de sesión, asegurando que solo usuarios autorizados puedan acceder a la aplicación.\n" +
              "\n" +
              "Además, implementé la funcionalidad de recuperación de contraseña, brindando a los usuarios una opción para restablecer sus contraseñas en caso de olvido o pérdida.\n" +
              "\n" +
              "Finalmente, implementé el cierre de sesión, permitiendo a los usuarios cerrar su sesión de manera segura y proteger la privacidad de su información."
            }
          />
          <Details
            type={"Curso de Backend con Node.js: API REST con Express.js "}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Durante este curso, adquirí habilidades en el desarrollo backend utilizando Node.js. Trabajé con rutas, servidores y middlewares de Express.js, uno de los frameworks más populares para la creación de aplicaciones web en Node.js.\n" +
              "\n" +
              "Aprendí a construir una API REST utilizando Express.js, creando los endpoints necesarios para gestionar la comunicación entre el cliente y el servidor. Esto me permitió diseñar y desarrollar servicios robustos y escalables para mis aplicaciones.\n" +
              "\n" +
              "Además, adquirí conocimientos en la manipulación de errores y la validación de datos en una API REST. Aprendí a implementar mecanismos para manejar errores de manera adecuada y a validar los datos recibidos para asegurar la integridad y consistencia de la información."
            }
          />
          <Details
            type={
              "Curso de Backend con Node.js: Autenticación con Passport.js y JWT "
            }
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Durante este curso, adquirí habilidades en estrategias de autenticación y autorización en el desarrollo backend utilizando Node.js. Trabajé con herramientas como Passport.js y JSON Web Tokens (JWT) para garantizar la seguridad y protección de mis aplicaciones.\n" +
              "\n" +
              "Aprendí a integrar Passport.js en el proceso de inicio de sesión de mi API REST, lo que me permitió autenticar usuarios de manera segura y establecer sesiones entre el backend y el frontend.\n" +
              "\n" +
              "Implementé técnicas de hashing para proteger las contraseñas de los usuarios, asegurando que se almacenen de forma segura y confidencial.\n" +
              "\n" +
              "Además, aprendí a utilizar JSON Web Tokens para establecer y gestionar sesiones entre el backend y el frontend. Implementé la generación y verificación de tokens para autenticar y autorizar a los usuarios en mis aplicaciones.\n" +
              "\n" +
              "El curso también abordó la implementación de funcionalidades como el envío de emails con tokens para recuperar contraseñas, brindando a los usuarios la opción de restablecer sus contraseñas de manera segura y eficiente.\n" +
              "\n" +
              "También aprendí a implementar la protección de rutas y el control de roles en mi API, lo que me permitió restringir el acceso a ciertas rutas y funcionalidades según los roles de los usuarios."
            }
          />{" "}
          <Details
            type={"Curso de Backend con Node.js: Base de Datos con PostgreSQL"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Durante este curso, adquirí habilidades en la persistencia de datos utilizando PostgreSQL en el desarrollo backend con Node.js. Aprendí a conectar mi API REST con bases de datos relacionales y dominé el uso de Sequelize, el ORM más popular en JavaScript.\n" +
              "\n" +
              "Trabajé en consultas, relaciones y migraciones en mi aplicación, lo que me permitió manejar de manera eficiente la interacción entre mi API y la base de datos PostgreSQL.\n" +
              "\n" +
              "Resolví problemas avanzados relacionados con migraciones entre Sequelize y Node.js, lo que me brindó un entendimiento sólido de cómo gestionar cambios en la estructura de la base de datos en entornos de producción. Durante el curso, trabajé con interfaces gráficas, la terminal y código JavaScript para interactuar con Postgres. Esto me permitió desarrollar una comprensión completa de cómo utilizar diferentes herramientas y enfoques para trabajar con bases de datos PostgreSQL.\n" +
              "\n" +
              "Además, configuré mi entorno de desarrollo utilizando Docker, lo que facilitó la gestión y configuración de los componentes necesarios para el desarrollo backend con Node.js y PostgreSQL."
            }
          />{" "}
          <Details
            type={"Curso de Complejidad Algorítmica con JavaScript"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Durante este curso, adquirí conocimientos fundamentales sobre la complejidad algorítmica y su importancia en el diseño de algoritmos eficientes. Aprendí a distinguir entre el costo temporal y espacial de cada algoritmo, lo que me proporcionó una ventaja en el uso de recursos de cómputo y en la eficiencia en la velocidad de mis programas.\n" +
              "\n" +
              "El curso me brindó una comprensión sólida del concepto de complejidad algorítmica y cómo se relaciona con el rendimiento de un algoritmo. Aprendí a estructurar algoritmos de manera óptima, teniendo en cuenta la complejidad temporal y espacial.\n" +
              "\n" +
              "Realicé análisis utilizando la notación Big O, que es una herramienta fundamental en la medición y comparación de la complejidad algorítmica. Aprendí a evaluar y estimar la eficiencia de mis algoritmos en términos de tiempo y espacio requeridos para ejecutarse.\n" +
              "\n" +
              "Además, diferencié claramente entre la complejidad temporal y espacial. Comprendí que la complejidad temporal se refiere al tiempo de ejecución del algoritmo, mientras que la complejidad espacial se refiere al uso de memoria o espacio requerido por el algoritmo."
            }
          />
          <Details
            type={"Curso de Consumo de APIs REST con Angular"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Durante este curso, adquirí conocimientos fundamentales sobre el consumo de APIs REST utilizando Angular. Aprendí sobre las principales solicitudes HTTP básicas en Angular y descubrí las mejores prácticas para el manejo de ambientes y errores.\n" +
              "\n" +
              "El curso me brindó las herramientas necesarias para implementar la autenticación de usuarios en mi tienda en línea, lo que me permitió mejorar la seguridad y la experiencia del usuario.\n" +
              "\n" +
              "Aprendí a resolver el problema de CORS (Cross-Origin Resource Sharing) al realizar solicitudes a APIs de dominios diferentes al de mi aplicación, lo que me permitió trabajar de manera efectiva con diferentes servicios y recursos externos.\n" +
              "\n" +
              "Además, adquirí conocimientos sobre el uso de interceptores, que me permiten manipular y transformar las solicitudes y respuestas HTTP de manera centralizada, lo que facilita el manejo de cabeceras, autenticación y otras funcionalidades.\n" +
              "\n" +
              "También exploré cómo manejar archivos utilizando la clase Http en Angular, lo que me permitió implementar funcionalidades como la carga y descarga de archivos en mi aplicación."
            }
          />{" "}
          <Details
            type={"Curso de Diseño Web con CSS Grid y Flexbox"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Durante este curso, adquirí habilidades avanzadas en el diseño web utilizando CSS Grid y Flexbox. Dominé estas poderosas herramientas para construir diseños web de nivel superior y crear sistemas de diseño estables y escalables.\n" +
              "\n" +
              "El curso me permitió familiarizarme con los términos, herramientas, flujos de trabajo y tendencias más importantes en el desarrollo frontend profesional. Aprendí los conceptos fundamentales del diseño para páginas web, lo que me ayudó a crear interfaces atractivas y funcionales.\n" +
              "\n" +
              "Exploré patrones web y buenas prácticas que son ampliamente utilizadas en la industria, lo que me permitió implementar soluciones efectivas en mis proyectos. Estudié los casos de uso, diferencias y similitudes entre Flexbox y CSS Grid, lo que me brindó flexibilidad y opciones para adaptar los diseños a diferentes situaciones.\n" +
              "\n" +
              "Además, comprendí la importancia de construir sistemas de diseño sólidos. Aprendí a crear estilos reutilizables, componentes y diseños consistentes que mejoran la eficiencia y la coherencia en el desarrollo de proyectos web."
            }
          />{" "}
          <Details
            type={"Curso de Fundamentos de Angular"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Durante este curso, adquirí los fundamentos necesarios para comenzar a trabajar con Angular, el framework de desarrollo en JavaScript respaldado por Google. Aprendí a instalar Angular CLI y a utilizar sus comandos principales para crear y gestionar proyectos.\n" +
              "\n" +
              "Exploré cómo escuchar y responder a eventos generados por el usuario mediante el uso de Event Binding. Esta funcionalidad me permitió crear interacciones dinámicas y en tiempo real en mis aplicaciones.\n" +
              "\n" +
              "Comprendí la estructura de un proyecto en Angular, lo que me ayudó a organizar y mantener mi código de manera eficiente. Aprendí sobre las diferentes carpetas y archivos que conforman un proyecto en Angular y cómo interactúan entre sí.\n" +
              "\n" +
              "Estudié las estructuras de control con NgModel, que me permitieron manejar y gestionar la comunicación de datos en mis aplicaciones. Aprendí a vincular datos de entrada y salida utilizando directivas como ngFor y ngIf, lo que mejoró la experiencia del usuario y la funcionalidad de mis proyectos.\n" +
              "\n" +
              "Además, adquirí conocimientos sobre la aplicación de estilos en Angular. Aprendí a agregar estilos personalizados a la lista de productos y a crear formularios atractivos y funcionales."
            }
          />{" "}
          <Details
            type={"Curso de Fundamentos de TypeScript"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Durante este curso, adquirí los fundamentos necesarios para trabajar con TypeScript, el superset de Microsoft diseñado para agregar tipado fuerte a mi código JavaScript. Aprendí cómo TypeScript puede mejorar la programación de aplicaciones web al proporcionar un sistema de tipos estático y ayudar a prevenir errores comunes.\n" +
              "\n" +
              "Exploré los diferentes tipos de datos disponibles en TypeScript, incluyendo números, strings, objetos, arrays y funciones. Aprendí cómo declarar e inicializar variables con tipos específicos, lo que me permitió tener un mayor control sobre los datos utilizados en mis aplicaciones.\n" +
              "\n" +
              "Comprendí la importancia del tipado estático fuerte en TypeScript. Aprendí a definir interfaces y tipos personalizados, lo que me permitió establecer contratos claros y precisos entre diferentes partes de mi código.\n" +
              "\n" +
              "Además, adquirí conocimientos sobre la integración de librerías en proyectos TypeScript. Aprendí cómo utilizar librerías con y sin soporte de TypeScript, y cómo aprovechar las ventajas del sistema de tipos de TypeScript para mejorar la interoperabilidad y la seguridad en el uso de estas librerías.\n" +
              "\n" +
              "Este curso me brindó una sólida comprensión de los fundamentos de TypeScript y me equipó con las habilidades necesarias para desarrollar aplicaciones web más robustas y mantenibles. Como resultado, ahora tengo la capacidad de considerarme un TypeScript Developer, capaz de aprovechar al máximo las características y ventajas que TypeScript ofrece."
            }
          />
          <Details
            type={"Curso de Introducción a los Algoritmos de Ordenamiento"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Durante este curso, adquirí los conocimientos fundamentales sobre los algoritmos de ordenamiento, que son esenciales para desarrollar software eficiente y resolver problemas de manera efectiva. Aprendí a implementar dos algoritmos de ordenamiento ampliamente utilizados: Bubble Sort y Selection Sort.\n" +
              "\n" +
              "Exploré los conceptos básicos de los algoritmos de ordenamiento y su importancia en el desarrollo de software. Aprendí cómo analizar y comparar la eficiencia de diferentes algoritmos en términos de tiempo de ejecución y uso de recursos.\n" +
              "\n" +
              "Durante el curso, adquirí las habilidades necesarias para implementar el algoritmo Bubble Sort, que consiste en comparar pares de elementos adyacentes y reordenarlos en el orden correcto. También aprendí a implementar el algoritmo Selection Sort, que selecciona repetidamente el elemento mínimo de una lista y lo coloca en la posición correcta.\n" +
              "\n" +
              "A través de ejercicios prácticos y estudios de caso, pude aplicar estos algoritmos de ordenamiento a conjuntos de datos reales y analizar su rendimiento. Además, aprendí técnicas para optimizar y mejorar la eficiencia de los algoritmos de ordenamiento.\n" +
              "\n" +
              "Este curso me proporcionó una sólida comprensión de los fundamentos de los algoritmos de ordenamiento y me brindó las habilidades necesarias para diseñar y implementar algoritmos eficientes en mis proyectos de desarrollo de software."
            }
          />
          <Details
            type={"Curso de Introducción a React Native"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Durante este curso, adquirí los conocimientos necesarios para desarrollar aplicaciones móviles nativas en iOS y Android utilizando React Native. Utilizando JavaScript y React.js, aprendí a construir aplicaciones móviles altamente funcionales y de alto rendimiento.\n" +
              "\n" +
              "Exploré cómo reutilizar el código existente y aprovechar los componentes nativos para crear aplicaciones multiplataforma de manera eficiente. Aprendí a construir flujos de navegación fluidos utilizando la biblioteca React Navigation, lo que me permitió crear una experiencia de usuario intuitiva y coherente en mis aplicaciones.\n" +
              "\n" +
              "Durante el curso, pude crear componentes personalizados utilizando interfaces nativas multiplataforma, lo que me permitió aprovechar al máximo las capacidades y características específicas de iOS y Android. Aprendí a conectar emuladores y dispositivos móviles reales utilizando Expo, lo que me facilitó la prueba y depuración de mis aplicaciones en tiempo real.\n" +
              "\n" +
              "Además, aprendí a configurar y optimizar mi entorno de trabajo para el desarrollo de aplicaciones con React Native. Adquirí conocimientos sobre las mejores prácticas y herramientas recomendadas para desarrollar aplicaciones móviles de manera eficiente y efectiva.\n" +
              "\n" +
              "Este curso me brindó una sólida base en el desarrollo de aplicaciones móviles nativas con React Native y me preparó para construir aplicaciones de alta calidad y rendimiento en las plataformas iOS y Android."
            }
          />{" "}
          <Details
            type={"Curso de Maquetación con Angular CDK y Tailwind CSS"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Durante este curso, tuve la oportunidad de maquetar un clon de Trello utilizando Angular, la biblioteca Angular CDK y el framework de estilos Tailwind CSS. Aprendí a crear interfaces de usuario interactivas y altamente personalizables, mejorando así la experiencia del usuario en mis proyectos.\n" +
              "\n" +
              "En primer lugar, aprendí a instalar y configurar los estilos necesarios para utilizar Tailwind CSS en mi proyecto de maquetación en Angular. Esta combinación me permitió aprovechar al máximo la potencia y flexibilidad de Tailwind CSS para diseñar interfaces modernas y atractivas.\n" +
              "\n" +
              "Durante el curso, me sumergí en la creación de elementos clave como listas y tablas, utilizando las capacidades proporcionadas por Angular CDK. Aprendí a implementar funcionalidades como arrastrar y soltar (drag and drop), así como a trabajar con el desplazamiento virtual (virtual scrolling) y filtros para mejorar la eficiencia y usabilidad de mis aplicaciones.\n" +
              "\n" +
              "Además de la implementación técnica, se hizo hincapié en el análisis de la experiencia del usuario (UX) y la reutilización de componentes. Aprendí a evaluar y mejorar la usabilidad de mi proyecto, teniendo en cuenta los principios de diseño y las mejores prácticas. También descubrí cómo maximizar la reutilización de componentes para optimizar el tiempo y el esfuerzo de desarrollo.\n" +
              "\n" +
              "En resumen, este curso me brindó las habilidades y conocimientos necesarios para maquetar aplicaciones en Angular utilizando la potencia de Angular CDK y las capacidades de personalización de Tailwind CSS. Ahora soy capaz de crear interfaces modernas, interactivas y eficientes, brindando a los usuarios una experiencia excepcional."
            }
          />
          <Details
            type={
              "Curso de Pensamiento Lógico: Algoritmos y Diagramas de Flujo"
            }
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Durante este curso, adquirí los conocimientos fundamentales de la programación y desarrollé habilidades en el pensamiento lógico. Bajo la tutela de la profesora Ana Belisa Martínez, aprendí conceptos esenciales como el sistema binario, las tablas de verdad y los operadores lógicos, que son fundamentales para resolver problemas de programación.\n" +
              "\n" +
              "Una de las principales habilidades que desarrollé fue la capacidad de crear algoritmos utilizando diagramas de flujo. Aprendí a representar visualmente los pasos necesarios para resolver problemas de código, lo que me permitió comprender mejor la lógica detrás de los algoritmos y facilitar su implementación.\n" +
              "\n" +
              "Además, comprendí la importancia de las tablas de verdad en la programación. Aprendí a utilizarlas para evaluar diferentes combinaciones de valores booleanos y tomar decisiones basadas en los resultados. Esto me permitió tomar decisiones lógicas y diseñar algoritmos eficientes y precisos.\n" +
              "\n" +
              "También exploré los diferentes tipos de operadores lógicos, como AND, OR y NOT. Aprendí cómo y cuándo utilizar cada uno de ellos en la construcción de algoritmos, y descubrí cómo estos operadores resuelven problemas específicos en la programación.\n" +
              "\n" +
              "Finalmente, desarrollé la habilidad de convertir números de binario a decimal. Aprendí los pasos y técnicas necesarios para realizar esta transformación, lo que me permitió comprender mejor el sistema binario y su aplicación en la programación.\n" +
              "\n" +
              "En resumen, este curso me proporcionó las bases del pensamiento lógico y me equipó con las habilidades necesarias para diseñar algoritmos utilizando diagramas de flujo. Aprendí a trabajar con el sistema binario, las tablas de verdad y los operadores lógicos, lo que me permitió resolver problemas de programación de manera efectiva y eficiente."
            }
          />{" "}
          <Details
            type={"Curso de React.js"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Una de las principales habilidades que desarrollé fue la capacidad de crear componentes reutilizables. Aprendí a descomponer mi aplicación en componentes más pequeños y modularizados, lo que facilitó la construcción y el mantenimiento de mi proyecto. Además, aprendí a pasar datos a través de props, lo que me permitió crear aplicaciones dinámicas y personalizables.\n" +
              "\n" +
              "También aprendí a aplicar estilos CSS a mis componentes de React, utilizando diferentes enfoques como CSS modules o bibliotecas populares como Styled Components o Tailwind CSS. Esto me permitió crear interfaces atractivas y personalizadas para mis aplicaciones.\n" +
              "\n" +
              "Además, adquirí conocimientos sobre la gestión de estados en React utilizando los React Hooks. Aprendí a crear y manipular estados locales en mis componentes, lo que mejoró la interactividad y la capacidad de respuesta de mis aplicaciones. También exploré el uso de estados globales utilizando React Context, lo que me permitió compartir datos entre diferentes componentes de manera eficiente.\n" +
              "\n" +
              "Durante el curso, también aprendí sobre características avanzadas de React, como la implementación de React Portals para renderizar componentes fuera de su árbol de elementos padre y el almacenamiento de datos utilizando Local Storage para persistir la información en el navegador."
            }
          />
          <Details
            type={"Curso de Responsive Design: Maquetación Mobile First"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Durante este curso, adquirí habilidades fundamentales para crear proyectos web que se adapten de manera óptima a diferentes dispositivos, como smartphones, tablets y laptops. Con el aumento del tráfico en internet proveniente de dispositivos móviles, el enfoque Mobile First se ha vuelto una prioridad en el desarrollo frontend.\n" +
              "\n" +
              "Una de las principales habilidades que desarrollé fue la capacidad de crear y aplicar estilos con CSS que sean reutilizables. Aprendí a utilizar buenas prácticas en la organización y estructuración de mis estilos CSS, lo que me permitió mantener un código limpio y fácilmente mantenible. Además, adquirí conocimientos sobre técnicas avanzadas de CSS, como flexbox y grid, que facilitan la creación de diseños responsivos y adaptables.\n" +
              "\n" +
              "En el curso, también aprendí a realizar una auditoría con Lighthouse, una herramienta que me permitió evaluar la calidad y el rendimiento de mis proyectos web. Aprendí a utilizar Lighthouse para identificar áreas de mejora y optimizar la experiencia del usuario en diferentes dispositivos.\n" +
              "\n" +
              "Una parte fundamental del curso fue el aprendizaje de media queries, que son una técnica utilizada para adaptar las vistas de un sitio web a diferentes dispositivos. Aprendí a utilizar media queries para aplicar estilos específicos según el tamaño de la pantalla y las necesidades de los usuarios. Esto me permitió crear diseños responsivos que se adaptan de manera fluida a diferentes dispositivos.\n" +
              "\n" +
              "Además, analicé la arquitectura de mi proyecto a partir de un wireframe, lo que me ayudó a comprender la estructura y la organización de mi aplicación desde una etapa temprana. Aprendí a traducir un wireframe en una estructura de carpetas y componentes, lo que facilitó el desarrollo y la maquetación de mi proyecto."
            }
          />{" "}
          <Details
            type={"Curso de Transformaciones y Transiciones en CSS"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "En este curso, adquirí habilidades fundamentales para crear transformaciones y transiciones web utilizando CSS. Aprendí las mejores propiedades y técnicas para crear animaciones atractivas y fluidas en mis proyectos web.\n" +
              "\n" +
              "Una de las principales habilidades que desarrollé fue la capacidad de utilizar las propiedades animables de CSS. Aprendí a aplicar transformaciones a elementos HTML tanto en el plano 2D como en el 3D. Utilizando propiedades como transform, translate, rotate, scale y más, pude crear efectos visuales impresionantes y dar vida a mis diseños.\n" +
              "\n" +
              "Además, aprendí sobre las transiciones en CSS y cómo utilizar las funciones de temporización (timing functions) para controlar la velocidad y el ritmo de las animaciones. Aprendí a utilizar propiedades como transition, transition-property, transition-duration, transition-timing-function y transition-delay para crear transiciones suaves y controladas entre diferentes estados de los elementos.\n" +
              "\n" +
              "Durante el curso, también se hicieron énfasis en las buenas prácticas de UX (experiencia de usuario) y accesibilidad al implementar transiciones. Aprendí a considerar aspectos como la legibilidad del texto, la navegación clara y la respuesta rápida a las interacciones del usuario para garantizar una experiencia fluida y agradable."
            }
          />
          <Details
            type={"Curso de Vue.js: Introducción y Fundamentos"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "En este curso, adquirí los conocimientos fundamentales de Vue.js, un framework progresivo para la construcción de aplicaciones frontend. Bajo la guía de la profesora Diana Martínez, aprendí cómo utilizar Vue.js y sus conceptos clave.\n" +
              "\n" +
              "Uno de los aspectos fundamentales que exploré fue el uso de componentes en Vue.js. Aprendí cómo dividir la interfaz de usuario en componentes reutilizables y cómo aprovechar al máximo la modularidad que ofrece Vue.js. Comprendí cómo pasar propiedades (props) entre componentes, lo cual facilita la comunicación y el intercambio de datos.\n" +
              "\n" +
              "Además, me familiaricé con el concepto de reactividad en Vue.js. Aprendí cómo Vue.js detecta automáticamente los cambios en los datos y actualiza la interfaz de usuario en consecuencia. Esta característica es especialmente útil para mantener sincronizados los datos y la vista, lo que simplifica el desarrollo y mejora la eficiencia.\n" +
              "\n" +
              "Otro aspecto destacado del curso fue el enfoque en el renderizado declarativo de Vue.js. Aprendí a utilizar las directivas de Vue.js, como v-if, v-for y v-bind, para renderizar la interfaz de usuario de forma declarativa. Esta forma de trabajar facilita la comprensión del código y mejora la legibilidad.\n" +
              "\n" +
              "Por último, exploré cómo Vue.js maneja los eventos. Aprendí a utilizar la directiva v-on para escuchar y responder a eventos en los componentes. También descubrí cómo emitir eventos personalizados desde los componentes hijos hacia los componentes padres, lo que permite una comunicación bidireccional entre ellos."
            }
          />
          <Details
            type={"Curso Práctico de Angular: Construye un Clon de Trello"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "En este curso práctico de Angular, tuve la oportunidad de construir un clon funcional de Trello, replicando todas sus características y funcionalidades.\n" +
              "Durante el curso, aprendí a utilizar Angular SDK para integrar la funcionalidad necesaria en mi clon de Trello. Esto incluyó la implementación de características como la creación de tableros, listas y tarjetas, así como la manipulación de los datos en tiempo real utilizando las capacidades de sincronización del SDK.\n" +
              "\n" +
              "Además, me enseñaron a optimizar el envío de datos a la API. Aprendí técnicas para reducir la cantidad de consultas HTTP necesarias y mejorar el rendimiento de mi aplicación. Esto incluyó la implementación de algoritmos eficientes para ordenar tareas y minimizar las operaciones de escritura en la API.\n" +
              "\n" +
              "Un aspecto destacado del curso fue la integración de una copia de la API de Trello en mi clon. Aprendí cómo utilizar los endpoints de la API de Trello para obtener los datos necesarios y simular la funcionalidad de la plataforma original. Esto me permitió comprender cómo interactuar con una API externa y utilizarla como fuente de datos para mi aplicación.\n" +
              "\n" +
              "En resumen, el curso práctico de Angular para construir un clon de Trello fue una experiencia enriquecedora. Me permitió aplicar mis conocimientos de Angular en un proyecto realista y desafiante. Aprendí a transformar las interacciones de los usuarios en consultas a la API, optimizar el rendimiento de mi aplicación y trabajar con una API externa. Al finalizar el curso, logré construir un clon funcional de Trello utilizando Angular."
            }
          />
          <Details
            type={"Curso Práctico de Maquetación en CSS"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "En este curso práctico de maquetación en CSS, tuve la oportunidad de poner en práctica todos mis conocimientos teóricos para crear un blog personal. A través de este proyecto, pude reforzar mis habilidades en la maquetación de HTML5 semántico y crear un espacio para promocionar mi trabajo profesional.\n" +
              "\n" +
              "Durante el curso, me enfrenté al reto de maquetar el header, el main y el footer de mi blog. Aprendí a utilizar las mejores prácticas de maquetación y aplicar estilos CSS para lograr un diseño atractivo y coherente en todas las secciones del blog.\n" +
              "\n" +
              "Además, me enseñaron a crear estilos personalizados para mi proyecto. Aprendí a utilizar selectores CSS para aplicar estilos específicos a elementos individuales, clases o ID, y lograr la apariencia deseada para mi blog.\n" +
              "\n" +
              "Otro aspecto importante del curso fue la creación de etiquetas para mi proyecto. Aprendí a utilizar etiquetas semánticas de HTML5 para estructurar adecuadamente el contenido de mi blog y mejorar su accesibilidad y SEO.\n" +
              "\n" +
              "Finalmente, tuve la oportunidad de maquetar un blog estático. Aprendí a crear diferentes secciones como las entradas del blog, la barra lateral y los elementos de navegación. Utilicé técnicas de diseño responsivo para asegurarme de que mi blog se vea bien en diferentes dispositivos y tamaños de pantalla.\n" +
              "\n" +
              "En resumen, el curso práctico de maquetación en CSS fue una experiencia valiosa para aplicar mis conocimientos teóricos en un proyecto real. Aprendí a maquetar el header, el main y el footer de mi blog, crear estilos personalizados, utilizar etiquetas semánticas y maquetar un blog estático. Al finalizar el curso, logré crear un blog atractivo y funcional utilizando CSS y HTML5."
            }
          />
          <Details
            type={
              "Curso Práctico de React Native: Formularios, Almacenamiento y Deploy"
            }
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "En este curso práctico de React Native, tuve la oportunidad de aprender a trabajar con formularios, almacenamiento local y deploy en aplicaciones móviles. A lo largo del curso, adquirí conocimientos y habilidades clave para implementar estas funcionalidades en mis proyectos de React Native.\n" +
              "\n" +
              "Una de las principales lecciones fue aprender a integrar Formik y Yup en mi aplicación para manejar formularios de autenticación. Estas bibliotecas facilitaron el proceso de validación de datos y la gestión de los estados de mis formularios, permitiéndome crear experiencias de usuario fluidas y sin errores.\n" +
              "\n" +
              "Además, aprendí a utilizar AsyncStorage para almacenar información localmente en la aplicación. Esto resultó especialmente útil al implementar una funcionalidad que me permitía guardar mis Pokémon favoritos. Con AsyncStorage, pude guardar y recuperar datos de forma sencilla y eficiente, mejorando la experiencia del usuario al recordar sus preferencias.\n" +
              "\n" +
              "Por último, el curso me enseñó a generar el build de mi aplicación para Android e iOS utilizando Expo. Aprendí los pasos necesarios para empaquetar y preparar mi aplicación para su distribución en las respectivas tiendas de aplicaciones. Esto me permitió compartir mi trabajo con otros usuarios y llevar mis proyectos de React Native al siguiente nivel.\n" +
              "\n" +
              "En resumen, el curso práctico de React Native sobre formularios, almacenamiento y deploy fue una experiencia enriquecedora. Aprendí a integrar Formik y Yup para manejar formularios, utilizar AsyncStorage para almacenamiento local y generar el build de mi aplicación para Android e iOS. Estas habilidades son fundamentales para desarrollar aplicaciones móviles robustas y funcionales con React Native."
            }
          />
          <Details
            type={
              "Curso Práctico de React Native: Manejo de Listas y Consumo de APIs"
            }
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "En este curso práctico de React Native, tuve la oportunidad de aprender a manejar listas y consumir APIs en mis aplicaciones móviles. Durante el curso, adquirí conocimientos y habilidades clave para desarrollar componentes, pantallas y la navegación de mi aplicación, así como para consumir datos de una API externa.\n" +
              "\n" +
              "Una de las principales lecciones fue aprender a navegar entre pantallas y consumir APIs REST. Utilicé herramientas como React Navigation para gestionar la navegación entre diferentes pantallas de mi aplicación y aprendí a realizar solicitudes HTTP para consumir datos de la API PokeAPI. Esto me permitió mostrar información actualizada y relevante en mi aplicación.\n" +
              "\n" +
              "Además, aprendí a cargar la información principal de mi aplicación de manera eficiente utilizando técnicas como Infinite Scrolling. Implementé una funcionalidad que permitía cargar más elementos de la lista a medida que el usuario se desplazaba hacia abajo, evitando así cargar todos los datos de una sola vez y mejorando el rendimiento de la aplicación.\n" +
              "\n" +
              "Para renderizar las listas, utilicé el componente FlatList de React Native. Aprendí a configurar y personalizar este componente para mostrar los elementos de la lista de manera eficiente y optimizada. Esto me permitió crear interfaces de usuario fluidas y receptivas, incluso cuando trabajaba con grandes conjuntos de datos.\n" +
              "\n" +
              "Finalmente, el curso me enseñó a aplicar estilos a mis componentes utilizando StyleSheet en React Native. Aprendí a definir estilos para diferentes elementos de la interfaz de usuario, como texto, contenedores y botones. Esto me permitió crear una experiencia visualmente atractiva y coherente en mi aplicación."
            }
          />
          <Details
            type={"Curso Profesional de CSS Grid Layout"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "En este curso profesional de CSS Grid Layout, tuve la oportunidad de aprender a utilizar CSS Grid para maquetar sitios web complejos de manera eficiente y sin complicaciones. Durante el curso, adquirí conocimientos y habilidades clave para analizar diseños, dividir una aplicación en cuadrículas y convertirlas en estilos CSS utilizando CSS Grid.\n" +
              "\n" +
              "El curso comenzó con una introducción a la historia y evolución de CSS, lo que me permitió comprender el contexto y la importancia de CSS Grid en el desarrollo web moderno. Luego, me sumergí en la sintaxis de CSS Grid y aprendí a utilizar las propiedades y valores adecuados para crear diseños de cuadrícula eficientes y flexibles.\n" +
              "\n" +
              "Una de las ventajas de CSS Grid es su capacidad para trabajar en conjunto con Flexbox y el modelo de caja. Aprendí a combinar CSS Grid y Flexbox para lograr alineamientos precisos de elementos en mi diseño. Esta combinación me permitió tener un control total sobre la posición y el orden de los elementos en la página.\n" +
              "\n" +
              "También exploré técnicas avanzadas de alineamiento y distribución utilizando las propiedades físicas y lógicas en CSS Grid. Estas propiedades me permitieron definir cómo se distribuyen los elementos en la cuadrícula en función de su posición física o lógica. Esto resultó especialmente útil al diseñar diseños responsivos y adaptativos.\n" +
              "\n" +
              "Durante el curso, puse en práctica todo lo que aprendí a través de ejercicios y proyectos prácticos. Esto me permitió aplicar los conceptos y técnicas de CSS Grid en situaciones del mundo real y reforzar mi comprensión de los mismos."
            }
          />{" "}
          <Details
            type={"Prueba Técnica: Desarrollo Frontend con Angular"}
            time={"2022-2022"}
            place={"Platzi - En línea "}
            info={
              "Desarrollé una prueba técnica común en el desarrollo Front End, como lo es la creación de un To Do App. Para ello, utilicé Angular y TypeScript para crear una aplicación web que me permitiera gestionar una lista de tareas pendientes."
            }
          />
        </ul>
      </div>
    </div>
  );
}
