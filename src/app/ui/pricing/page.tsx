import ComponentsContainer from "@/components/ui/component-container";

export default function Pricing() {
  const components = [
    {
      path: "https://kohi-unifyui.pages.dev/resources/pricing-section/1/",
      name: "Example 1",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/pricing-section/2/",
      name: "Example 2",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/pricing-section/3/",
      name: "Example 3",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/pricing-section/4/",
      name: "Example 4",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/pricing-section/5/",
      name: "Example 5",
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
