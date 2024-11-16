import { cn } from '@/utils/helpers'
import { buttonVariant, ButtonProps, BtnIconProps } from './configs'


const Btn: React.FC<ButtonProps> = (props) => {
    const { className, intent, label, size, leftComponent, rightComponent, ...restProps } = props
    return (
        <button className={cn(buttonVariant({
            className, intent,
            size
        }))} {...restProps} >
            {leftComponent && leftComponent}
            {label}
            {rightComponent && rightComponent}

        </button>
    )
}

export const BtnIcon: React.FC<BtnIconProps> = (props) => {

    const { className, icon, ...restProps } = props

    return <Btn
        className={cn(className, "flex items-center justify-center")}
        leftComponent={icon}
        size="icon"
        {...restProps}
    />

}
export default Btn