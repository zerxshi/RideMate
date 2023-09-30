import React, { FC } from "react"

interface CarouselSlideProps {
    imageSrc: string
    carName: string
}

const CarouselSlide: FC<CarouselSlideProps> = ({ imageSrc, carName }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={imageSrc} alt="carName" />
            <b className="text-xl text-my-white">{carName}</b>
        </div>
    )
}

export default CarouselSlide
