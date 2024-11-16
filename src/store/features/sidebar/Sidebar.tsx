import { useSelector } from "react-redux"
import { sidebarIsOpen } from "./sidebarSlice"
import { cn } from "../../../utils/helpers"
import { ISidebar } from "./interface"



const Sidebar: React.FC<ISidebar> = (props) => {
    const { children, className } = props
    const isOpen = useSelector(sidebarIsOpen)

    return (
        <aside
            className={cn(className, "overflow-hidden h-screen w-full  transition-transform duration-75 ease-in-out", isOpen ? "translate-x-[0]" : "-translate-x-full")}
        // style={{ maxWidth }}
        >
            {children}
        </aside>
    )
}

export default Sidebar