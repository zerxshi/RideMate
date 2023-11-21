import React from "react"

const AdminPanel = () => {
    return (
        <section className="flex gap-14 w-1150">
            <div className="flex flex-col gap-4">
                <button className="text-2xl font-bold rounded-lg h-9 w-52 text-my-dark bg-my-blue active:scale-99">
                    Cars
                </button>
                <button className="text-2xl font-bold rounded-lg h-9 w-52 text-my-dark bg-my-blue active:scale-99">
                    Brands
                </button>
                <button className="text-2xl font-bold rounded-lg h-9 w-52 text-my-dark bg-my-blue active:scale-99">
                    Classes
                </button>
            </div>
        </section>
    )
}

export { AdminPanel }
