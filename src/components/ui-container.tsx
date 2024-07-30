"use client";
import { Highlight, themes } from "prism-react-renderer";
import { useEffect, useRef, useState } from "react";

interface IframeContentExtractorProps {
  iframeSrc: string;
}

const UICntainer: React.FC<IframeContentExtractorProps> = ({ iframeSrc }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeContent, setIframeContent] = useState<string>("");

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

  return (
    <div>
      <iframe
        ref={iframeRef}
        src={iframeSrc}
        width="600"
        height="400"
        onLoad={handleLoad}
      />
      <div>
        <Highlight code={iframeContent} language="html" theme={themes.dracula}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
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
    </div>
  );
};

export default UICntainer;
