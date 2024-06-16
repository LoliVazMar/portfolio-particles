"use client";

import { dataCounter } from "@/data";
import CountUp from "react-countup";

const CounterServices = () => {
  return (
    <div className="grid justify-between max-w-5xl grid-cols-2 gap-3 mx-auto my-8 md:grid-cols-4 md:gap-6">
      {dataCounter.map(
        ({ id, endCounter, text, lineRight, lineRightMobile }) => (
          <div key={id} className={"ltr flex justify-center md:block"}>
            <div className={"px-4 border-none"}>
              <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                + <CountUp end={endCounter} start={0} duration={5} />
              </p>
              <p>{text}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CounterServices;
