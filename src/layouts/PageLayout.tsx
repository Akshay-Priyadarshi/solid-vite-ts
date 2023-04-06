import { Component, JSX } from "solid-js"
import Header from "../components/Header"

const PageLayout: Component<{ children: JSX.Element }> = (props) => {
    return (
        <div class="w-full">
            <Header />
            {props.children}
        </div>
    )
}

export default PageLayout
