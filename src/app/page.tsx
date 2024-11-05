import { SideBar } from "./components/Sidebar";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      <Main/>
    </div>
  );
}
