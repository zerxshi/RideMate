import React, {FC} from 'react';
import { SetURLSearchParams } from 'react-router-dom';
import CarsSort from "@/modules/Cars/components/CarsSort";
import CarsFilter from "@/modules/Cars/components/CarsFilter";

interface Props {
    searchParams: URLSearchParams;
    setSearchParams: SetURLSearchParams;
}

const CarsSortAndFilter: FC<Props> = ({searchParams, setSearchParams}) => {

    return (
        <section className={"shadow-2xl p-5"}>
            <CarsSort searchParams={searchParams} setSearchParams={setSearchParams}/>
            <CarsFilter searchParams={searchParams} setSearchParams={setSearchParams}/>
        </section>
    );
};

export default CarsSortAndFilter;