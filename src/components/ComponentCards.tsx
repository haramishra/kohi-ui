import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

const data = [
  {
    title: "Button",
    component: <div />,
    link: "/components/button",
  },
  {
    title: "Loaders",
    image: "/images/ui/loader.png",
    link: "/components/loaders",
  },
  {
    title: "Text",
    component: <div />,
    link: "/components/text",
  },
  {
    title: "Input",
    image: "/images/ui/input.png",
    link: "/components/input",
  },
  {
    title: "Tab",
    image: "/images/ui/tabs.png",
    link: "/components/tabs",
  },
  {
    title: "Toggle",
    component: <div />,
    link: "/components/toggle",
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
