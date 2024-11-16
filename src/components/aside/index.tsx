import { BtnToggleSideBar, Sidebar } from "@/store/features";
import SidebarItem from "./SidebarItem";
import sidebarMenu from "./data";







const Aside = () => {

  return (

    <Sidebar className="bg-gray-50 dark:bg-gray-800 fixed top-0 left-0 z-40 max-w-64 h-screen " aria-label="Sidebar" >
      <div className="h-full px-3 py-4 overflow-y-auto space-y-6 ">
        <div className="flex justify-between items-center" >
          <p className="text-white font-bold">LKERP</p>
          <BtnToggleSideBar className="text-gray-500 dark:text-gray-400" />
        </div>
        <ul className="space-y-2 font-medium">
          {
            sidebarMenu.map((item, i) => <SidebarItem key={i} {...item} />)
          }
        </ul>
      </div>


    </Sidebar>
  )
}

export default Aside