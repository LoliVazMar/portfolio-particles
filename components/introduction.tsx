"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center justify-center h-full p-6 py-24 md:py-0 md:grid-cols-2">
        <Image
          src="/home-4.png"
          priority
          width="600"
          height="600"
          alt="Profile pic"
          className="max-w-[70%] justify-self-center"
        />
        <div className="flex flex-col justify-center self-start gap-10 max-w-md mx-auto md:self-center">
          <div className="py-5">
            <h1 className="mb-5 text-2xl text-secondary font-bold leading-tight text-center md:text-left md:text-4xl">
              Loli Vázquez Martínez
            </h1>
            <p className="mx-auto mb-5 text-xl md:mx-0 md:mb-8">
              Desarrolladora frontend, creadora de contenido a medida, funcinal
              y accesible.
            </p>
            <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
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
            </div>
          </div>
          <div className="hidden py-5 md:block">
            <h1 className="mb-5 text-lg leading-tight text-center md:text-left md:text-2xl">
              ¿Tienes
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
            <p className="mx-auto mb-5 text-lg md:mx-0 md:mb-8">
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
        </div>
      </div>
    </div>
  );
};

export default Introduction;
