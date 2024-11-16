import { useDispatch, useSelector } from "react-redux";
import { sidebarIsOpen, toggleSidebar } from "@/store/features/sidebar/sidebarSlice";
import { CloseIcon, MenuIcon } from "@/icons";
import { BtnIcon } from "@/components/button";
import { BtnIconProps } from "@/components/button/configs";


const BtnToggleSideBar:React.FC<Omit<BtnIconProps, "icon">> = (props) => {
    const {className, ...restProps} = props
    const dispatch = useDispatch();
    const isOpen = useSelector(sidebarIsOpen);

    return (
        <BtnIcon
            onClick={() => dispatch(toggleSidebar())}
            intent="default"
            className={className}
            {...restProps}
            icon={
                isOpen
                    ? <CloseIcon className=" w-5 h-5" />
                    : <MenuIcon className=" w-5 h-5" />
            }
        />
    );
};

export default BtnToggleSideBar;
