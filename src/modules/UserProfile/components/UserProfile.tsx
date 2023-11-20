import { useAppSelector } from "@/hooks/useTypedStore"
import React, { useState } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { changeDataAPI } from "@/modules/UserProfile/API/ChangeDataAPI"
import PersonalData from "@/modules/UserProfile/components/PersonalData"
import RentalHistory from "@/modules/UserProfile/components/RentalHistory"
import { rentalHistoryAPI } from "@/modules/UserProfile/API/rentalHistoryAPI"

const UserProfile = () => {
    const [emailChangeRequest, {}] =
        changeDataAPI.useChangeEmailRequestMutation()

    const [passwordChangeRequest, {}] =
        changeDataAPI.useChangePasswordRequestMutation()

    const { data: rentalHistory } = rentalHistoryAPI.useGetRentalHistoryQuery()
    const [cancelReservation] = rentalHistoryAPI.useCancelRentalMutation()

    const { email, name } = useAppSelector((state) => state.userReducer)

    const [isPersonalData, setIsPersonalData] = useState<boolean>(true)
    const [isRentalHistory, setIsRentalHistory] = useState<boolean>(false)

    const navigate: NavigateFunction = useNavigate()

    const handlePersonalData = (): void => {
        setIsPersonalData(true)
        setIsRentalHistory(false)
    }

    const handleRentalHistory = (): void => {
        setIsRentalHistory(true)
        setIsPersonalData(false)
    }

    const handleEmailRequest = async (): Promise<void> => {
        const result = await emailChangeRequest()
        if ("data" in result) {
            navigate("/change/email")
        }
    }

    const handlePasswordRequest = async (): Promise<void> => {
        const result = await passwordChangeRequest()
        if ("data" in result) {
            navigate("/change/password")
        }
    }

    const handleCancelReservation = async (
        historyId: number,
    ): Promise<void> => {
        await cancelReservation({ historyId })
    }

    return (
        <section className="flex gap-14 w-1150">
            <div className="flex flex-col gap-4">
                <button
                    className="text-2xl font-bold rounded-lg h-9 w-52 text-my-dark bg-my-blue active:scale-99"
                    onClick={handlePersonalData}
                >
                    Personal data
                </button>
                <button
                    className="text-2xl font-bold rounded-lg h-9 w-52 text-my-dark bg-my-blue active:scale-99"
                    onClick={handleRentalHistory}
                >
                    Rental history
                </button>
            </div>
            {isPersonalData && (
                <PersonalData
                    name={name}
                    email={email}
                    emailChangeRequest={handleEmailRequest}
                    passwordChangeRequest={handlePasswordRequest}
                />
            )}
            {isRentalHistory &&
                rentalHistory &&
                rentalHistory.history &&
                rentalHistory.cars &&
                rentalHistory.brands && (
                    <RentalHistory
                        cars={rentalHistory.cars}
                        brands={rentalHistory.brands}
                        rentalCars={rentalHistory.history.rows}
                        cancelReservation={handleCancelReservation}
                    />
                )}
        </section>
    )
}

export { UserProfile }
