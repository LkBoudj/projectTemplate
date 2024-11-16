import { DashboardIcon } from "@/icons";
import { ReactNode } from "react";

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

  export default sidebarMenu;