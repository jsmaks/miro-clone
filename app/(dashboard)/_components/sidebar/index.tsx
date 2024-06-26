import { NewButton } from "./new-button";


const Sidebar = () => {
  return (
    <aside className="fixed left-0 z-[1] flex flex-col h-full w-[60px] gap-y-4 bg-blue-950 p-3 text-white">
      <NewButton/>
    </aside>
  );
};

export default Sidebar;
