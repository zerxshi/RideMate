import React, {FC} from 'react';
import {useTranslation} from "react-i18next";

interface Props {
    selectedMenu: string
    handleSelectedMenu(menu: string): void
}

const CarsMenu: FC<Props> = ({selectedMenu, handleSelectedMenu}) => {
    const { t } = useTranslation("carsPage")

    return (
        <section className={`bg-[url('@/assets/images/cars/${selectedMenu}.png')] h-[258px]`}>
            <section className={"bottom-[0] inset-x-0"}>
                <button onClick={() => handleSelectedMenu("allCars")}>
                    <b>{t("classes.allCars")}</b>
                </button>
                <button onClick={() => handleSelectedMenu("sClass")}>
                    <b>{t("classes.sClass")}</b>
                </button>
                <button onClick={() => handleSelectedMenu("bClass")}>
                    <b>{t("classes.bClass")}</b>
                </button>
            </section>
        </section>
        // <section className={`h-[258px]
        // ${selectedMenu === "allCars" && "bg-[url('@/assets/images/cars/allCars.png')]"}
        // ${selectedMenu === "sClass" && "bg-[url('@/assets/images/cars/sClass.png')]"}
        // ${selectedMenu === "bClass" && "bg-[url('@/assets/images/cars/bClass.png')]"}
        // `}>
        //     <section className={"bottom-[0] inset-x-0"}>
        //         <button onClick={() => handleSelectedMenu("allCars")}>
        //             <b>{t("classes.allCars")}</b>
        //         </button>
        //         <button onClick={() => handleSelectedMenu("sClass")}>
        //             <b>{t("classes.sClass")}</b>
        //         </button>
        //         <button onClick={() => handleSelectedMenu("bClass")}>
        //             <b>{t("classes.bClass")}</b>
        //         </button>
        //     </section>
        // </section>
    );
};

export default CarsMenu;