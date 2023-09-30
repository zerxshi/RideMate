import React, { FC } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CarouselSlide from "./CarouselSlide"

const RecCarousel: FC = () => {
    interface ICarouselItem {
        imageSrc: string
        carName: string
    }

    const carouselItems: ICarouselItem[] = [
        {
            imageSrc:
                "https://avatars.mds.yandex.net/get-verba/1030388/2a0000017fc041a9748f943eacf34fbea07f/cattouchret",
            carName: "BMW M4",
        },
        {
            imageSrc:
                "https://avatars.mds.yandex.net/get-verba/1030388/2a000001786ed43a1847656259d8beb768fd/cattouchret",
            carName: "KIA K5",
        },
        {
            imageSrc:
                "https://avatars.mds.yandex.net/get-verba/1540742/2a00000170cf371dfeecd31a973c70532c7c/cattouchret",
            carName: "Hyundai Creta",
        },
        {
            imageSrc:
                "https://avatars.mds.yandex.net/get-verba/787013/2a0000016090e9f0a83f87884612556886e8/cattouchret",
            carName: "Land Rover Range Rover",
        },
    ]

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
    }

    return (
        <section className="m-auto mt-5 w-1800">
            <h2 className="mb-4 text-3xl font-bold text-center text-my-white">
                Recommended cars
            </h2>
            <Slider {...settings}>
                {carouselItems.map((item) => (
                    <CarouselSlide
                        key={item.carName}
                        imageSrc={item.imageSrc}
                        carName={item.carName}
                    />
                ))}
            </Slider>
        </section>
    )
}

export { RecCarousel }
