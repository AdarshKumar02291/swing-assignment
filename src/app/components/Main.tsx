import Header from "./Header";
import Dropdown from "./DropDown";
import Infoarea from "./Infoarea";

function Main() {
  return (
    <div className="h-screen w-full bg-[#EFF0F6] px-[34px]">
      <Header />
      <Dropdown />
      <Infoarea />
    </div>
  );
}

export default Main;
