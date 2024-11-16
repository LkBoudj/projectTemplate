import Btn from "@/components/button";
import { CheckboxField, InputField } from "@/components/Input";
import { ICredentials } from "@/store/features/authentication/interfaces";
import { authState, isAuthenticated, login } from "@/store/features/authentication/loginSlice";
import { AppDispatch } from "@/store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";




const useAuthHook = () => {

  const [userData, setUserDta] = useState<ICredentials>({ email: "", password: "" })
  const dispatch: AppDispatch = useDispatch();
  const loginState = useSelector(authState)
  const isLogin = useSelector(isAuthenticated)


  const handelInput = (val: string, name: string) => {
    setUserDta(data => ({ ...data, [name]: val }))
  }
  const handelLogin = () => {
    dispatch(login(userData))


  }


  // const handelRegister = () => {
  //   dispatch(register({ username: "admin", ...data }))
  // }





  return {
    handelLogin,
    loginState,
    handelInput,
    isLogin
  }
}

const LoginForm: React.FC = () => {

  const { handelLogin, handelInput } = useAuthHook()


  return (
    <form className="space-y-4 md:space-y-6" action="#">
      <InputField
        type="email"
        name="email"
        id="email"
        label="Your email"
        placeholder="name@company.com"
        onChange={(e) => handelInput(e.target.value, "email")}
        required
      />
      <InputField
        type="password"
        name="password"
        id="password"
        label="Password"
        placeholder="••••••••"
        onChange={(e) => handelInput(e.target.value, "password")}
        required
      />
      <div className="flex items-center justify-between">
        <CheckboxField id="remember" label="Remember me" />
        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
          Forgot password?
        </a>
      </div>
      <Btn onClick={handelLogin} label="Sign in" type="button" />

      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don't have an account yet?{' '}
        <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
          Sign up
        </a>
      </p>
    </form>
  );
};

export default LoginForm;