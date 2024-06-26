"use client";

import { technologies } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center content-center justify-center h-full p-6 py-24 md:py-0 md:grid-cols-2">
        <Image
          src="/home-4.png"
          priority
          width="1000"
          height="1000"
          alt="Profile pic"
          className="max-w-[70%] justify-self-center order-2 hidden md:block md:row-start-2 md:row-end-4 md:order-1"
        />
        <div className="flex flex-col py-5 order-1 justify-center items-center md:items-start md:row-start-2 md:order-2 md:justify-start">
          <h1 className="mb-5 text-2xl text-secondary font-bold leading-tight text-center md:text-left md:text-4xl">
            Loli Vázquez Martínez
          </h1>
          <p className="mx-auto mb-5 text-xl text-center md:text-left md:mx-0 md:mb-8">
            Desarrolladora frontend, creadora de contenido a medida, funcional y
            accesible.
          </p>
          <div className="flex items-center justify-center gap-7 flex-wrap md:justify-start max-w-72">
            {technologies.map(({ title, image, id }) => (
              <Image
                key={id}
                src={image}
                width={30}
                height={30}
                alt={title}
                className=""
              />
            ))}
          </div>
          {/* <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <Link
              href="/about-me"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Experiencia
            </Link>
            <Link
              href="/about-me"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50"
            >
              Proyectos
            </Link>
          </div> */}
        </div>
        <div className="py-5 order-3 md:row-start-3">
          <h1 className="mb-5 text-lg leading-tight text-center md:text-left md:text-2xl">
            ¿Quieres crear
            <TypeAnimation
              sequence={[
                " un proyecto?",
                1000,
                " una idea?",
                1000,
                " un diseño?",
                1000,
                " un sueño?",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>
          <p className="mx-auto mb-5 text-lg text-center md:text-left md:mx-0 md:mb-8">
            Trabajemos juntos
          </p>
          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <Link
              href="https://www.linkedin.com/in/loli-vazquez-martinez/"
              target="_blank"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Linkedin
            </Link>
            <Link
              href="mailto:lolyandrea@gmail.com"
              className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50"
            >
              Contacto
            </Link>
          </div>
        </div>
        {/* <div className="flex flex-col justify-center self-start gap-10 max-w-md mx-auto md:self-center">
          
        </div> */}
      </div>
    </div>
  );
};

export default Introduction;
