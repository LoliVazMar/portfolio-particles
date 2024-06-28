import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const PageAboutMe = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <Avatar />
        <h2 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mt-10">
          Esta es mi {""}
          <span className="font-bold text-secondary">
            trayectoria profesional
          </span>
        </h2>
        <CounterServices />
        <TimeLine />
      </ContainerPage>
    </>
  );
};

export default PageAboutMe;
