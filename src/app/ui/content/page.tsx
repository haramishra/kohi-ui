import ComponentsContainer from "@/components/ui/component-container";

export default function Content() {
  const components = [
    {
      path: "https://kohi-unifyui.pages.dev/resources/content/about/",
      name: "About section",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/content/about-2/",
      name: "About section2",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/content/about-3/",
      name: "About section3",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/content/image-on-right/",
      name: "Image on right",
    },
  ];

  return (
    <div>
      {components.map((component) => (
        <div key={component.path}>
          <ComponentsContainer
            iframeSrc={component.path}
            name={component.name}
          />
        </div>
      ))}
    </div>
  );
}
