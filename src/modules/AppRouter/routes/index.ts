import { FunctionComponent } from "react"
import {
    CARS_ROUTE,
    LOGIN_ROUTE,
    MAIN_PAGE_ROUTE,
    PROFILE_ROUTE,
    TIMER_ROUTE,
    RECOVERY_ROUTE,
} from "../utils/consts"
import MainPage from "@/pages/MainPage"
import Cars from "@/pages/Cars"
import CarID from "@/pages/CarID"
import TimerPage from "@/pages/TimerPage"
import Profile from "@/pages/Profile"
import Login from "@/pages/Login"
import PasswordRecovery from "@/pages/PasswordRecovery"

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
]

export const privatePages: IPages[] = [
    { path: MAIN_PAGE_ROUTE, component: MainPage },
    { path: CARS_ROUTE, component: Cars },
    { path: CARS_ROUTE + "/:id", component: CarID },
    { path: TIMER_ROUTE, component: TimerPage },
    { path: PROFILE_ROUTE, component: Profile },
]
