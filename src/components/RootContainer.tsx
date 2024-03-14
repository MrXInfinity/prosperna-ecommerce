import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function RootContainer() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-x-hidden">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
