import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <SideBar />
      <Inset>{children}</Inset>
    </div>
  );
}

function SideBar() {
  return (
    <aside className="hidden md:block min-h-svh bg-red-50 w-[16rem]">
      Sidebar
    </aside>
  );
}

function Inset({ children }: { children: ReactNode }) {
  return <main className="min-h-svh flex flex-1 bg-green-50">{children}</main>;
}

export default Layout;
