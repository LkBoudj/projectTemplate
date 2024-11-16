import { Sidebar } from "@/store/features";
import { BtnIcon } from "../button";
import { useDispatch, useSelector } from "react-redux";
import { sidebarIsOpen, toggleSidebar } from "@/store/features/sidebar/sidebarSlice";
import { CloseIcon, DashboardIcon, MenuIcon } from "@/icons";
import { cn } from "@/utils/helpers";
import { ReactNode } from "react";


interface SidebarItem extends React.ComponentProps<"li"> {
  label: string;
  icon: ReactNode,
}

const SidebarItem: React.FC<SidebarItem> = (props) => {
  const { className, icon, label, ...restProps } = props

  return <li {...restProps}>
    <a href="#" className={cn(className, "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group")}>
      {icon}
      <span className="ms-3">{label}</span>
    </a>
  </li>
}


interface iSidebarMenu {
  label: string,
  icon: ReactNode

}

const sidebarMenu: iSidebarMenu[] = [
  {
    label: "Dashboard",
    icon: <DashboardIcon className=" text-gray-500 w-5 h-5 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
  }
];

const Aside = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(sidebarIsOpen)


  /*
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>
  
  */
  return (

    <Sidebar className="fixed top-0 left-0 z-40 max-w-64 h-screen " aria-label="Sidebar" >

      <div className="h-full px-3 py-4 overflow-y-auto space-y-6 bg-gray-50 dark:bg-gray-800">
        <div className="flex justify-between items-center" >
          <p className="text-white font-bold">LKERP</p>
          <BtnIcon
            onClick={() => dispatch(toggleSidebar())}
            intent="default"
            className="rounded-full"
            icon={
              isOpen ? <CloseIcon className="text-white w-5 h-5" /> : <MenuIcon className="text-white w-4 h-5" />
            }
          />
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