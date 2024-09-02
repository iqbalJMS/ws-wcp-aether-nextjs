import { ACT_GetNavbarMenu } from "./$action/action.get.navbar-menu";

export default async function AetherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // eslint-disable-next-line no-unused-vars
  const data = await ACT_GetNavbarMenu({ lang: "en" });

  return (
    <>
      {/* TODO: waiting for component Navbar */}
      {children}
      {/* TODO: waiting for component Footer */}
    </>
  );
}
