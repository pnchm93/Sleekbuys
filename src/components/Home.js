import { NavLink } from "react-router-dom";
import { Fragment } from "react";
function Home() {
    return (
        <Fragment className="home-page">
        <h1>Home Page...!</h1>
            <h2>Welcome to the Home page.</h2>
            <NavLink to='/sleekbuys' className='home-link'>Visit the SleekBuys</NavLink>
        </Fragment>
    )
}
export default Home;