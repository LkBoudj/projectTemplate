import { useDispatch, useSelector } from "react-redux";
import { NightIcon, SunIcon } from "@/icons";
import { BtnIcon } from "@/components/button";
import { themeModeSelector, toggleMode } from "./themeModeSlice";
import { Mode } from "./interfaces";
import { BtnIconProps } from "@/components/button/configs";


const BtnToggleThemeMode:React.FC<Omit<BtnIconProps, "icon">> = (props) => {
    const {className, ...restProps} = props
    const dispatch = useDispatch();
    const themeMode = useSelector(themeModeSelector);
   
    return (
        <BtnIcon
            onClick={() => dispatch(toggleMode())}
            intent="default"
            className={className}
           
            {...restProps}
            icon={
                themeMode === Mode.DARK
                    ? <SunIcon className=" w-5 h-5" />
                    : <NightIcon className=" w-5 h-5" />
            }
        />
    );
};

export default BtnToggleThemeMode;
