import Image from "next/image";
import Link from "next/link";

interface ProyectsBoxProps {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;
    textButton: string;
  };
}

const ProyectsBox = (props: ProyectsBoxProps) => {
  const { data } = props;
  const { id, title, description, image, url, textButton } = data;
  return (
    <div className="flex flex-col p-4 border border-teal-50 rounded-xl">
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="w-full md:w-[400px] rounded-2xl h-auto"
      />
      <h3 className="my-4 text-xl">{title}</h3>
      <p>{description}</p>
      <div className="flex h-full gap-5 mt-5 justify-center">
        <Link
          href={url}
          target="_blank"
          className="p-2 self-end h-fit transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
        >
          {textButton}
        </Link>
      </div>
    </div>
  );
};

export default ProyectsBox;
