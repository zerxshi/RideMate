import React, {FC} from 'react';
import { SetURLSearchParams } from 'react-router-dom';
import CartSort from "@/modules/Cars/components/CartSort";
import CarsFilter from "@/modules/Cars/components/CarsFilter";

interface Props {
    searchParams: URLSearchParams;
    setSearchParams: SetURLSearchParams;
}

const CarSortAndFilter: FC<Props> = ({searchParams, setSearchParams}) => {

    return (
        <section className={"shadow-2xl p-5"}>
            <CartSort searchParams={searchParams} setSearchParams={setSearchParams}/>
            <CarsFilter searchParams={searchParams} setSearchParams={setSearchParams}/>
        </section>
    );
};

export default CarSortAndFilter;