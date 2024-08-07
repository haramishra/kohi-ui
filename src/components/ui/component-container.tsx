"use client";
import { Highlight, themes } from "prism-react-renderer";
import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./button";
import {
  MonitorCheckIcon,
  MonitorIcon,
  SmartphoneIcon,
  TabletIcon,
} from "lucide-react";

interface IframeContentExtractorProps {
  iframeSrc: string;
  name: string;
}

const ComponentsContainer: React.FC<IframeContentExtractorProps> = ({
  iframeSrc,
  name,
}) => {
  const [width, setWidth] = useState(1280);
  const [active, setActive] = useState("desktop");

  const handleWidthChange = (widht: number, active: string) => {
    setWidth(widht);
    setActive(active);
  };

  return (
    <div className="mx-auto space-y-8 max-w-[1280px] mb-20">
      <h2 className="text-3xl">{name}</h2>
      <div className="flex gap-4 items-center">
        <Button
          onClick={() => handleWidthChange(400, "mobile")}
          variant={active === "mobile" ? "default" : "outline"}
        >
          <SmartphoneIcon size={20} />
        </Button>
        <Button
          onClick={() => handleWidthChange(712, "tablet")}
          variant={active === "tablet" ? "default" : "outline"}
        >
          <TabletIcon size={20} />
        </Button>
        <Button
          onClick={() => handleWidthChange(1280, "desktop")}
          variant={active === "desktop" ? "default" : "outline"}
        >
          <MonitorIcon size={20} />
        </Button>
      </div>
      <iframe
        src={iframeSrc}
        width={width}
        height={740}
        className=" mx-auto rounded transition-all duration-300 ease-out"
      />
    </div>
  );
};

export default ComponentsContainer;
