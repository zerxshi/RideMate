import { UserProfile } from "@/modules/UserProfile"
import React, { FunctionComponent } from "react"

const Profile: FunctionComponent = () => {
    return (
        <main className="flex justify-center w-screen h-screen mt-10">
            <UserProfile />
        </main>
    )
}

export default Profile
