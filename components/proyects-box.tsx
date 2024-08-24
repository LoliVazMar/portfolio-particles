import Image from "next/image";
import Link from "next/link";

interface ProyectsBoxProps {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;
    urlCode?: string;
    textButton: string;
    textButtonCode?: string;
    technologies: [
      {
        id: number;
        title: string;
        src: string;
      }
    ];
  };
}

const ProyectsBox = (props: ProyectsBoxProps) => {
  const { data } = props;
  const {
    id,
    title,
    description,
    image,
    url,
    urlCode,
    textButton,
    textButtonCode,
    technologies,
  } = data;
  return (
    <div
      key={id}
      className="proyect_card flex flex-col p-4 border border-teal-50 rounded-xl"
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="w-full md:w-[400px] rounded-2xl h-auto md:h-[200px]"
      />
      <h3 className="my-4 text-xl">{title}</h3>
      <p>{description}</p>
      <div className="proyect_card_technologies flex flex-row h-full my-4 justify-center items-center gap-8">
        {technologies.map((item) => (
          <Image
            key={item.id}
            src={item.src}
            alt={item.title}
            width={400}
            height={400}
            className="w-8"
          />
        ))}
      </div>
      <div className="proyect_card_buttons flex gap-5 mt-5 justify-center">
        <Link
          href={url}
          target="_blank"
          className="p-2 self-end h-fit transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
        >
          {textButton}
        </Link>
        {urlCode && (
          <Link
            href={urlCode}
            target="_blank"
            className="p-2 self-end h-fit transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
          >
            {textButtonCode}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProyectsBox;
