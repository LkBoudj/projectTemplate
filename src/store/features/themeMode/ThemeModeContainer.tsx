import { useSelector } from "react-redux"
import { themeModeSelector } from "./themeModeSlice"
import { cn } from "@/utils/helpers"


const ThemeModeContainer: React.FC<React.ComponentProps<"div">> = (props) => {
    const { children, className ,...reestProp} = props
    const themeMode = useSelector(themeModeSelector)
    return <div className={cn("relative h-screen",className, themeMode )} {...reestProp}>{children}</div>
}
    
export default ThemeModeContainer