import React, {FC, useState} from 'react';
import CarsMenu from "@/modules/Cars/components/CarsMenu";

interface Props {
    menu: string | null;
}

const CarsForm: FC<Props> = ({menu}) => {
    const [selectedMenu, setSelectedMenu] = useState<string>(menu ? menu : "allCars")

    const handleSelectedMenu = (menu: string) => {
        setSelectedMenu(menu)
    }

    return (
        <section>
            <CarsMenu selectedMenu={selectedMenu} handleSelectedMenu={handleSelectedMenu}/>
            Cars
        </section>
    );
};

export { CarsForm };