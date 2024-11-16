import Btn, { BtnIcon } from "@/components/button"
import { DashboardIcon } from "@/icons"
import { AuthLayout } from "@/layouts"
import { BtnToggleSideBar, BtnToggleThemeMode } from "@/store/features"

const HomePage: React.FC = () => {
    return <AuthLayout >
        <Btn label="Test" intent="alternative" />
        <BtnIcon className="border hover:bg-gray-100" intent="default" icon={<DashboardIcon />} />
        <BtnToggleSideBar className="text-gray-500 border hover:bg-gray-100" />
        <BtnToggleThemeMode className="text-gray-500 border hover:bg-gray-100" />
    </AuthLayout>
}

export default HomePage