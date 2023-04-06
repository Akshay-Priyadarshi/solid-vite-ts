import { Component } from "solid-js"
import { Link } from "@solidjs/router"
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"

const Header: Component<{}> = (props) => {
    return (
        <div class="w-full flex flex-row justify-between bg-slate-950 text-white p-4">
            <h1>Splitwise</h1>
            <div class="flex flex-row">
                <Link href="/" class="ml-4">
                    Home
                </Link>
                <Link href="/about" class="ml-4">
                    About
                </Link>
            </div>
        </div>
    )
}

export default Header
