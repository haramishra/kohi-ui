import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
import componentCollections from "@/config/config";

const data: { title: string; image?: string; link: string; component?: any }[] =
  Object.keys(componentCollections).map((key) => ({
    title: key,
    image: "",
    link: `/ui/${key}`,
  }));

const ComponentCards = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.map((item, index) => (
          <Link href={item.link} key={index} className="no-underline">
            <Card title={item.title}>
              {item.image ? (
                <Image
                  width={200}
                  height={200}
                  src={item.image}
                  alt={item.title}
                  className="h-auto w-[150px] duration-300 ease-in-out group-hover:scale-110 md:w-[200px]"
                />
              ) : item.component ? (
                item.component
              ) : null}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ComponentCards;
