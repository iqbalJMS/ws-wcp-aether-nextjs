import CE_Wrapper from "./$element/client.wrapper";



export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CE_Wrapper>{children}</CE_Wrapper>;
}
