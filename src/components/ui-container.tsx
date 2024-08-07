"use client";
import { Highlight, themes } from "prism-react-renderer";
import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface IframeContentExtractorProps {
  iframeSrc: string;
}

const UICntainer: React.FC<IframeContentExtractorProps> = ({ iframeSrc }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeContent, setIframeContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== new URL(iframeSrc).origin) {
        return; // Ignore messages from different origins
      }
      if (event.data.type === "iframeContent") {
        setIframeContent(event.data.content);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      setLoading(false);
    };
  }, [iframeSrc]);

  const handleLoad = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        { type: "requestIframeContent" },
        "*"
      );
    }
  };

  console.log(iframeContent);

  if (loading) return <div>Loading...</div>;

  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="mx-auto">
        <iframe
          ref={iframeRef}
          src={iframeSrc}
          className="w-[90vw]"
          height={400}
          onLoad={handleLoad}
        />
      </TabsContent>
      <TabsContent value="password">
        <div className="overflow-auto w-[90vw]">
          <Highlight code={iframeContent} language="html">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={className}
                style={style}
                data-line="{$frame['highlight_line']}"
                data-start="{$frame['start_line']}"
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    <span>{i + 1}</span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default UICntainer;
