"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { itemsNavbar } from "@/data";
import MotionTransition from "./transition-component";

const Navbar = () => {
  const router = usePathname();

  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full h-max mt-auto bottom-10"
    >
      <nav>
        <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              title={item.label}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${
                router === item.link && "bg-secondary"
              }`}
            >
              <Link href={item.link} title={item.label} aria-label={item.label}>
                {item.icon}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
