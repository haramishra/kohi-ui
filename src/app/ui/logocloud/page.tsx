import UICntainer from "@/components/ui-container";
import ComponentsContainer from "@/components/ui/component-container";

export default function Logocloud() {
  const components = [
    {
      path: "https://kohi-unifyui.pages.dev/resources/logo-cloud/1/",
      name: "Example 1",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/logo-cloud/2/",
      name: "Example 2",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/logo-cloud/3/",
      name: "Example 3",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/logo-cloud/4/",
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
