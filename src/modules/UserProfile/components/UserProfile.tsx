import { useAppSelector } from "@/hooks/useTypedStore"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { changeDataAPI } from "../API/ChangeDataAPI"
import PersonalData from "./PersonalData"
import RentalHistory from "./RentalHistory"

const UserProfile = () => {
    const { email, name } = useAppSelector((state) => state.userReducer)
    const [isPersonalData, setIsPersonalData] = useState<boolean>(true)
    const [isRentalHistory, setIsRentalHistory] = useState<boolean>(false)
    const [emailChangeRequest, { isSuccess: isEmailSuccess }] =
        changeDataAPI.useChangeEmailRequestMutation()
    const [passwordChangeRequest, { isSuccess: isPasswordSuccess }] =
        changeDataAPI.useChangePasswordRequestMutation()

    const navigate = useNavigate()

    const handlePersonalData = () => {
        setIsPersonalData(true)
        setIsRentalHistory(false)
    }

    const handleRentalHistory = () => {
        setIsRentalHistory(true)
        setIsPersonalData(false)
    }

    const handleEmailRequest = () => {
        navigate("/change/email")
        emailChangeRequest()
    }

    const handlePasswordRequest = () => {
        navigate("/change/password")
        passwordChangeRequest()
    }

    return (
        <section className="flex gap-32 w-1150">
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
                    isEmailSuccess={isEmailSuccess}
                    isPasswordSuccess={isPasswordSuccess}
                />
            )}
            {isRentalHistory && <RentalHistory />}
        </section>
    )
}

export { UserProfile }
