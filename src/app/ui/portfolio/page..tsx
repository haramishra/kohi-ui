import ComponentsContainer from "@/components/ui/component-container";

export default function Portfolio() {
  const components = [
    {
      path: "https://kohi-unifyui.pages.dev/resources/portfolio/1/",
      name: "Example 1",
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
