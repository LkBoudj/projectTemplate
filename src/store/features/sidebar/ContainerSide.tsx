import { cn } from "@/utils/helpers"
import { sidebarIsOpen } from "./sidebarSlice"
import { useSelector } from "react-redux"



const ContainerSide: React.FC<React.ComponentProps<"div">> = (props) => {
    const { className, children, ...restProps } = props
    const isOpen = useSelector(sidebarIsOpen)
    return (
        <div className={cn(isOpen && "ml-64", `w-full h-full p-4 `, className)} {...restProps}>{children}</div>
    )
}

export default ContainerSide