import Link from "next/link";
import MotionTransition from "./transition-component";
import { socialNetworks } from "@/data";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 px-20 md:top-10"
    >
      <header>
        <div className="container justify-between max-w-6xl mx-auto md:flex">
          <Link
            rel="canonical"
            href="https://lolivm-portfolio-particles.netlify.app/"
          >
            <h1 className="my-3 text-4xl font-bold text-center md:text-left">
              Loli
              <span className="text-secondary">Dev</span>
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({ logo, src, id, label }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                aria-label={label}
                className="transition-all duration-300 hover:text-secondary"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
