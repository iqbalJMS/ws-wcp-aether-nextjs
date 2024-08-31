// import { ACT_GetNavbarMenu } from "./$action/action.get.navbar-menu";

export default async function AetherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //TODO:  waiting for component navbar
  // const data = await ACT_GetNavbarMenu({ lang: "en" });

  return (
    <>
      {/* TODO: waiting for component Navbar */}
      {children}
      {/* TODO: waiting for component Footer */}
    </>
  );
}
