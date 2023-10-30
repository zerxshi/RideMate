import React, {FC} from 'react';
import {IBrand, ICar, IClass} from "@/modules/Cars/types";
import {BASE_SERVER_URL} from "@/utils/consts";
import {useTranslation} from "react-i18next";

interface Props {
    car: ICar
    brand: IBrand | undefined
    carClass: IClass | undefined
}

const CarItem: FC<Props> = ({car, brand, carClass}) => {
    const { t } = useTranslation("carsPage")

    return (
        <section className={"flex shadow-2xl gap-5 mb-10"}>
            <img
                src={BASE_SERVER_URL + car.img}
                className={"w-[329px]"}
            />
           <section className={"w-[100%] grid grid-cols-3 p-5"}>
               <section>
                   <p className={"text-2xl"}>
                       {car.model}
                   </p>
                   <p>{t("characteristics.brand")}: {brand?.name}</p>
               </section>
               <section>
                   {t("characteristics.class")}: {carClass?.name}
               </section>
               <section className={"flex flex-col justify-between text-end"}>
                   <p>{t("characteristics.price")}: {car.price}</p>
                   <p>{t("characteristics.mileage")}: {car.mileage}</p>
               </section>
           </section>
        </section>
    );
};

export default CarItem;