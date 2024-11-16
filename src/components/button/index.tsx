import { cn } from '@/utils/helpers'
import { buttonVariant, ButtonProps, BtnIconProps } from './configs'
import { SpinnerIcon } from '@/icons'


const Btn: React.FC<ButtonProps> = (props) => {
    const { className, intent, isLoading, label, size, leftComponent, rightComponent, ...restProps } = props
    return (
        <button className={cn(buttonVariant({
            className, intent,
            size
        }))} {...restProps} >

            {isLoading && <SpinnerIcon className='animate-spin  me-2 ' size={20} />}
            {leftComponent && !isLoading && leftComponent}
            {label}
            {rightComponent && rightComponent}


        </button>
    )
}

export const BtnIcon: React.FC<BtnIconProps> = (props) => {

    const { className, icon, ...restProps } = props

    return <Btn
        className={cn(className, "p-2.5 text-center ")}
        leftComponent={icon}
        size="icon"
        {...restProps}
    />

}
export default Btn


/*

<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5  me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
<span class="sr-only">Icon description</span>
</button>


*/