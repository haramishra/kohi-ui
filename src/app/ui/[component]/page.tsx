import ComponentsContainer from "@/components/ui/component-container";
import componentCollections from "@/config/config";

export default function Components({
  params,
}: {
  params: { component: string };
}) {
  const components = componentCollections[params.component];
  console.log(components);

  return (
    <div>
      {components.map((component: { path: string; name: string }) => (
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
