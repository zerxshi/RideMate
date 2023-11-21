import { AdminPanel } from "@/modules/AdminPanel"
import React, { FC } from "react"

const AdminPage: FC = () => {
    return (
        <main className="flex justify-center w-screen h-screen mt-10">
            <AdminPanel />
        </main>
    )
}

export default AdminPage
