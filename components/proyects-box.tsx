import Image from "next/image";
import Link from "next/link";

const ProyectsBox = (props: { data: any }) => {
  const { data } = props;

  return (
    <div
      key={data.id}
      className="proyect_card flex flex-col p-4 border border-teal-50 rounded-xl"
    >
      <Image
        src={data.image}
        alt={data.title}
        width={400}
        height={400}
        className="w-full md:w-[400px] rounded-2xl h-auto md:h-[200px] aspect-[4/3]"
      />
      <h3 className="my-4 text-xl">{data.title}</h3>
      <p>{data.description}</p>
      <div className="proyect_card_technologies flex flex-row h-full my-4 justify-center items-center gap-8">
        {data.technologies.map(
          (item: { id: number; src: string; title: string }) => (
            <Image
              key={item.id}
              src={item.src}
              alt={item.title}
              width={400}
              height={400}
              className="w-8"
            />
          )
        )}
      </div>
      <div className="proyect_card_buttons flex gap-5 mt-5 justify-center">
        <Link
          href={data.url}
          target="_blank"
          className="p-2 self-end h-fit transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
        >
          {data.textButton}
        </Link>
        {data.urlCode && (
          <Link
            href={data.urlCode}
            target="_blank"
            className="p-2 self-end h-fit transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
          >
            {data.textButtonCode}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProyectsBox;
