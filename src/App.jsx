import { Fragment } from "react";
import Header from "./components/header/header.component";
import Nav from "./components/nav/nav.component";
import Main from "./components/main/main.component";

import "./App.module.css";

const App = () => {
    return (
        <Fragment>
            <Header/>
            <Nav/>
            <Main/>
        </Fragment>
    );
}

export default App;