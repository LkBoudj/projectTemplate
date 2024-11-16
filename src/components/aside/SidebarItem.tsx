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

  export default SidebarItem;