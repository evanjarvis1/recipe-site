import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import classes from './Root.module.css'
import './root.css'

const RootLayout = (props) => {

    const theme = props.theme
    const setTheme = props.setTheme

    return(
    <>
        <div className="page-body">
        <Header theme={theme} setTheme={setTheme} />
        <main className={classes.content}>
        <Outlet />
        </main>
        </div>
        <div className="footer-div">
        <Footer theme={theme} setTheme={setTheme} />
        </div>
    </>
        );
}

export default RootLayout;