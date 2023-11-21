import { FunctionComponent } from "react"
import {
    CARS_ROUTE,
    LOGIN_ROUTE,
    MAIN_PAGE_ROUTE,
    PROFILE_ROUTE,
    RECOVERY_ROUTE,
    EMAIL_CHANGE_ROUTE,
    PASSWORD_CHANGE_ROUTE,
    ADMIN_PAGE_ROUTE,
} from "@/modules/AppRouter/utils/consts"
import MainPage from "@/pages/MainPage"
import Cars from "@/pages/Cars"
import CarID from "@/pages/CarID"
import Profile from "@/pages/Profile"
import Login from "@/pages/Login"
import PasswordRecovery from "@/pages/PasswordRecovery"
import EmailChange from "@/pages/EmailChange"
import PasswordChange from "@/pages/PasswordChange"
import AdminPage from "@/pages/AdminPage"

interface IPages {
    path: string
    component: FunctionComponent
}

export const publicPages: IPages[] = [
    { path: MAIN_PAGE_ROUTE, component: MainPage },
    { path: CARS_ROUTE, component: Cars },
    { path: CARS_ROUTE + "/:id", component: CarID },
    { path: LOGIN_ROUTE, component: Login },
    { path: RECOVERY_ROUTE, component: PasswordRecovery },
    { path: EMAIL_CHANGE_ROUTE, component: EmailChange },
    { path: PASSWORD_CHANGE_ROUTE, component: PasswordChange },
]

export const privatePages: IPages[] = [
    { path: MAIN_PAGE_ROUTE, component: MainPage },
    { path: CARS_ROUTE, component: Cars },
    { path: CARS_ROUTE + "/:id", component: CarID },
    { path: PROFILE_ROUTE, component: Profile },
    { path: ADMIN_PAGE_ROUTE, component: AdminPage },
]
