import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container";
import ProyectsBox from "@/components/proyects-box";
import TransitionPage from "@/components/transition-page";
import { dataProyects } from "@/data";

const ProyectsPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />
      <CircleImage />
      <div className="flex flex-col justify-center h-full pb-32">
        <h2 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
          Algunos de{" "}
          <span className="text-secondary font-bold">mis trabajos</span>
        </h2>
        <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 sm:grid-cols-2 md:grid-cols-3">
          {dataProyects.map((data) => (
            <ProyectsBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </ContainerPage>
  );
};

export default ProyectsPage;
