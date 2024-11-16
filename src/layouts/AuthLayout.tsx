import { Aside } from "@/components"
import { SuspenseLoading } from "@/components/SuspenseLoading"
import ProtectedRoute from "@/routes/ProtectedRoute"
import { ContainerSide } from "@/store/features"
import { cn } from "@/utils/helpers"

const AuthLayout: React.FC<React.ComponentProps<"div">> = (props) => {
    const { children, className, ...restProp } = props
    return <ProtectedRoute >
        <SuspenseLoading>
            <div className={cn("relative h-screen", className)} {...restProp}>
                <Aside />
                <ContainerSide className="" >
                    {children}
                </ContainerSide>
            </div>
        </SuspenseLoading>
    </ProtectedRoute>

}

export default AuthLayout