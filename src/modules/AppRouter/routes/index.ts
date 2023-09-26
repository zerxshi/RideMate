import { FunctionComponent } from "react";
import { CARS_ROUTE, LK_ROUTE, LOGIN_ROUTE, MAIN_PAGE_ROUTE, TIMER_ROUTE } from "../utils/consts";
import MainPage from "@/pages/MainPage";
import Cars from "@/pages/Cars";
import CarID from "@/pages/CarID";
import TimerPage from "@/pages/TimerPage";
import LK from "@/pages/LK";
import Login from "@/pages/Login";

interface IPages {
    path: string;
    component: FunctionComponent;
}

export const publicPages: IPages[] = [
    {path: MAIN_PAGE_ROUTE, component: MainPage},
    {path: CARS_ROUTE, component: Cars},
    {path: CARS_ROUTE + "/:id", component: CarID},
    {path: LOGIN_ROUTE, component: Login}
]

export const privatePages: IPages[] = [
    {path: MAIN_PAGE_ROUTE, component: MainPage},
    {path: CARS_ROUTE, component: Cars},
    {path: CARS_ROUTE + "/:id", component: CarID},
    {path: TIMER_ROUTE, component: TimerPage},
    {path: LK_ROUTE, component: LK}
]