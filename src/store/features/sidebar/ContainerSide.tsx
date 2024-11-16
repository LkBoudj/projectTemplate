import { cn } from "@/utils/helpers"
import { sidebarIsOpen } from "./sidebarSlice"
import { useSelector } from "react-redux"



const ContainerSide: React.FC<React.ComponentProps<"div">> = (props) => {
    const { className, children, ...restProps } = props
    const isOpen = useSelector(sidebarIsOpen)
    return (
        <div className={cn(isOpen && "ml-64", `w-full  p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700`, className)} {...restProps}>{children}</div>
    )
}

export default ContainerSide