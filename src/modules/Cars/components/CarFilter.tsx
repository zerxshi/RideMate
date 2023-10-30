import React, {FC} from 'react';
import { SetURLSearchParams } from 'react-router-dom';
import {useTranslation} from "react-i18next";

interface Props {
    searchParams: URLSearchParams;
    setSearchParams: SetURLSearchParams;
}

const CarFilter: FC<Props> = ({searchParams, setSearchParams}) => {
    const { t } = useTranslation("carsPage")

    return (
        <section className={"shadow-2xl p-5"}>
            {t("filter.sort")}
            <ul>
                <li>

                </li>
            </ul>
        </section>
    );
};

export default CarFilter;