import React, { FC } from "react"

interface PersonalDataProps {
    name: string | null
    email: string | null
    emailChangeRequest: () => void
    passwordChangeRequest: () => void
    isEmailSuccess: boolean
    isPasswordSuccess: boolean
}

const PersonalData: FC<PersonalDataProps> = ({
    name,
    email,
    emailChangeRequest,
    passwordChangeRequest,
    isEmailSuccess,
    isPasswordSuccess,
}) => {
    const modifiedEmail = email!.replace(
        /(.*)(.{3})@(.*)/,
        (_, prefix, lastThree, afterAt) =>
            prefix.replace(/[a-zA-Z]/g, "*") + lastThree + "@" + afterAt,
    )

    return (
        <section className="flex flex-col gap-3 ">
            <h2 className="text-2xl font-bold text-white">
                Personal information
            </h2>
            <dl className="flex gap-2 text-xl font-bold text-white">
                <dt>Name:</dt>
                <dd>{name}</dd>
            </dl>
            <div className="flex gap-5">
                <dl className="flex gap-2 text-xl font-bold text-white">
                    <dt>Email:</dt>
                    <dd>{modifiedEmail}</dd>
                </dl>
                <button
                    onClick={emailChangeRequest}
                    className="text-xl font-bold rounded-lg w-44 text-my-dark bg-my-blue active:scale-99"
                >
                    Change email
                </button>
            </div>
            <div className="flex gap-5">
                <dl className="flex gap-2 text-xl font-bold text-white">
                    <dt>Password:</dt>
                    <dd>*********</dd>
                </dl>
                <button
                    onClick={passwordChangeRequest}
                    className="text-xl font-bold rounded-lg w-44 text-my-dark bg-my-blue active:scale-99"
                >
                    Change password
                </button>
            </div>
        </section>
    )
}

export default PersonalData
