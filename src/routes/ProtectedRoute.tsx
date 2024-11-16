import { isAuthenticated } from "@/store/features/authentication/loginSlice"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


interface IProtectedRoute extends React.PropsWithChildren {

    redirectPath?: string
}

const Protected: React.FC<IProtectedRoute> = (props) => {
    const { redirectPath = "/login", children } = props
    const isLogin = useSelector(isAuthenticated)


    if (!isLogin) {

        return <Navigate to={redirectPath} replace />;
    }




    return children
}

export default Protected