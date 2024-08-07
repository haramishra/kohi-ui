import ComponentsContainer from "@/components/ui/component-container";

export default function Blog() {
  const components = [
    {
      path: "https://kohi-unifyui.pages.dev/resources/blog-sections/1/",
      name: "Example 1",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/blog-sections/2/",
      name: "Example 2",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/features_services/3/",
      name: "Example 3",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/blog-sections/4/",
      name: "Example 4",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/blog-sections/5/",
      name: "Example 5",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/blog-sections/6/",
      name: "Example 6",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/blog-sections/7/",
      name: "Example 7",
    },
    {
      path: "https://kohi-unifyui.pages.dev/resources/blog-sections/8/",
      name: "Example 8",
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
