import Header from "./Header";
import {Outlet} from "react-router-dom";

export default function Layout() {
  return (
    <div id="main1">
      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
