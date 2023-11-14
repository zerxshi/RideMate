import React, {FC} from 'react';
import {useTranslation} from "react-i18next";
import {SetURLSearchParams} from "react-router-dom";

interface Props {
    searchParams: URLSearchParams;
    setSearchParams: SetURLSearchParams;
}

const CartSort: FC<Props> = () => {
    const { t } = useTranslation("carsPage")

    return (
        <div>
            {t("sortAndFilters.sortBy")}
            <ul>
                <li>

                </li>
            </ul>
        </div>
    );
};

export default CartSort;