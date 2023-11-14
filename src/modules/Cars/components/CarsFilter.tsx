import React, {FC, useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {SetURLSearchParams} from "react-router-dom";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import Calendar, { TileClassNameFunc, TileArgs} from "react-calendar";
import i18n from "i18next";
import 'react-calendar/dist/Calendar.css';
import {Value} from "react-calendar/dist/cjs/shared/types";

interface Props {
    searchParams: URLSearchParams;
    setSearchParams: SetURLSearchParams;
}

const CarsFilter: FC<Props> = ({searchParams, setSearchParams}) => {
    const { t } = useTranslation("carsPage")
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(100);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [selectedDates, setSelectedDates] = useState<Date[]>([]);

    const handleDateChange = (value: Value, event: MouseEvent) => {
        if (Array.isArray(value)) {
            const [newStartDate, newEndDate] = value;
            setStartDate(newStartDate);
            setEndDate(newEndDate);
            setSelectedDates([]);
        } else {
            setStartDate(value);
            setEndDate(null);
        }
    };

    useEffect(() => {
        const datesBetween: Date[] = [];
        let currentDate;
        if (startDate) {
            currentDate = new Date(startDate);
        }

        if (endDate && currentDate) {
            while (currentDate <= endDate) {
                datesBetween.push(new Date(currentDate));
                currentDate.setDate(currentDate.getDate() + 1);
            }
        }

        setSelectedDates(datesBetween);
    }, [endDate]);

    useEffect(() => {
        if (searchParams.getAll("dates")) {
            searchParams.forEach((value, key) => {
                searchParams.delete(key, value)
            })
        }
        if (selectedDates) {
            setSearchParams(params => {
                selectedDates.forEach(date => {
                    params.append('dates', toStringDate(date));
                });
                return params
            })
        }
    }, [selectedDates]);

    const toStringDate = (date: Date) => {
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        return year + "-" + month + "-" + day;
    }

    const tileClassName: TileClassNameFunc = (props: TileArgs) => {
        const {date, view} = props
        if (view === 'month') {
            if (startDate && endDate) {
                const isInRange = date >= startDate && date <= endDate;
                return isInRange ? 'bg-my-blue' : null;
            }
        }
        return null;
    };

    const handleChange = (values: number | number[]): void => {
        if (Array.isArray(values)) {
            setMinPrice(values[0])
            setMaxPrice(values[1])
            setSearchParams(params => {
                params.set("minPrice", values[0].toString())
                return params
            })
            setSearchParams(params => {
                params.set("maxPrice", values[1].toString())
                return params
            })
        }

    }

    return (
        <div>
            {t("sortAndFilters.filters")}
            <ul className={"flex flex-col gap-5"}>
                <li>
                    <p>{t("sortAndFilters.minPrice")}: {minPrice}</p>
                    <p>{t("sortAndFilters.maxPrice")}: {maxPrice}</p>
                    <Slider
                        range
                        min={0}
                        max={100}
                        defaultValue={[minPrice, maxPrice]}
                        onChange={handleChange}
                    />
                </li>
                <li>
                    <Calendar
                        value={[startDate, endDate]}
                        onChange={handleDateChange}
                        tileClassName={tileClassName}
                        locale={i18n.language}
                        selectRange={true}
                    />
                </li>
            </ul>
        </div>
    );
};

export default CarsFilter;