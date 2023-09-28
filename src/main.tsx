import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import "./i18n/config"
import { Provider } from "react-redux"
import { store } from "./store"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faAngleDown, fas } from "@fortawesome/free-solid-svg-icons"

library.add(fas, faAngleDown)

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
)
