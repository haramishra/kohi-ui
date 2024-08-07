export default function UILayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mt-20">{children}</div>;
}
