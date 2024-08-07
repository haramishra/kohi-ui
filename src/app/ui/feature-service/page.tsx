import ComponentsContainer from "@/components/ui/component-container";

export default function Features() {
  const components = [
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/1/",
      name: "Example 1",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/2/",
      name: "Example 2",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/3/",
      name: "Example 3",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/4/",
      name: "Example 4",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/5/",
      name: "Example 5",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/6/",
      name: "Example 6",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/7/",
      name: "Example 7",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/8/",
      name: "Example 8",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/9/",
      name: "Example 9",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/10/",
      name: "Example 10",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/11/",
      name: "Example 11",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/12/",
      name: "Example 12",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/13/",
      name: "Example 13",
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
