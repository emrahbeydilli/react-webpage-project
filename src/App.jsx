import { Fragment } from "react";
import Header from "./components/header/header.component";
import Nav from "./components/nav/nav.component";

import "./App.module.css";

const App = () => {
    return (
        <Fragment>
            <Header/>
            <Nav/>
        </Fragment>
    );
}

export default App;