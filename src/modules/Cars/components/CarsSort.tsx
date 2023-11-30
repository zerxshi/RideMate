import React, {FC, useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {SetURLSearchParams} from "react-router-dom";

interface Props {
    searchParams: URLSearchParams;
    setSearchParams: SetURLSearchParams;
}

const CarsSort: FC<Props> = ({ setSearchParams, searchParams}) => {
    const { t } = useTranslation("carsPage")
    const [selectedSort, setSelectedSort] = useState<string| undefined>(undefined)
    const [sortMethod, setSortMethod] = useState<string | undefined>(undefined)

    useEffect(() => {
        setSearchParams(params => {
            if (selectedSort) {
                params.set("sort", selectedSort)
            }
            return params
        })
    }, [selectedSort]);

    useEffect(() => {
        setSearchParams(params => {
            if (sortMethod) {
                params.set("sortBy", sortMethod)
            }
            return params
        })
    }, [sortMethod]);

    return (
        <div>
            {t("sortAndFilters.sortBy")}
            <ul>
                <li>
                    <select
                        value={selectedSort}
                        onChange={event => setSelectedSort(event.target.value)}
                        defaultValue={undefined}
                    >
                        <option
                            value={"model"}
                        >
                            Model
                        </option>
                        <option
                            value={"price"}
                        >
                            Price
                        </option>
                    </select>
                </li>
                <li>
                    <select
                        value={sortMethod}
                        onChange={event => setSortMethod(event.target.value)}
                        defaultValue={undefined}
                    >
                        <option
                            value={"asc"}
                            onChange={() => setSortMethod("asc")}
                        >
                            Asc
                        </option>
                        <option
                            value={"desc"}
                            onChange={() => setSortMethod("desc")}
                        >
                            Desc
                        </option>
                    </select>
                </li>
            </ul>
        </div>
    );
};

export default CarsSort;