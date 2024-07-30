import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

const data = [
  {
    title: "Hero",
    image: "/images/hero.webp",
    link: "/ui/hero",
  },
  {
    title: "Loaders",
    image: "/images/ui/loader.png",
    link: "/ui/loaders",
  },
  {
    title: "Text",
    component: <div />,
    link: "/ui/text",
  },
  {
    title: "Input",
    image: "/images/ui/input.png",
    link: "/ui/input",
  },
  {
    title: "Tab",
    image: "/images/ui/tabs.png",
    link: "/ui/tabs",
  },
  {
    title: "Toggle",
    component: <div />,
    link: "/ui/toggle",
  },
];

const ComponentCards = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
