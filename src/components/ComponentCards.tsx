import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

const data = [
  {
    title: "navbar",
    image: "/images/ui/navbar.png",
    link: "/ui/navbar",
  },
  {
    title: "Hero",
    image: "/images/hero.webp",
    link: "/ui/hero",
  },
  {
    title: "Features",
    image: "/images/ui/loader.png",
    link: "/ui/feature-service",
  },
  {
    title: "logo cloud",
    component: <div />,
    link: "/ui/logocloud",
  },
  {
    title: "CTA",
    component: <div />,
    link: "/ui/cta",
  },
  {
    title: "portfolio",
    component: <div />,
    link: "/ui/portfolio ",
  },
  {
    title: "side bar",
    image: "/images/ui/input.png",
    link: "/ui/sidebar",
  },
  {
    title: "Testimonial",
    image: "/images/ui/tabs.png",
    link: "/ui/testimonial-success",
  },
  {
    title: "matrics",
    component: <div />,
    link: "/ui/matrics",
  },
  {
    title: "footer",
    image: "/images/hero.webp",
    link: "/ui/footer",
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
