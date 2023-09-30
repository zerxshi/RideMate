import { CarClassCards } from "@/modules/CarClassCards"
import { RecCarousel } from "@/modules/RecCarousel"
import CarouselSlide from "@/modules/RecCarousel/components/CarouselSlide"
import React, { FunctionComponent } from "react"

const MainPage: FunctionComponent = () => {
    return (
        <main className="flex flex-col items-center">
            <RecCarousel />
            <CarClassCards />
        </main>
    )
}

export default MainPage
