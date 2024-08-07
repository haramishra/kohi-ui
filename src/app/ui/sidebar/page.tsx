import ComponentsContainer from "@/components/ui/component-container";

export default function Sidebar() {
  const components = [
    {
      path: "https://kohi-unifyui.pages.dev/resources/application-ui/sidebar/1/",
      name: "Example 1",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/application-ui/sidebar/2/",
      name: "Example 2",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/application-ui/sidebar/3/",
      name: "Example 3",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/application-ui/sidebar/4/",
      name: "Example 4",
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
