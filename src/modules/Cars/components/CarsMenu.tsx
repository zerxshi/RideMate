import React, {FC} from 'react';
import {useTranslation} from "react-i18next";

interface Props {
    selectedMenu: string
    handleSelectedMenu(menu: string): void
}

const CarsMenu: FC<Props> = ({selectedMenu, handleSelectedMenu}) => {
    const { t } = useTranslation("carsPage")

    return (
        <section className={`h-[258px]  transition-all duration-500 flex justify-center
        ${selectedMenu === "allCars" && "bg-[url('@/assets/images/cars/allCars.png')]"}
        ${selectedMenu === "sClass" && "bg-[url('@/assets/images/cars/sClass.png')]"}
        ${selectedMenu === "bClass" && "bg-[url('@/assets/images/cars/bClass.png')]"}
        ${selectedMenu === "fClass" && "bg-[url('@/assets/images/cars/fClass.png')]"}
        `}>
            <section className={"self-end flex gap-6 w-[1150px]"}>
                <button onClick={() => handleSelectedMenu("allCars")} className="text-white">
                    <p className={`text-3xl font-russo transition-all duration-500 ${selectedMenu === "allCars" && "text-4xl text-my-gray2 bg-white p-2 pb-0 rounded-t-lg"}`}>
                        {t("classes.allCars")}</p>
                </button>
                <button onClick={() => handleSelectedMenu("sClass")} className="text-white">
                    <p className={`text-3xl font-russo transition-all duration-500 ${selectedMenu === "sClass" && "text-4xl text-my-gray2 bg-white p-2 pb-0 rounded-t-lg"}`}>
                        {t("classes.sClass")}</p>
                </button>
                <button onClick={() => handleSelectedMenu("bClass")} className="text-white">
                    <p className={`text-3xl font-russo transition-all duration-500 ${selectedMenu === "bClass" && "text-4xl text-my-gray2 bg-white p-2 pb-0 rounded-t-lg"}`}>
                        {t("classes.bClass")}</p>
                </button>
                <button onClick={() => handleSelectedMenu("fClass")} className="text-white">
                    <p className={`text-3xl font-russo transition-all duration-500 ${selectedMenu === "fClass" && "text-4xl text-my-gray2 bg-white p-2 pb-0 rounded-t-lg"}`}>
                        {t("classes.fClass")}</p>
                </button>
                <button onClick={() => handleSelectedMenu("crossovers")} className="text-white">
                    <p className={`text-3xl font-russo transition-all duration-500 ${selectedMenu === "crossovers" && "text-4xl text-my-gray2 bg-white p-2 pb-0 rounded-t-lg"}`}>
                        {t("classes.crossovers")}</p>
                </button>
            </section>
        </section>
    );
};

export default CarsMenu;