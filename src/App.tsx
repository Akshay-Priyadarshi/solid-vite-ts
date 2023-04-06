import { Route, Router, Routes } from "@solidjs/router"
import { Component, createSignal } from "solid-js"
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"

const [name, setName] = createSignal<string>("")

const App: Component = () => {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/about"} element={<AboutPage />} />
            </Routes>
        </Router>
    )
}

export { name, setName }
export default App
